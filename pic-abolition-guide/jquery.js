$(document).ready(function () {
  $(window).scroll(function () {
    $(".trans-expl-img").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
  $(".main-title.hidden").fadeIn(1000).removeClass("hidden");
  $(".main-graphic.hidden").fadeIn(4000).removeClass("hidden");
  $(".main-quote.hidden").fadeIn(6000).removeClass("hidden");

  $(".frame-4.hidden").fadeIn(1000).removeClass("hidden");
  $(".frame-5.hidden").fadeIn(1000).removeClass("hidden");
  $(".frame-6.hidden").fadeIn(1000).removeClass("hidden");
  
});
