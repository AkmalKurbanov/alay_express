$('.calculator__calculator-tabs-wrap').on('click', function() {
  $(this).toggleClass('open');
  
});
$('.calculator__calculator-tab').on('click', function() {
  let svg = $(this).find('.icon svg').clone();
  let nameTab = $(this).find('span').text();
  $('.calculator__calculator-tabs-selected').find('.calculator__calculator-tabs-selected-icon').html(svg)
  $('.calculator__calculator-tabs-selected span').text(nameTab);
  console.log(nameTab)
});




$(document).ready(function() { 

	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').hide();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').fadeIn();
			
			g.preventDefault();
		} );
	})(jQuery);

});





$('.calculator-mobile .calculator__calculator-tab').on('click', function(e){
	e.preventDefault()	;
	$(this).next().slideToggle();
	$(this).toggleClass('open');
	$('.calculator__calculator-calculation').not($(this).parents('.calculator-mobile__item').find('.calculator__calculator-calculation')).slideUp();
	$('.calculator__calculator-tab').not(this).removeClass('open');
});