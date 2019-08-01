;
(function ($) {
  $(document).ready(function () {

    $(".burger").click(function () {
      $(".burger-menu").toggleClass("visually-hidden");
      $(".burger").toggleClass("burger--open");
    });

    function checkWidth(width) {
      if (width.matches) {
        $(".burger").removeClass("visually-hidden").css("position", "relative");
      } else {
        $(".burger").addClass("visually-hidden").css("position", "fixed");;
      }
    }

    var maxWidth = window.matchMedia("(max-width: 480px)");
    checkWidth(maxWidth);
    maxWidth.addListener(checkWidth);

    $(".q-view").click(function (e) {
      if (e.target == $("#close-btn")[0] || e.target == $(".q-view")[0]) {
        $(".q-view").addClass("visually-hidden");
      }
    });

    $(".item--hover").click(function (e) {
      $(".q-view").removeClass("visually-hidden");
    });

    $(".filter-head").click(function (e) {
      $(this).next().toggleClass("visually-hidden");
      $(this).children(".plus").toggleClass("active");
    });

    // $('.hero-right').slick({
    //   dots: false,
    //   arrows: false,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   cssEase: 'linear'
    // });

    //SCROL

    //SLIDER
    // var twobombSlider = (function () {
    //   var drag = false;
    //   var values = [];

    //   $(".slider").each(function (i, e) {
    //     updateView(e);
    //   });
    //   $(".slider>.bar>.lp,.slider>.bar>.rp").bind("mousedown", function () {
    //     drag = $(this);
    //   })
    //   $(document).bind("mousemove", function (e) {
    //     if (!drag)
    //       return;
    //     var x = (e.pageX - $(drag).outerWidth() / 2 - $(drag).parent().parent().offset().left) / $(drag).parent().parent().outerWidth();
    //     if (x < 0) x = 0;
    //     if (x > 1) x = 1;
    //     var rp = $(drag).parent().find(".rp");
    //     var lp = $(drag).parent().find(".lp");
    //     if ($(drag).hasClass("lp") && x > $(rp).attr("data-pos")) {
    //       $(rp).attr("data-pos", x);
    //     }
    //     if ($(drag).hasClass("rp") && x < $(lp).attr("data-pos")) {
    //       $(lp).attr("data-pos", x);
    //     }
    //     $(drag).attr("data-pos", x);
    //     updateView($(drag).parent().parent());
    //   });
    //   $(document).bind("mouseup", function () {
    //     drag = false;
    //   });

    //   function updateView(slider) {
    //     var startVal = parseInt($(slider).find(".bar").data("start"));
    //     var endVal = parseInt($(slider).find(".bar").data("end"));
    //     if (startVal > endVal)
    //       endVal = startVal;
    //     startVal = startVal || 0;
    //     endVal = endVal || 100;
    //     var values = [];
    //     for (var i = startVal; i <= endVal; i++)
    //       values.push(i);
    //     var l = $(slider).find(".lp").attr("data-pos");
    //     var r = $(slider).find(".rp").attr("data-pos");
    //     var x = $(slider).outerWidth() * l;
    //     var w = (r - l) * $(slider).outerWidth();
    //     $(slider).find(".bar").css({
    //       left: x + "px",
    //       width: w + "px"
    //     });
    //     var index = Math.round(values.length * l);
    //     if (index >= values.length)
    //       index = values.length - 1;
    //     $(slider).find(".lp").html("<span>" + values[index] + "</span>");
    //     index = Math.round(values.length * r);
    //     if (index >= values.length)
    //       index = values.length - 1;
    //     $(slider).find(".rp").html("<span>" + values[index] + "</span>");
    //   }
    // })();

  })
})(jQuery)

var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var links = document.querySelectorAll(".article-box a");
var bigArticle = document.querySelector(".big-article-info");
var bigArticleImage = document.querySelector(".big-article-image");

