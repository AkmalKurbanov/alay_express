$('.faq__item').on('click', function(){
  $(this).toggleClass('faq__item_open')
  $('.faq__item').not(this).removeClass('faq__item_open');
});