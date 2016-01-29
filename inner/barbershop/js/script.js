var linkLogin = document.querySelector(".login");
var popupLoginForm = document.querySelector(".modal-content");
var closeLoginForm = popupLoginForm.querySelector(".modal-content-close");
var formLogin = popupLoginForm.querySelector("form");
var login = popupLoginForm.querySelector("[name=login]");
var password = popupLoginForm.querySelector("[name=password]");
var storage = localStorage.getItem("login");

var linkMap = document.querySelector(".open-map");
var popupMap = document.querySelector(".modal-content-map");
var closeMap = document.querySelector(".modal-content-map-close");

linkLogin.addEventListener("click", function (event) {
  event.preventDefault();
  popupLoginForm.classList.add("modal-content-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
      login.focus();
  }
});

closeLoginForm.addEventListener("click", function (event) {
  event.preventDefault();
  popupLoginForm.classList.remove("modal-content-show");
});

formLogin.addEventListener("submit", function (event) {
  if (!(login.value && password.value)) {
    event.preventDefault();
    popupLoginForm.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (popupLoginForm.classList.contains("modal-content-show")) {
      popupLoginForm.classList.remove("modal-content-show");
    }
  }
});

linkMap.addEventListener("click", function (event) {
  event.preventDefault();
  popupMap.classList.add("modal-content-map-show");
});

closeMap.addEventListener("click", function (event) {
  event.preventDefault();
  popupMap.classList.remove("modal-content-map-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (popupMap.classList.contains("modal-content-map-show")) {
      popupMap.classList.remove("modal-content-map-show");
    }
  }
});