// форма поиска гостиницы

if (document.querySelector('.search-form')) {
  //  появление / сокрытие формы поиска гостиницы
  var openSearchForm = document.querySelector(".btn--start-search");
  var popupSearchForm = document.querySelector(".search-form");
  var arrivalDate = popupSearchForm.querySelector("[name=arrival-date]");

  //  кнопки + / - для ввода количества взрослых
  var minusAdult = popupSearchForm.querySelector(".btn--minus-adult");
  var plusAdult = popupSearchForm.querySelector(".btn--plus-adult");
  var adultsAmount = popupSearchForm.querySelector("[name=adults-amount]");

  //  кнопки + / - для ввода количества детей
  var minusKid = document.querySelector(".btn--minus-kid");
  var plusKid = document.querySelector(".btn--plus-kid");
  var kidsAmount = document.querySelector("[name=kids-amount]");

  //  появление / сокрытие формы поиска гостиницы

  openSearchForm.addEventListener("click", function (event) {
    event.preventDefault();
    popupSearchForm.classList.add("search-form--show");
    popupSearchForm.classList.add("search-form--animated");
    arrivalDate.focus();
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
      if (popupSearchForm.classList.contains("search-form--show")) {
        popupSearchForm.classList.remove("search-form--show");
      };
    }
  });

  //  кнопки + / - для ввода количества взрослых

  minusAdult.addEventListener("click", function (event) {
    event.preventDefault();
    if (adultsAmount.value > 0) {
      adultsAmount.value--;
    };
  });

  plusAdult.addEventListener("click", function (event) {
    event.preventDefault();
    adultsAmount.value++;
  });

  //  кнопки + / - для ввода количества детей

  minusKid.addEventListener("click", function (event) {
    event.preventDefault();
    if (kidsAmount.value > 0) {
      kidsAmount.value--;
    }
  });

  plusKid.addEventListener("click", function (event) {
    event.preventDefault();
    kidsAmount.value++;
  });
}





// Изменение ширины инпутов в фильтре стоимости (hotels.html)
// Я не понимаю, почему это работает.
// Еще: если нажать и не отпускать Back Space, поле не ссужается. Нужно исправить

if (document.querySelector('[name=min-price]') && document.querySelector('[name=max-price]')) {
  var minPrice = document.querySelector('[name=min-price]'),
      maxPrice = document.querySelector('[name=max-price]');

  changeWidth(minPrice);
  changeWidth(maxPrice);

  function changeWidth(field) {
    // поле расширяется, когда мы набираем цифры
    field.addEventListener('keypress', function() {
      // 8 is the magic number
      field.style.width = field.value.length * 8 + 'px';
    });

    // поле ссужается, когда мы убираем цифры
    field.addEventListener('keyup', function() {
      // не понимаю, почему нельзя обойтись без условия
      // но с ним все работает правильно
      if (field.value.length > 0)
        field.style.width = field.value.length * 8 + 'px';
    });
  }
};





//  настройки для гугл-карты

if (document.querySelector('.map')) {
  function initialize() {
    var mapOptions = {
      zoom: 9,
      center: new google.maps.LatLng(34.759,-111.736),
      disableDefaultUI: true
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var myLatLng = new google.maps.LatLng(34.87,-111.76);
    var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
}
