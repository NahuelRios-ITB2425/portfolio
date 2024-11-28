/*!
=========================================================
* JohnDoe Landing page
=========================================================
*/
$(document).ready(function() {
  // Llamar a la función para marcar el enlace activo al cargar la página
  highlightActiveLink();

  // Configurar las animaciones para los enlaces
  setupNavAnimations();

  // Actualizar cuando cambie la URL (navegación con botones de navegador)
  $(window).on('popstate', highlightActiveLink);

  // Asegurarse de que el enlace activo se mantenga cuando haga scroll
  $(window).on('scroll', function() {
      keepActiveLink();
  });
});

// Función para manejar las animaciones de los enlaces
function setupNavAnimations() {
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

  navLinks.forEach(link => {
      // Activar animación de pulsación al pasar el cursor por encima
      link.addEventListener('mouseenter', () => {
          // Asegurarse de que el enlace no esté activo antes de aplicar la animación
          if (!link.classList.contains('active')) {
              link.style.animation = 'pulse 1s ease-in-out infinite, colorChange 3s linear infinite';
          }
      });

      link.addEventListener('mouseleave', () => {
          link.style.animation = '';  // Desactivar animación al salir del área
      });
  });
}


// Función para marcar el enlace activo basado en la URL
function highlightActiveLink() {
  const fullPath = window.location.pathname.toLowerCase();
  const currentPage = fullPath.split('/').pop() || 'index.html'; // Página actual (por ejemplo, project1.html)

  // Remover todas las clases 'active' primero (para garantizar que no haya conflictos)
  $(".navbar .nav-link, .navbar .dropdown-item").removeClass('active');
  $(".navbar .nav-item.dropdown .nav-link.dropdown-toggle").removeClass('active');

  // Verificar si estamos en una página de proyecto como project1.html, project2.html, etc.
  if (/^project\d+\.html$/.test(currentPage)) {
      // Si estamos en una página de proyecto, activamos el menú de "Projects"
      $(".navbar .nav-item.dropdown .nav-link.dropdown-toggle").addClass('active');

      // Activamos el enlace correspondiente en el submenú de "Projects"
      $(`.navbar .dropdown-item[href$="${currentPage}"]`).addClass('active');
  } else {
      // Para otras páginas, activamos el enlace correspondiente
      $(`.navbar .nav-link[href$="${currentPage}"]`).addClass('active');
  }
}

// Función para asegurarse de que el enlace activo no desaparezca al hacer scroll
function keepActiveLink() {
  const activeLink = $(".navbar .nav-link.active, .navbar .dropdown-item.active");

  // Si no hay enlace activo, lo restauramos
  if (activeLink.length === 0) {
      highlightActiveLink(); // Si el enlace activo se ha perdido, lo restablecemos
  }

  // Evitar que la clase 'active' se elimine al hacer scroll
  $(".navbar .nav-link, .navbar .dropdown-item").each(function() {
      if ($(this).hasClass('active')) {
          $(this).css('color', '#ff0000'); // Cambiar color del enlace activo para hacerlo visible
      }
  });
}

// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}

