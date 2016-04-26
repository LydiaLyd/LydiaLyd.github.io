(function() {
  if (!document.querySelector(".map")) {
    return;
  }

  function initMap() {
    // див, в котором будет жить карта
    var mapElem = document.getElementById("map");

    // координаты
    var coords = new google.maps.LatLng(-35.7642221, 150.1074482);

    // ппараметры для карты
    var options = {
      center: coords,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      // scrollwheel: false
    };

    // изображение для маркера
    var image = "img/icon_map-marker.png";

    // создание карты
    var map = new google.maps.Map(mapElem, options);

    // создание маркера и размещение на карте
    var marker = new google.maps.Marker({
      position: coords,
      map: map,
      icon: image
      // animation: google.maps.Animation.BOUNCE
      // animation: google.maps.Animation.DROP,
    });

    // центровка карты при смещении
    // google.maps.event.addListener(map, "center_changed", function() {
    //   window.setTimeout(function() {
    //     map.panTo(marker.getPosition());
    //   }, 1000);
    // });
  }

  // инициализиация карты
  google.maps.event.addDomListener(window, "load", initMap);
})();

$(document).ready(function(){
  $(".slider").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 700
  });
});

/**
 * Конструктор для элемента с меняющимися размерами.
 *
 * Overlay может быть, а может и не быть.
 */

(function() {
  var mapContainer = new resizableMapContainer({
    element: document.querySelector(".map-container"),
    btnClass: null,
    btnNewText: "Close map",
    classExpand: "map-container--expand",
    overlay: null,
    removedOverlayClass: "map-container__overlay--hide"
  });

  function resizableMapContainer(options) {
    var element = options.element,
        btnClass = options.btnClass || ".link-expand",
        btn = element.querySelector(btnClass),
        btnOldText = btn.innerHTML,
        btnNewText = options.btnNewText || "Close",
        classExpand = options.classExpand,
        overlay = options.overlayClass || element.querySelector("[class*=overlay]") || null,
        removedOverlayClass = options.removedOverlayClass || null;

    btn.addEventListener("click", function(event) {
      toggle(element);
      event.preventDefault();
    });

    function toggle() {
      if (!element.classList.contains(classExpand)) {
        element.classList.add(classExpand);
        btn.innerHTML = btnNewText;
        if (overlay) overlay.classList.add(removedOverlayClass);
      } else if (element.classList.contains(classExpand)) {
        element.classList.remove(classExpand);
        btn.innerHTML = btnOldText;
        if (overlay) overlay.classList.remove(removedOverlayClass);
      }
    }
  }
})();

// Полифилл для element.matches()
if (Element && !Element.prototype.matches) {
 var proto = Element.prototype;
 proto.matches = proto.matchesSelector ||
   proto.mozMatchesSelector || proto.msMatchesSelector ||
   proto.oMatchesSelector || proto.webkitMatchesSelector;
}

// Полифилл для element.closest(selector)
if (!Element.prototype.closest) {
  Element.prototype.closest = function(css) {
    var node = this;

    while (node) {
      if (node.matches(css)) return node;
      else node = node.parentElement;
    }
    return null;
  };
}

/**
 * Конструктор для табов.
 */

(function() {
  var tabs = new Tabs({
    container: document.querySelector(".tabs"),
    tabClass: null,
    activeTabClass: null,
    btnClass: null,
    activeBtnClass: null
  });

  function Tabs(options) {
    var container = options.container,
        tabClass = options.tabClass || ".tabs__item",
        activeTabClass = options.activeTabClass || "tabs__item--active",
        btnClass = options.btnClass || ".btn--toggle-tab",
        activeBtnClass = options.activeBtnClass || "btn--active-tab",
        activeTab = container.querySelector("." + activeTabClass) || null;

    container.addEventListener("click", function(event) {
      var target = event.target;
      if (!target.closest(btnClass)) {
        return false;
      }

      var tab = target.closest(tabClass);
      toggle(tab, target);

      event.preventDefault();
    });

    function toggle(tab, btn) {
      if (activeTab && tab !== activeTab) {
        activeTab.classList.remove(activeTabClass);
        activeTab.querySelector(btnClass).classList.remove(activeBtnClass);
      }

      tab.classList.toggle(activeTabClass);
      btn.classList.toggle(activeBtnClass);

      activeTab = tab;
    }
  }
})();
