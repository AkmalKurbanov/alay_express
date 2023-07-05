$(document).ready(function () {

	if ($('div').hasClass('calculator__calculator')) {
		
		let calculatorWidth = $('.calculator__calculator').outerWidth();
		let distance1 = $(".calculator__calculator #container").offset().left;
		let distance2 = $(".calculator__calculator form").offset().left;
		let distance3 = distance1 - distance2 + 15;
		$('.calculator__calculator-bottom').css('width', calculatorWidth);
		$('.calculator__calculator-bottom').css('margin-left', - distance3);



		$(window).on('resize', function () {
			let calculatorWidth = $('.calculator__calculator').outerWidth();
			let distance1 = $(".calculator__calculator #container").offset().left;
			let distance2 = $(".calculator__calculator form").offset().left;
			let distance3 = distance1 - distance2 + 15;
			$('.calculator__calculator-bottom').css('width', calculatorWidth);
			$('.calculator__calculator-bottom').css('margin-left', - distance3);

			if (window.matchMedia('(max-width: 991px)').matches) {
				$('.calculator__calculator-bottom').css('margin-left', '0');
			}

		});


		if (window.matchMedia('(max-width: 991px)').matches) {

			$('.calculator__calculator-bottom').css('margin-left', '0');
		}

		$('.calculator__calculator-tab-wrap .calculator__calculator-tab').on('click', function () {
			$(this).parents('.calculator__calculator-tab-wrap').addClass('open-tab');
			$('.calculator__calculator-tab-wrap').not($(this).parents('.calculator__calculator-tab-wrap')).removeClass('open-tab');
		});

	}
});