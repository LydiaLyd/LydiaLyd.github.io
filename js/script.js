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
  if (!document.querySelector(".form") && !("FormData" in window)) {
    return;
  }

  var form = document.querySelector(".form"),
      link = document.querySelector(".main-nav__link--form"),
      btnCloseForm = form.querySelector(".btn--close-form"),
      alertSuccess = document.querySelector(".alert--success"),
      alertFail = document.querySelector(".alert--fail"),
      btnCloseAlertSuccess = document.querySelector(".btn--success"),
      btnCloseAlertFail = document.querySelector(".btn--fail");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("form--show");
  });

  btnCloseForm.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("form--show");
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var data = new FormData(form);
    request(data, function() {
      form.classList.remove("form--show");
      alertSuccess.classList.add("alert--show")
    });
  });

  closeAlert(btnCloseAlertSuccess);
  closeAlert(btnCloseAlertFail);

  function request(data, fn) {
    var xhr = new XMLHttpRequest(),
        time = (new Date()).getTime();
    xhr.open("post", "//formspree.io/ridea@bk.ru" + time);
    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState == 4) {
        fn();
      }
    });
    xhr.send(data);
  }

  function closeAlert(btn) {
    btn.addEventListener("click", function(event) {
      event.preventDefault();
      btn.parentElement.classList.toggle("alert--show");
    });
  }
})();
