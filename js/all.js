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

  $("#p_demo1").on("click", function() {
    $("#demo1").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo2").on("click", function() {
    $("#demo2").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo3").on("click", function() {
    $("#demo3").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo4").on("click", function() {
    $("#demo4").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo5").on("click", function() {
    $("#demo5").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo6").on("click", function() {
    $("#demo6").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo7").on("click", function() {
    $("#demo7").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo8").on("click", function() {
    $("#demo8").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo9").on("click", function() {
    $("#demo9").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo10").on("click", function() {
    $("#demo10").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo11").on("click", function() {
    $("#demo11").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo12").on("click", function() {
    $("#demo12").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $("#p_demo13").on("click", function() {
    $("#demo13").css("display", "block");
    $("html").css("overflow-y", "hidden");
  });
  $(".p_btn_close").on("click", function() {
    $("#demo1").css("display", "none");
    $("#demo2").css("display", "none");
    $("#demo3").css("display", "none");
    $("#demo4").css("display", "none");
    $("#demo5").css("display", "none");
    $("#demo6").css("display", "none");
    $("#demo7").css("display", "none");
    $("#demo8").css("display", "none");
    $("#demo9").css("display", "none");
    $("#demo10").css("display", "none");
    $("#demo11").css("display", "none");
    $("#demo12").css("display", "none");
    $("#demo13").css("display", "none");
    $("html").css("overflow", "auto");
  });

  $("#btn_Send").on("click", function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var msg = $("#message").val();
  });
});
