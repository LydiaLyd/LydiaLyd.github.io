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
      alertFailure = document.querySelector(".alert--failure"),
      btnCloseAlertSuccess = document.querySelector(".btn--success"),
      btnCloseAlertFailure = document.querySelector(".btn--failure"),
      btnSend = form.querySelector("button[type=submit]");

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
      if (request.status == 200) {
        alertSuccess.classList.add("alert--show");
      } else {
        alertFailure.classList.add("alert--show");
      }
    });
  });

  closeAlert(btnCloseAlertSuccess);
  closeAlert(btnCloseAlertFailure);

  function request(data, fn) {
    var xhr = new XMLHttpRequest(),
        time = (new Date()).getTime();
    xhr.open("post", "//formspree.io/ridea@bk.ru" + time, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(data);
    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState < 4) {
        btnSend.classList.add("btn--sending");
        btnSend.innerHTML = "Sending...";
      } else if (xhr.readyState == 4) {
        btnSend.classList.remove("btn--sending");
        fn();
      }
    });
  }

  function closeAlert(btn) {
    btn.addEventListener("click", function(event) {
      event.preventDefault();
      btn.parentElement.classList.toggle("alert--show");
    });
  }
})();