function scrolling(e) {
  if (isFullyVisible(links[0])) {
    links.forEach(box => {
      box.classList.add("active");
    });
  }
  if (isPartiallyVisible(bigArticle)) {
    bigArticle.classList.add("active");
  }
  if (isPartiallyVisible(bigArticleImage)) {
    bigArticleImage.classList.add("active");
  }
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  return ((top >= 0) && (bottom <= window.innerHeight));
}

// var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('contact-card-map'), {
//     center: {
//       lat: 37.770398,
//       lng: -122.386940
//     },
//     zoom: 17,
//     styles: [{
//         "elementType": "geometry",
//         "stylers": [{
//           "color": "#212121"
//         }]
//       },
//       {
//         "elementType": "labels.icon",
//         "stylers": [{
//           "visibility": "off"
//         }]
//       },
//       {
//         "elementType": "labels.text.fill",
//         "stylers": [{
//           "color": "#757575"
//         }]
//       },
//       {
//         "elementType": "labels.text.stroke",
//         "stylers": [{
//           "color": "#212121"
//         }]
//       },
//       {
//         "featureType": "administrative",
//         "elementType": "geometry",
//         "stylers": [{
//           "color": "#757575"
//         }]
//       },
//       {
//         "featureType": "administrative.country",
//         "elementType": "labels.text.fill",
//         "stylers": [{
//           "color": "#9e9e9e"
//         }]
//       },
//       {
//         "featureType": "administrative.land_parcel",
//         "stylers": [{
//           "visibility": "off"
//         }]
//       },
//       {
//         "featureType": "administrative.locality",
//         "elementType": "labels.text.fill",
//         "stylers": [{
//           "color": "#bdbdbd"
//         }]
//       },
//       {
//         "featureType": "poi",
//         "elementType": "labels.text.fill",
//         "stylers": [{
//           "color": "#757575"
//         }]
//       },
//       {
//         "featureType": "poi.park",
//         "elementType": "geometry",
//         "stylers": [{
//           "color": "#181818"
//         }]
//       },
//       {
//         "featureType": "poi.park",
//         "elementType": "labels.text.fill",
//         "stylers": [{
//           "color": "#616161"
//         }]
//       },
//       {
//         "featureType": "poi.park",
//         "elementType": "labels.text.stroke",
//         "stylers": [{
//           "color": "#1b1b1b"
//         }]
//       },
//       {
//         "featureType": "road",
//         "elementType": "geometry.fill",
//         "stylers": [{
//           "color": "#2c2c2c"
//         }]
//       },
//       {
//         "featureType": "road",
//         "elementType": "labels.text.fill",
//         "stylers": [{
//           "color": "#8a8a8a"
//         }]
//       },
//       {
//         "featureType": "road.arterial",
//         "elementType": "geometry",
//         "stylers": [{
//           "color": "#373737"
//         }]
//       },
//       {
//         "featureType": "road.highway",
//         "elementType": "geometry",
//         "stylers": [{
//           "color": "#3c3c3c"
//         }]
//       },
//       {
//         "featureType": "road.highway.controlled_access",
//         "elementType": "geometry",
//         "stylers": [{
//           "color": "#4e4e4e"
//         }]
//       },
//       {
//         "featureType": "road.local",
//         "elementType": "labels.text.fill",
//         "stylers": [{
//           "color": "#616161"
//         }]
//       },
//       {
//         "featureType": "transit",
//         "elementType": "labels.text.fill",
//         "stylers": [{
//           "color": "#757575"
//         }]
//       },
//       {
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [{
//           "color": "#000000"
//         }]
//       },
//       {
//         "featureType": "water",
//         "elementType": "labels.text.fill",
//         "stylers": [{
//           "color": "#3d3d3d"
//         }]
//       }
//     ]
//   });
// }

// const googleMapsScript = document.createElement('script');
// googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMPMEky8CloGI5erq6iSkD44s5XXNxpvQ&callback=initMap';
// document.head.appendChild(googleMapsScript);