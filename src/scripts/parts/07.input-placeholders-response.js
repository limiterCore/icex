/**
 * Fill placeholders of inputs on responsive
 */
(function($) {
	var $input = $('.js-form-input'),
		ww = $(window).width();

	if (ww < 768) {
		$input.each(function() {
			var $t = $(this),
				$parent = $t.closest('.js-form-input-container'),
				$text = $parent.find('.js-input-text'),
				textValue = $text.text(),
				placeholder = textValue + ($text.hasClass('form__input-text_required') ? ' *' : '');

			$t.attr('placeholder', placeholder);
		});
	}

})(jQuery);