var wow = new WOW({
  mobile: false,
  offset: 200
});

wow.init();

(function() {
  if (!document.querySelector(".portfolio__list")) {
    return;
  }

  // init Isotope
  var iso = new Isotope( ".portfolio__list", {
    itemSelector: ".portfolio__item",
    layoutMode: "fitRows"
  });

  // bind filter button click
  var filtersElem = document.querySelector(".portfolio__button-group");
  eventie.bind( filtersElem, "click", function( event ) {
    if ( !matchesSelector( event.target, "button" ) ) {
      return;
    }
    var filterValue = event.target.getAttribute("data-filter");
    iso.arrange({ filter: filterValue });
  });
})();

(function() {
  if (!document.querySelector(".form")) {
    return;
  }

  var form = document.querySelector(".form"),
      link = document.querySelector(".main-nav__link--form"),
      btnClose = form.querySelector(".btn--close");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("form--show");
  });

  btnClose.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("form--show");
  });
})();
