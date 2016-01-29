new WOW().init();

(function() {
  if (!document.querySelector(".form")) {
    return;
  }

  // TODO: разобраться, почему ничего не работает.

  var form = document.querySelector(".form"),
      name = form.querySelector("[name=name]"),
      email = form.querySelector("[name=email]"),
      subj = form.querySelector("[name=subject]"),
      content = form.querySelector("[name=message]"),

      nameStorage = localStorage.getItem("nameStorage"),
      emailStorage = localStorage.getItem("emailStorage"),
      subjectStorage = localStorage.getItem("subjStorage"),
      messageStorage = localStorage.getItem("contentStorage");

  form.addEventListener("sumbit", function(event) {
    localStorage.setItem("nameStorage", name.value);
    localStorage.setItem("emailStorage", email.value);
    localStorage.setItem("subjStorage", subj.value);
    localStorage.setItem("contentStorage", content.textContent);
  });

  if (nameStorage) {
    name.value = nameStorage;
    email.value = emailStorage;
    subj.value = subjectStorage;
    content.textContent = messageStorage;
  }
})();

(function() {
  if (!document.querySelector(".map")) {
    return;
  }

  function initialize() {
    var coordinates = new google.maps.LatLng(51.5227,0.03165);
    var options = {
      center: coordinates,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true,
      scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById("map"), options);

    var image = "img/icon_map-marker.png";
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: image,
      animation: google.maps.Animation.BOUNCE
    });

    google.maps.event.addListener(map, "center_changed", function() {
      window.setTimeout(function() {
        map.panTo(marker.getPosition());
      }, 3000);
    });
  }

  google.maps.event.addDomListener(window, "load", initialize);
})();

(function() {
  var percent = document.querySelectorAll(".skills__percent"),
      canvases = document.querySelectorAll(".skills__canvas");

  for (var i = 0; i < percent.length; i++) {
    var percent_i = percent[i],
        canvas = canvases[i];
    percent_i = parseInt(percent_i.innerHTML)/100;
    ctx = canvas.getContext("2d");

    ctx.strokeStyle = "#eee";
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2*0.9, 0, 2*Math.PI);
    ctx.lineWidth = 11;
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#0cf";
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2*0.9, 0, 2*Math.PI*percent_i);
    ctx.lineWidth = 11;
    ctx.stroke();
  }
})();

$(document).ready(function(){
  $('.social-slider').slick({
    dots: true,
    arrows: false,
    // TODO: разобраться, почему не работает
    cssEase: "ease-in-out",
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

$(document).ready(function(){
  $('.testimonials-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000
  });
});

$(document).ready(function(){
  $('.quotes-slider').slick({
    dots: true,
    arrows: false,
    cssEase: "ease-in-out",
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000
  });
});

// init Isotope
var $items = $(".recent-works__items").isotope({
  // options
  itemSelector: ".recent-works__item",
  layoutMode: "fitRows"
});

// filter items on button click
$(".recent-works__btn-group").on( "click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  $items.isotope({ filter: filterValue });
});

// change btn--checked class on buttons
$(".recent-works__btn-group").each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( "click", "button", function() {
    $buttonGroup.find(".btn--recent-works-checked").removeClass("btn--recent-works-checked");
    $( this ).addClass("btn--recent-works-checked");
  });
});

$( "#tabs" ).tabs({
  event: "mouseover",
  hide: { effect: "fade", duration: 200 },
  show: { effect: "fade", duration: 200 }
});
