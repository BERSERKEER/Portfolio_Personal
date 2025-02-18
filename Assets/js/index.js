document.addEventListener("DOMContentLoaded", function () {
    const codeArea = document.querySelector(".code-area");
    const lineNumbers = document.querySelector(".line-numbers");
  
    function updateLineNumbers() {
      const lines = codeArea.value.split("\n").length; // Contar líneas
      lineNumbers.innerHTML = ""; // Limpiar contenido previo
  
      for (let i = 1; i <= lines; i++) {
        const line = document.createElement("div");
        line.textContent = i;
        lineNumbers.appendChild(line);
      }
    }
  
    // Sincronizar scroll entre números de línea y código
    codeArea.addEventListener("scroll", function () {
      lineNumbers.scrollTop = codeArea.scrollTop;
    });
  
    // Escuchar cambios en el textarea
    codeArea.addEventListener("input", updateLineNumbers);
  
    // Inicializar los números de línea
    updateLineNumbers();
  });
  