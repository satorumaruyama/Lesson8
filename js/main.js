// ハンバーガーメニュー
$(function () {
    $('#js-hamburger').on('click', function () {
      $('.header__item').slideToggle(100)
      $('.header__hamburger').toggleClass('header__hamburger-open')
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
