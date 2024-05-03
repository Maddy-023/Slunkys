document.addEventListener('DOMContentLoaded', function () {
    var iconoMenu = document.getElementById('icono-menu');
    var opciones = document.getElementById('opciones');
  
    iconoMenu.addEventListener('click', function () {
      opciones.classList.toggle('show');
    });
  
    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
      if (!opciones.contains(event.target) && event.target !== iconoMenu) {
        opciones.classList.remove('show');
      }
    });
  });
  