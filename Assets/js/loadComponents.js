// Función para cargar un componente HTML en un contenedor
function loadComponent(containerId, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => document.getElementById(containerId).innerHTML = data)
      .catch(error => console.error(`Error loading ${filePath}:`, error));
  }
  
  // Cargar componentes
  document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-container", "header.html");
    loadComponent("sidebar-container", "sidebar.html");
    loadComponent("tabs-container", "tabs.html");
    loadComponent("main-container", "main.html");
  });
  