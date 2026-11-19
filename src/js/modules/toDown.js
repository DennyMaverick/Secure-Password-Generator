// jQuery
import $ from 'jquery';

// Плавная прокрутка на главной странице сайта
$(function () {
  const $up = $('.up');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
      $up.fadeOut();
    } else {
      $up.fadeIn();
    }
  });

  $('.up').on('click', function (event) {
    event.preventDefault();

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $('#footer').offset().top,
        },
        800,
        'swing',
      );
  });
});
