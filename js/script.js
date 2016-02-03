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
      name = form.querySelector("[name=name]"),
      email = form.querySelector("[name=email]"),
      subject = form.querySelector("[name=subject]"),
      message = form.querySelector("[name=message]"),
      btnCloseForm = form.querySelector(".btn--close-form"),
      btnSend = form.querySelector("[type=submit]"),
      savedName = localStorage.getItem("name"),
      savedEmail = localStorage.getItem("email"),
      savedSubject = localStorage.getItem("subject"),
      savedMessage = localStorage.getItem("message");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("form--show");
    form.classList.remove("form--error");
    if (savedName && savedEmail && savedSubject && savedMessage) {
      putSavedData();
      message.focus();
    } else {
      name.focus();
    }
  });

  listenClick(btnCloseForm, "form", function() {
    form.classList.remove("form--error");
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!(name.value && email.value && subject.value && message.value)) {
      shakeForm();
    } else {
      saveData();
      var data = new FormData(form);
      request(data);
    }
  });



  // Все, что связано со всплывающими сообщениями об успешности отправки

  var alertSuccess = document.querySelector(".alert--success"),
      alertFailure = document.querySelector(".alert--failure"),
      btnCloseAlertSuccess = document.querySelector(".btn--success"),
      btnCloseAlertFailure = document.querySelector(".btn--failure");

  listenClick(btnCloseAlertSuccess, "alert");
  listenClick(btnCloseAlertFailure, "alert");





  function request(data) {
    var xhr = new XMLHttpRequest(),
        time = (new Date()).getTime();
    xhr.open("post", "http://formspree.io/ridea@bk.ru?" + time, true);
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
        form.classList.remove("form--show");
        if (xhr.status == 200) {
          alertSuccess.classList.add("alert--show");
          console.log("Success! Message has been sent. Status: " + xhr.status + ", " + xhr.statusText);
        } else {
          alertFailure.classList.add("alert--show");
          console.log("Failure! Message has not been sent. Status: " + xhr.status + ", " + xhr.statusText);
        }
      }
    });
  }

  function listenClick(btn, elemClass, fn) {
    btn.addEventListener("click", function(event) {
      event.preventDefault();
      var removedClass = elemClass + "--show";
      btn.parentElement.classList.remove(removedClass);
      // Если функция передана - выполнить
      if (fn !== undefined) {
        fn();
      }
    });
  }

  function shakeForm() {
    form.classList.remove("form--error");
    // TODO: разобраться, почему анимация shake срабатывает только в 1-й раз
    // setTimeout() не помогла
    form.classList.add("form--error");
  }

  function saveData() {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("subject", subject.value);
    localStorage.setItem("message", message.value);
  }

  function putSavedData() {
    name.value = savedName;
    email.value = savedEmail;
    subject.value = savedSubject;
    message.value = savedMessage;
  }
})();
