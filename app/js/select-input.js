



$('.select--sizes .select__list-item').on('click', function () {
  var title = $(this).find('h2').data('title');
  var size = $(this).find('span').data('size');
  $(this).parents('.select--sizes').find('.select__selected').text(title + ', ' + size)
  $(this).parents('.select--sizes').find('.label').addClass('active1')
  $('.select--sizes .select__list-item').not(this).removeClass('selected');
  $(this).addClass('selected');

  (function () {
    var cut = $('.select--sizes .select__selected');
    for (var i = 0; i < cut.length; i++) {
      cut[i].innerText = cut[i].innerText.slice(0, 29) + '...';
    }
  })();

  (function () {
    var cut = $('.select--sizes .calculation .select__selected');
    for (var i = 0; i < cut.length; i++) {
      cut[i].innerText = cut[i].innerText.slice(0, 20) + '...';
    }
  })();

});


(function ($) {
  $('.tab_select ul.tabs_select').addClass('active').find('> li:eq(0)').addClass('current');

  $('.tab_select ul.tabs_select li a').click(function (g) {
    var tab = $(this).closest('.tab_select'),
      index = $(this).closest('li').index();

    tab.find('ul.tabs_select > li').removeClass('current');
    $(this).closest('li').addClass('current');

    tab.find('.tab_content_select').find('div.tabs_item_select').not('div.tabs_item_select:eq(' + index + ')').slideUp();
    tab.find('.tab_content_select').find('div.tabs_item_select:eq(' + index + ')').slideDown();

    g.preventDefault();
  });
})(jQuery);









// input

$('input').on('keyup', function () {
  console.log($(this).val());
  if ($(this).val() != '') {
    $(this).parent().addClass('not-empty')
  } else {
    $(this).parent().removeClass('not-empty')
  }
});

$('.select, .input:not(.input--pass)').on('click', function (e) {
  $(this).find('input').on('focus');
  $('.select, .input').not(this).removeClass('open')
  $('.select, .input').not(this).find('.label').removeClass('active')
  $(this).addClass('open')
  $(this).find('.label').first().addClass('active')
});






jQuery(function ($) {
  $(document).mouseup(function (e) { 
    var div = $(".input, .select"); 
    if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
      $('.input, .select').removeClass('open'); 
    }
  });
});


$('.select--typical .select__dropdown-option').on('click', function(e) {    
  
  $(this).parent().parent().find('.select__selected').text($(this).data('option'))
  $(this).parent().parent().find('input').attr('value', $(this).data('option'))
});



$('.input__pass-icon.open').on('click', function(){
  $(this).hide()
  $(this).parent().find('.input__pass-icon.close').show();
  $(this).parent().find('input').attr('type','text')
});

$('.input__pass-icon.close').on('click', function(){
  $(this).hide()
  $(this).parent().find('.input__pass-icon.open').show();
  $(this).parent().find('input').attr('type','password')
});




$('.tabs_select li a').on('click', function () {
  $(this).parents('.select--sizes').addClass('open')
});