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
