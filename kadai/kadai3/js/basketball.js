
$(document).ready(function () {
  $(".blooklyn_slide").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    navText: [
      '<span aria-label="Previous"</span>',
      '<span aria-label="Next"</span>'
    ],
    responsive: {
      0: {
        nav: false,
        dots: true
      },
      960: {
        nav: true,
        dots: false
      }
    }
  });
});

/********ボタンが生えてくるアニメーション******/
$(function () {
  $(window).scroll(function () {
    $(".others__contents").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 4) {
        console.log(".othersの条件成立");
        $(".button", this).css("opacity", "1");
        $(".button", this).css("bottom", "10%");
      } else {
        $(".button", this).css("opacity", "0");
      }
    });
    $(".section_textContent:not(:first)").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 10) {
        var temp = imgPos - windowHeight;
        $(this).css("opacity", "1");
        $(this).css("top", "50%");
      }
      else {
        $(this).css("opacity", "0");
      }
    });
  });
});
