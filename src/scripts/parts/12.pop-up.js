/* POP-UP */
(function($) {

	$('a.popup-link').click(function () {
		$('div.'+'popup-box').fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;
	});

	$('a.popup-box__close').click(function () {
		$('div.'+'popup-box').fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});

	$('button.btn').click(function () {
		$('div.'+'popup-box').fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});


})(jQuery);