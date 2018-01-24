(function($) {
	var $link = $('.js-header-nav-item-trigger');

	$link.click(function() {
		var $t = $(this),
			$dropdown = $t.find('.js-header-nav-item-dropdown');

		$dropdown.toggleClass('header__nav-item-dropdown_open');
		$t.toggleClass('header__nav-item_open');
	});
})(jQuery);