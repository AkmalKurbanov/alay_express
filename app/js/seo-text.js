


$('.seo-text__btn .open-text').on('click', function () {
  $(this).hide();
  $('.close-text').show();
});

$('.seo-text__btn .close-text').on('click', function () {
  $(this).hide();
  $('.open-text').show();
});


$('.seo-text__btn').on('click', function(){
  $(this).toggleClass('open');
  $('.seo-text__desc').toggleClass('open')
});