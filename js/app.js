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

    $(".arrivals-item--hover").click(function (e){
      $(".q-view").removeClass("visually-hidden");
    });

  })
})(jQuery)