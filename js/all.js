$(document).ready(function() {
  var showSkill = false;

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

        setTimeout(function() {
          if (!showSkill) {
            showSkill = true;
            var pie1 = new Pie({
              el: "#ring-pie1",
              animite: true,
              ring: 0.6
            });
            pie1.init();

            var pie2 = new Pie({
              el: "#ring-pie2",
              animite: true,
              ring: 0.6
            });
            pie2.init();

            var pie3 = new Pie({
              el: "#ring-pie3",
              animite: true,
              ring: 0.6
            });
            pie3.init();
          }
        }, 500);
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

  profolioFun(false);
  $("#des").addClass("on");
  $("#des").on("click", function() {
    profolioFun(false);
    $(this).addClass("on");
    $("#dev").removeClass("on");
  });
  $("#dev").on("click", function() {
    profolioFun(true);
    $(this).addClass("on");
    $("#des").removeClass("on");
  });

  $("#btn_Send").on("click", function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var msg = $("#message").val();
  });
});
