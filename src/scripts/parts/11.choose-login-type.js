(function($) {
	var $link = $('.js-login-type'),
		$input = $('#login-type');

	$link.click(function() {
		var $t = $(this),
			type = $t.data('type');

		$link.removeClass('guest-login__choose-type-item_active');
		$t.addClass('guest-login__choose-type-item_active');

		$input.val(type);
		return false;
	});
})(jQuery);