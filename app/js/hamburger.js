$(document).ready(function () {
  $(".hamburger").click(function () {
    $('body').toggleClass('no-scroll')
    $(this).toggleClass("is-active");
    $('.menu').toggleClass('open');
  });
});
