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