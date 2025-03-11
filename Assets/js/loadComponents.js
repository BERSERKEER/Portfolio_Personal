// Función para cargar un componente HTML en un contenedor
function loadComponent(containerId, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => document.getElementById(containerId).innerHTML = data)
      .catch(error => console.error(`Error loading ${filePath}:`, error));
  }
  
  // Cargar componentes
  document.addEventListener("DOMContentLoaded", function () {
    loadComponent("footer-container", "../Views/component/footer.html");
    loadComponent("header-container", "../Views/component/header.html");
  });
  