// src/utils/emailService.ts
import emailjs from '@emailjs/browser';

export type ContactForm = { name: string; email: string; message: string };

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendContactEmail(
  data: ContactForm
): Promise<{ success: boolean; error?: string }> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('EmailJS non configuré:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
    return { success: false, error: 'Configuration EmailJS manquante' };
  }

  try {
    // Les noms des variables doivent correspondre à celles définies dans ton template EmailJS
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
        to_name: 'Malek',
      },
      { publicKey: PUBLIC_KEY }
    );

    return { success: true };
  } catch (err) {
    console.error('Erreur EmailJS:', err);
    return { success: false, error: 'Échec de l’envoi du message' };
  }
}