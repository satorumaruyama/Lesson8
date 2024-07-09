// ハンバーガーメニュー
$(function () {
    $('#js-hamburger').on('click', function () {
      $('.header__item').slideToggle(100)
      $('.header__hamburger').toggleClass('header__hamburger-open')
    });
  });