// ハンバーガーメニュー
$(function () {
    $('#js-hamburger').on('click', function () {
      $('.header__item').slideToggle(100)
      $('.header__hamburger').toggleClass('header__hamburger-open')
    });
  });

  // スライダー
$(document).ready(function() {
  function initializeSlick() {
      if ($(window).width() < 768) {
          if (!$('.slider').hasClass('slick-initialized')) {
              $('.slider').slick({
                  // Slickのオプション
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
              });
          }
      } else {
          if ($('.slider').hasClass('slick-initialized')) {
            //   $('.slider').slick('unslick');
          }
      }
  }

  // 初期化
  initializeSlick();

  // ウィンドウリサイズ時の処理
  $(window).on('resize', function() {
      initializeSlick();
  });
});

// アコーディオン
  $('.faq__answer').hide();
  $('.faq__item').click(function() {
      var answer = $(this).find('.faq__answer');
      answer.slideToggle(function() {
          if (answer.is(':visible')) {
              answer.css('width', '90%');
              answer.css('margin', '0 auto');
          }
      });
  });
