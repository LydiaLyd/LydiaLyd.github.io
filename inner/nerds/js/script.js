var linkOpenLetter = document.querySelector(".open-letter");
var popupLetter = document.querySelector(".modal-content");
var closeLetterCross = popupLetter.querySelector(".modal-content-close");
var closeLetterButton = popupLetter.querySelector(".close-letter");
var formLetter = popupLetter.querySelector(".form-letter");
var senderName = popupLetter.querySelector("[name=sender-name]");
var senderEmail = popupLetter.querySelector("[name=sender-email]");
var letterText = popupLetter.querySelector("[name=letter-text]");
var storageSenderName = localStorage.getItem("senderName");
var storageSenderEmail = localStorage.getItem("senderEmail");

linkOpenLetter.addEventListener("click", function (event) {
  event.preventDefault();
  popupLetter.classList.add("modal-content-show");
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
  popupLetter.classList.remove("modal-content-show");
});

closeLetterButton.addEventListener("click", function (event) {
  event.preventDefault();
  popupLetter.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (popupLetter.classList.contains("modal-content-show")) {
      popupLetter.classList.remove("modal-content-show");
    }
  }
});

formLetter.addEventListener("submit", function (event) {
  localStorage.setItem("senderName", senderName.value);
  localStorage.setItem("senderEmail", senderEmail.value);
});