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



  // Все, что связано с формой

  var form = document.querySelector(".form"),
      link = document.querySelector(".main-nav__link--form"),
      btnCloseForm = form.querySelector(".btn--close-form"),
      btnSend = form.querySelector(".btn[type=submit]");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("form--show");
  });

  listenClick(btnCloseForm, "form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var data = new FormData(form);
    request(data, function() {
      form.classList.remove("form--show");
      if (this.status == 200) {
        alertSuccess.classList.add("alert--show");
        console.log("Success! Message has been sent. Status: " + this.status);
      } else {
        alertFailure.classList.add("alert--show");
        console.log("Failure! Message has not been sent. Status: " + this.status);
      }
    });
  });



  // Все, что связано со всплывающими сообщениями об успешности отправки

  var alertSuccess = document.querySelector(".alert--success"),
      alertFailure = document.querySelector(".alert--failure"),
      btnCloseAlertSuccess = document.querySelector(".btn--success"),
      btnCloseAlertFailure = document.querySelector(".btn--failure");

  listenClick(btnCloseAlertSuccess, "alert");
  listenClick(btnCloseAlertFailure, "alert");



  function request(data, fn) {
    var xhr = new XMLHttpRequest(),
        time = (new Date()).getTime();
    xhr.open("post", "//formspree.io/ridea@bk.ru?" + time, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(data);
    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState < 4) {
        btnSend.classList.add("btn--sending");
        btnSend.innerHTML = "Sending...";
        console.log("Message is sending...");
      } else if (xhr.readyState == 4) {
        btnSend.classList.remove("btn--sending");
        btnSend.innerHTML = "Send";
        fn();
      }
    });
  }

  function listenClick(btn, elemClass) {
    btn.addEventListener("click", function(event) {
      event.preventDefault();
      var removedClass = elemClass + "--show";
      btn.parentElement.classList.remove(removedClass);
    });
  }
})();
