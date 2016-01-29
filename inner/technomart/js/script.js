// Bad code...

var openCartMessage = document.querySelectorAll(".btn-buy");
var popupCartMessage = document.querySelector(".popup-cart-message");
var closeCartMessageCross = document.querySelector(".close-cart-message-cross");
var closeCartMessageButton = document.querySelector(".close-cart-message-btn");

var openMap = document.querySelector(".open-map");
var popupMap = document.querySelector(".popup-map");
var closeMap = document.querySelector(".close-map");

var openLetter = document.querySelector(".open-letter");
var popupLetter = document.querySelector(".popup-letter");
var closeLetterCross = document.querySelector(".close-letter-cross");
var closeLetterButton = document.querySelector(".close-letter-btn");
var formLetter = document.querySelector(".form-letter");
var senderName = document.querySelector("[name=sender-name]");
var senderEmail = document.querySelector("[name=sender-email]");
var letterText = document.querySelector("[name=letter-text]");
var storageSenderName = localStorage.getItem("senderName");
var storageSenderEmail = localStorage.getItem("senderEmail");



//openCartMessage.addEventListener("click", function (event) {
//  event.preventDefault();
//  popupCartMessage.classList.add("popup-cart-message-show");
//});

for (var i = 0; i < openCartMessage.length; i++) {
  openCartMessage[i].addEventListener("click", function(event) {
    event.preventDefault();
    popupCartMessage.classList.add("popup-cart-message-show");
  });
}

closeCartMessageCross.addEventListener("click", function (event) {
  event.preventDefault();
  popupCartMessage.classList.remove("popup-cart-message-show");
});

closeCartMessageButton.addEventListener("click", function (event) {
  event.preventDefault();
  popupCartMessage.classList.remove("popup-cart-message-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (popupCartMessage.classList.contains("popup-cart-message-show")) {
      popupCartMessage.classList.remove("popup-cart-message-show");
    }
    if (popupMap.classList.contains("popup-map-show")) {
      popupMap.classList.remove("popup-map-show");
    }
    if (popupLetter.classList.contains("popup-letter-show")) {
      popupLetter.classList.remove("popup-letter-show");
    }
  }
});



openMap.addEventListener("click", function (event) {
  event.preventDefault();
  popupMap.classList.add("popup-map-show");
});

closeMap.addEventListener("click", function (event) {
  event.preventDefault();
  popupMap.classList.remove("popup-map-show");
});



openLetter.addEventListener("click", function (event) {
  event.preventDefault();
  popupLetter.classList.add("popup-letter-show");
  if (storageSenderName) {
    senderName.value = storageSenderName;
    senderEmail.focus();
    if (storageSenderEmail) {
      senderEmail.value = storageSenderEmail;
      letterText.focus();
    }
  } else {
    senderName.focus();
  }
});

closeLetterCross.addEventListener("click", function (event) {
  event.preventDefault();
  popupLetter.classList.remove("popup-letter-show");
});

closeLetterButton.addEventListener("click", function (event) {
  event.preventDefault();
  popupLetter.classList.remove("popup-letter-show");
});

formLetter.addEventListener("submit", function (event) {
  localStorage.setItem("senderName", senderName.value);
  localStorage.setItem("senderEmail", senderEmail.value);
});