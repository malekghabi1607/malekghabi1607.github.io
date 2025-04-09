function loadComponent(id, path) {
  fetch(path)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(`Erreur lors du chargement de ${path} :`, err));
}

// Charge tous les composants HTML
loadComponent("header-container", "components/header.html");
loadComponent("menu-container", "components/menu.html");
loadComponent("home-container", "components/home.html");
loadComponent("about-container", "components/about.html");
loadComponent("skills-container", "components/skills.html");
loadComponent("projects-container", "components/projects.html");
loadComponent("contact-container", "components/contact.html");
loadComponent("footer-container", "components/footer.html");


function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}


document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("darkmode-toggle");
    const langBtn = document.getElementById("language-toggle");
    const body = document.body;

    // THEME : dark/light
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    themeBtn?.addEventListener("click", () => {
        const newTheme = body.classList.contains("light") ? "dark" : "light";
        applyTheme(newTheme);
    });

    function applyTheme(theme) {
        if (theme === "light") {
            body.classList.add("light");
            body.classList.remove("dark");
            themeBtn.textContent = "🌙";
        } else {
            body.classList.add("dark");
            body.classList.remove("light");
            themeBtn.textContent = "☀️";
        }
        localStorage.setItem("theme", theme);
    }

    // LANGUE
    const savedLang = localStorage.getItem("language") || "fr";
    loadLanguage(savedLang);
    langBtn.textContent = savedLang === "fr" ? "🇬🇧" : "🇫🇷";

    langBtn?.addEventListener("click", () => {
        const current = localStorage.getItem("language") || "fr";
        const next = current === "fr" ? "en" : "fr";
        loadLanguage(next);
        langBtn.textContent = next === "fr" ? "🇬🇧" : "🇫🇷";
    });

    function loadLanguage(lang) {
        fetch(`data/${lang}.json`)
            .then(res => res.json())
            .then(data => {
                document.querySelectorAll("[data-i18n]").forEach(el => {
                    const key = el.getAttribute("data-i18n");
                    if (data[key]) el.textContent = data[key];
                });
                localStorage.setItem("language", lang);
            })
            .catch(err => console.error("Erreur de traduction :", err));
    }
});


if (themeBtn) {
  themeBtn.textContent = theme === "light" ? "🌙" : "☀️";
}
