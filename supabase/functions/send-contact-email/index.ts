// supabase/functions/send-contact-email/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "@supabase/supabase-js";

// 1) CORS: autoriser uniquement ton domaine + localhost (dev)
const ALLOWED_ORIGINS = [
  "https://www.p-malekghabi.com",
  "http://localhost:5173",
];

function buildCorsHeaders(origin: string) {
  const allowOrigin = ALLOWED_ORIGINS.includes(origin)
    ? origin
    : "https://www.p-malekghabi.com";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
  };
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  // option anti-spam (champ caché côté front, doit rester vide)
  website?: string;
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin") ?? "";
  const corsHeaders = buildCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, email, message, website = "" } = (await req.json()) as ContactFormData;

    // 2) Anti-spam basique (honeypot)
    if (website.trim() !== "") {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 3) Validation minimaliste
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Tous les champs sont requis" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Email invalide" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (message.length > 5000) {
      return new Response(JSON.stringify({ error: "Message trop long" }), {
        status: 413,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 4) Enregistrement DB
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Configuration Supabase manquante");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from("contact_messages")
      .insert([{ name, email, message }])
      .select();

    if (error) throw new Error(`Erreur base de données: ${error.message}`);

    // 5) (Optionnel) Email de notification via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY"); // facultatif
    const TO_EMAIL = Deno.env.get("CONTACT_TO_EMAIL") || "malekghabi.education.@gmail.com";
    const FROM_EMAIL =
      Deno.env.get("CONTACT_FROM_EMAIL") || "Portfolio <onboarding@resend.dev>";

    if (RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          subject: "Nouveau message depuis le portfolio",
          html: `
            <h2>Nouveau message</h2>
            <p><b>Nom:</b> ${escapeHtml(name)}</p>
            <p><b>Email:</b> ${escapeHtml(email)}</p>
            <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
            <hr/>
            <small>Enregistré dans contact_messages</small>
          `,
        }),
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message envoyé avec succès", data }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Erreur fonction contact:", err);
    const msg = err instanceof Error ? err.message : "Erreur inconnue";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

// petite utilité pour éviter l'injection HTML dans l'email
function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}