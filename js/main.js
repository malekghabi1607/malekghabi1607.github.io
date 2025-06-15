// Liste des composants à charger dynamiquement
const components = [
  { id: "header-container", path: "components/header.html" },
  { id: "menu-container", path: "components/menu.html" },
  { id: "home-container", path: "components/home.html" },
  { id: "about-container", path: "components/about.html" },
  { id: "skills-container", path: "components/skills.html" },
  { id: "projects-container", path: "components/projects.html" },
  { id: "contact-container", path: "components/contact.html" },
  { id: "footer-container", path: "components/footer.html" }
];

// On charge TOUS les composants en parallèle puis on initialise l'app une fois que tout est prêt
Promise.all(
  components.map(c =>
    fetch(c.path)
      .then(res => res.text())
      .then(html => {
        document.getElementById(c.id).innerHTML = html;
      })
  )
).then(() => {
  // On lance l'initialisation SEULEMENT APRÈS que tous les composants soient chargés
  initApp();

  animateAboutSection();
});

// Fonction utilitaire globale pour accéder aux clés imbriquées type "about.experiences.items.exp1"
function getValueByPath(obj, path) {
  return path.split('.').reduce((o, k) => (o || {})[k], obj);
}

// Fonction principale d'initialisation de l'application
function initApp() {

  // On récupère les boutons langue et thème
  const langBtn = document.getElementById("language-toggle");
  const themeBtn = document.getElementById("darkmode-toggle");
  const body = document.body;

  // On lit la langue et le thème enregistrés dans le localStorage (ou valeurs par défaut)
  const savedLang = localStorage.getItem("language") || "fr";
  const savedTheme = localStorage.getItem("theme") || "dark";

  // On applique le thème et la langue au chargement
  applyTheme(savedTheme);
  loadLanguage(savedLang);

  // Gestionnaire du bouton thème (Dark/Light)
  themeBtn?.addEventListener("click", () => {
    const mode = body.classList.contains("light") ? "dark" : "light";
    applyTheme(mode);
  });

  // Gestionnaire du bouton de langue (Fr/En)
  langBtn?.addEventListener("click", () => {
    const current = localStorage.getItem("language") || "fr";
    const next = current === "fr" ? "en" : "fr";
    loadLanguage(next);
    langBtn.textContent = next === "fr" ? "🇬🇧" : "🇫🇷";
  });

  // Fonction qui applique le thème (Dark/Light) sur le body
  function applyTheme(theme) {
    body.classList.remove("dark", "light");
    body.classList.add(theme);
    themeBtn.textContent = theme === "light" ? "🌙" : "☀️";
    localStorage.setItem("theme", theme);
  }

  // Fonction qui applique la langue à tous les éléments data-i18n
function loadLanguage(lang) {
  fetch(`data/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      console.log("LANGUE JSON CHARGÉ :", lang, data); // <-- ici

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const value = getValueByPath(data, key);

        // LOG CHAQUE CLÉ TESTÉE ET LA VALEUR TROUVÉE
        console.log("Traduction", key, "=>", value, "pour", el);

        // On remplace \n par <br> pour afficher les retours à la ligne dans le HTML
        if (value !== undefined && value !== null) {
          el.innerHTML = value.replace(/\n/g, "<br>");
        }
      });
      localStorage.setItem("language", lang);

      // === Mettre à jour le bouton drapeau ===
      const langBtn = document.getElementById("language-toggle");
      if (langBtn) {
        langBtn.textContent = lang === "fr" ? "🇬🇧" : "🇫🇷";
      }
    });
}
  
  // === FONCTIONS MODALES (À placer en haut ou en bas de ton fichier, mais en DEHORS de toute fonction) ===
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
// Rendez-les globales
window.openModal = openModal;
window.closeModal = closeModal;
  
    // Appelle les animations à la fin du chargement de l'app
  animatePortfolio();
  animateAboutSection();
}




function applyTheme(theme) {
  const themeLink = document.getElementById('theme-style');
  const logo = document.getElementById('gm-logo');
  const themeBtn = document.getElementById("darkmode-toggle"); // <- ajoute cette ligne
  if (theme === "light") {
    themeLink.href = "style-light.css";
    if (logo) logo.src = "assets/images/logo-light.png";
  } else {
    themeLink.href = "style-dark.css";
    if (logo) logo.src = "assets/images/logo-dark.png";
  }
  if (themeBtn) themeBtn.textContent = theme === "light" ? "🌙" : "☀️";
  localStorage.setItem("theme", theme);
}

function animatePortfolio() {
  // Animation du titre principal (ex: .intro h1)
  gsap.from(".intro h1", {
    opacity: 0,
    y: 40,
    duration: 1
  });

  // Animation de la photo de profil
  gsap.from(".profile-img", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    delay: 0.3
  });

  // Animation des boutons Hire Me & Download CV
  gsap.from(".buttons .btn-hire, .buttons .btn-cv", {
    opacity: 0,
    x: -30,
    duration: 0.7,
    stagger: 0.2,
    delay: 0.5
  });

  // Animation des icônes de réseaux sociaux
  gsap.from(".social-icons a", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.8
  });


gsap.from("nav.menu a", {
  opacity: 0,
  x: 30,
  duration: 0.6,
  stagger: 0.1,
  delay: 0.7
});


  
  
  
  

  
}

function animateAboutSection() {
  gsap.from("#about h2", {
    opacity: 0,
    scale: 0.8,
    duration: 0.7,
    ease: "power2.out"
  });
  gsap.from(".about-description p", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out"
  });
  gsap.from(".about-cards .card", {
    opacity: 0,
    scale: 0.85,
    y: 40,
    duration: 0.7,
    stagger: 0.18,
    delay: 0.6,
    ease: "back.out(1.7)"
  });
}

// Fonction d'activation de l'animation About
function triggerAboutAnimation() {
  const about = document.getElementById("about");
  if (!about) return;
  about.classList.remove("active"); // reset
  // Reflow pour forcer le reset
  void about.offsetWidth;
  about.classList.add("active");    // animation démarre !
}

// Déclenche au scroll avec IntersectionObserver
if ('IntersectionObserver' in window) {
  const about = document.getElementById("about");
  if (about) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerAboutAnimation();
        }
      });
    }, { threshold: 0.35 }); // dès que 35% visible
    observer.observe(about);
  }
}

// Déclenche aussi quand tu cliques sur le menu About
document.addEventListener('DOMContentLoaded', function() {
  // Adapter le sélecteur selon ton menu
  const aboutMenu = document.querySelector('a[href="#about"], #menu-about');
  if (aboutMenu) {
    aboutMenu.addEventListener('click', function(e) {
      setTimeout(triggerAboutAnimation, 350); // attend scroll
      document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('img').forEach(img => {
          img.setAttribute('loading', 'lazy');
        });
      });
});
  }
});