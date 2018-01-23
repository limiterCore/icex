/**
 * Fill placeholders of inputs on responsive
 */
(function($) {
	var $parent = $('.js-form-input-container'),
		$text = $parent.find('.js-input-text'),
		textValue = $text.text(),
		$input = $parent.find('.js-form-input'),
		ww = $(window).width();

	if (ww < 768) {
		$input.attr('placeholder', textValue);
	}

})(jQuery);