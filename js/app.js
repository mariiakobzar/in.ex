;
(function ($) {
  $(document).ready(function () {

    //OPEN/CLOSE BURGER-MENU
    $(".burger").click(function () {
      $(".burger-menu").toggleClass("visually-hidden");
      $(".burger").toggleClass("burger--open");
    });

    //ADD/REMOVE BURGER
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

    //OPEN/CLOSE FILTER
    $(".filter-head").click(function (e) {
      $(this).next().toggleClass("visually-hidden");
      $(this).children(".plus").toggleClass("active");
    });

    //OPEN/CLOSE CARD
    $(".basket-content").click(function (e) {
      $(".cart").toggleClass("visually-hidden");
      $(".cart-btn").toggleClass("active");
      $(".cart-card").toggleClass("active");
    });

    $(".cart-btn").click(function (e) {
      $(".cart-btn").toggleClass("active");
      setTimeout(function () {
        $(".cart-card").toggleClass("active");
      }, 400);
      setTimeout(function () {
        $(".cart").toggleClass("visually-hidden");
      }, 850);
    });

    //OPEN/CLOSE QUICK-VIEW
    $(".item--hover").click(function (e) {
      $(".q-view").removeClass("visually-hidden");

      var srcImg = $(this).siblings("img").attr("src");
      $(".q-view-card__img img").attr("src", srcImg);

      var title = $(this).parent().parent().find(".item-info__name").text();
      $(".q-view-card-info__title").text(title);

      var price = $(this).parent().parent().find(".item-info__price").text();
      $(".q-view-card-info__price").text(price);
     });

    $(".q-view").click(function (e) {
      if (e.target == $("#close-btn")[0] || e.target == $(".q-view")[0]) {
        $(".q-view").addClass("visually-hidden");
      }
    });

    //OPEN ITEM
    $(".item").click(function (e) {
      let td = e.target.closest(".item--hover");
      if (td) {
        $(".q-view").removeClass("visually-hidden");
      } else {
        window.open("./product.html");
      }
    });

    //SLIDER
    var twobombSlider = (function () {
      var drag = false;
      var values = [];

      $(".slider").each(function (i, e) {
        updateView(e);
      });
      $(".slider>.bar>.lp,.slider>.bar>.rp").bind("mousedown", function () {
        drag = $(this);
      })
      $(document).bind("mousemove", function (e) {
        if (!drag)
          return;
        var x = (e.pageX - $(drag).outerWidth() / 2 - $(drag).parent().parent().offset().left) / $(drag).parent().parent().outerWidth();
        if (x < 0) x = 0;
        if (x > 1) x = 1;
        var rp = $(drag).parent().find(".rp");
        var lp = $(drag).parent().find(".lp");
        if ($(drag).hasClass("lp") && x > $(rp).attr("data-pos")) {
          $(rp).attr("data-pos", x);
        }
        if ($(drag).hasClass("rp") && x < $(lp).attr("data-pos")) {
          $(lp).attr("data-pos", x);
        }
        $(drag).attr("data-pos", x);
        updateView($(drag).parent().parent());
      });
      $(document).bind("mouseup", function () {
        drag = false;
      });

      function updateView(slider) {
        var startVal = parseInt($(slider).find(".bar").data("start"));
        var endVal = parseInt($(slider).find(".bar").data("end"));
        if (startVal > endVal)
          endVal = startVal;
        startVal = startVal || 0;
        endVal = endVal || 100;
        var values = [];
        for (var i = startVal; i <= endVal; i++)
          values.push(i);
        var l = $(slider).find(".lp").attr("data-pos");
        var r = $(slider).find(".rp").attr("data-pos");
        var x = $(slider).outerWidth() * l;
        var w = (r - l) * $(slider).outerWidth();
        $(slider).find(".bar").css({
          left: x + "px",
          width: w + "px"
        });
        var index = Math.round(values.length * l);
        if (index >= values.length)
          index = values.length - 1;
        $(slider).find(".lp").html("<span>" + values[index] + "</span>");
        index = Math.round(values.length * r);
        if (index >= values.length)
          index = values.length - 1;
        $(slider).find(".rp").html("<span>" + values[index] + "</span>");
      }
    })();

  })
})(jQuery)