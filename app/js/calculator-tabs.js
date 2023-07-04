// $('.calculator__calculator-tabs-wrap').on('click', function() {
//   $(this).toggleClass('open');

// });
// $('.calculator__calculator-tab').on('click', function() {
//   let svg = $(this).find('.icon svg').clone();
//   let nameTab = $(this).find('span').text();
//   $('.calculator__calculator-tabs-selected').find('.calculator__calculator-tabs-selected-icon').html(svg)
//   $('.calculator__calculator-tabs-selected span').text(nameTab);
//   console.log(nameTab)
// });




// $(document).ready(function() { 

// 	(function ($) { 
// 		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

// 		$('.tab ul.tabs li a').click(function (g) { 
// 			var tab = $(this).closest('.tab'), 
// 				index = $(this).closest('li').index();

// 			tab.find('ul.tabs > li').removeClass('current');
// 			$(this).closest('li').addClass('current');

// 			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').hide();
// 			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').fadeIn();

// 			g.preventDefault();
// 		} );
// 	})(jQuery);

// });



let calculatorWidth = $('.calculator__calculator').outerWidth();
let distance1 = $("#container").offset().left;
let distance2 = $(".calculator__calculator form").offset().left;
let distance3 = distance1 - distance2 + 15;
$('.calculator__calculator-bottom').css('width', calculatorWidth);
$('.calculator__calculator-bottom').css('margin-left', - distance3);



$(window).on('resize', function () {
	let calculatorWidth = $('.calculator__calculator').outerWidth();
	let distance1 = $("#container").offset().left;
	let distance2 = $(".calculator__calculator form").offset().left;
	let distance3 = distance1 - distance2 + 15;
	$('.calculator__calculator-bottom').css('width', calculatorWidth);
	$('.calculator__calculator-bottom').css('margin-left', - distance3);
	
	if (window.matchMedia('(max-width: 991px)').matches) {
		let calculatorWidth = $("#container").outerWidth();
		$('.calculator__calculator-bottom').css('margin-left', '0');		
	}

});


if (window.matchMedia('(max-width: 991px)').matches) {
	let calculatorWidth = $("#container").outerWidth();
	$('.calculator__calculator-bottom').css('margin-left', '0');
}

$('.calculator__calculator-tab-wrap .calculator__calculator-tab').on('click', function () {
	$(this).parents('.calculator__calculator-tab-wrap').addClass('open');
	$('.calculator__calculator-tab-wrap').not($(this).parents('.calculator__calculator-tab-wrap')).removeClass('open');
});


