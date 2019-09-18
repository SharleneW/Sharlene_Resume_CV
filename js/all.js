$(document).ready(function() {
  $("#sidebar").on("click", function() {
    $(".navbar_nav").slideToggle();
  });

  $(".scrollTop").on("click", function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var targetPos = $(target).offset().top;
    var windowWidth = $(window).width();
    var currentWidth = windowWidth < 768 ? targetPos - 76 : targetPos - 150;
    $("html, body").animate({ scrollTop: currentWidth }, 1000);
  });

  $(window).on("scroll", function() {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();
    var windowWidth = $(this).width();
    if (windowWidth >= 768 - 15) {
      $(".navbar_nav").slideDown();
    } else {
      $(".navbar_nav").slideUp();
    }

    $(".scrollTop").each(function() {
      var target = $(this).attr("href");
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();
      // console.log("target", target);
      // console.log("targetPos", targetPos);
      // console.log("scrollTop", scrollTop);
      if (
        targetPos - 150 <= scrollTop &&
        targetPos + targetHeight > scrollTop
      ) {
        $(".scrollTop").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    $(".animated").each(function() {
      var thisPos = $(this).offset().top;
      if (scrollTop + windowHeight >= thisPos) {
        $(this).addClass("fadeIn");
      }
      // console.log("thisPos", thisPos);
    });
  });

  $(window).resize(function() {
    var windowWidth = $(this).width();
    // console.log("windowWidth", windowWidth);
    if (windowWidth >= 768 - 15) {
      $(".navbar_nav").slideDown();
    } else {
      $(".navbar_nav").slideUp();
    }
  });

  profolioFun();

  $("#btn_Send").on("click", function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var msg = $("#message").val();
  });
});
