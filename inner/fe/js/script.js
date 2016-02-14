(function() {
  if (!document.querySelector(".form")) {
    return;
  }

  var form = document.querySelector(".form"),
      senderName = form.querySelector("[name=sender-name]"),
      senderEmail = form.querySelector("[name=sender-email]"),
      messageSubject = form.querySelector("[name=message-subject]"),
      senderMessage = form.querySelector("[name=sender-message]"),
      savedSenderName = localStorage.getItem("senderName"),
      savedSenderEmail = localStorage.getItem("senderEmail"),
      savedMessageSubject = localStorage.getItem("messageSubject"),
      savedSenderMessage = localStorage.getItem("senderMessage");

  if (savedSenderName && savedSenderEmail && savedMessageSubject && savedSenderMessage) {
    senderName.value = savedSenderName;
    senderEmail.value = savedSenderEmail;
    messageSubject.value = savedMessageSubject;
    senderMessage.value = savedSenderMessage;
  }

  form.addEventListener("submit", function(event) {
    if (senderName.value && senderEmail.value && messageSubject.value && senderMessage.value) {
      localStorage.setItem("senderName", senderName.value);
      localStorage.setItem("senderEmail", senderEmail.value);
      localStorage.setItem("messageSubject", messageSubject.value);
      localStorage.setItem("senderMessage", senderMessage.value);
    }
  });
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

(function() {
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
})();

(function() {
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
})();

(function() {
  $( "#tabs" ).tabs({
    event: "mouseover",
    hide: { effect: "fade", duration: 200 },
    show: { effect: "fade", duration: 200 }
  });
})();

(function() {
  var wow = new WOW({
    offset: 200
  });

  wow.init();
})();
