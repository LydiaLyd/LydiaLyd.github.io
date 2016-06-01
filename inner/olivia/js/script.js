$(document).ready(function(){
  $(".slider--screenshots").owlCarousel({
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        autoWidth: true,
        margin: 13,
        center: true,
        loop: true,
        dots: false,
      },
      544: {
        items: 2,
        autoWidth: true,
        margin: 13,
        center: true,
        loop: true,
        dots: true,
      },
      768: {
        items: 4,
        autoWidth: true,
        margin: 20,
        center: true,
        loop: true,
      },
      1200: {
        items: 4,
        margin: 30,
      }
    }
  });
  $(".slider--testimonials").owlCarousel({
    items: 1,
    margin: 30,
    smartSpeed: 500
  });
  $(".slider--blog-preview").owlCarousel({
    items: 1,
    smartSpeed: 500,
    responsiveClass: true,
    responsive: {
      768: {
        margin: 30,
      },
      1200: {
        margin: 130,
      },
    }
  });
});

/**
 * Конструктор для navbar'а
 * html: nav.navbar>a.logo+btn.navbar__toggle+ul.nav
 * Полифилы не нужны (вроде).
 */
(function() {
  if (!document.getElementById("navbar")) return;

  var navbar = new Navbar({
    element: document.getElementById("navbar"),
    activeClass: "navbar--active"
  });

  function Navbar(options) {
    var element = options.element,
        btn = element.querySelector(".navbar__toggle"),
        activeClass = options.activeClass || "active";

    element.onclick = function(event) {
      if (event.target === btn) toggle();
    };

    function toggle() {
      element.classList.toggle(activeClass);
    }
  }
})();
