$('.login-js').on('click', function(e){
  e.preventDefault()
  $('.popup').addClass('open');
  $('body').addClass('no-scroll')
});
$('.window-close').on('click', function(){
  $('.popup').removeClass('open');
});
