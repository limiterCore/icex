(function($) {
	var $link = $('.js-header-nav-item-trigger');

	$link.click(function() {
		var $t = $(this),
			$parent = $t.closest('.js-header-nav-item-parent'),
			$dropdown = $parent.find('.js-header-nav-item-dropdown');

		$dropdown.toggleClass('header__nav-item-dropdown_open');
		$dropdown.slideToggle(300);
		$t.toggleClass('header__nav-item_open');
	});
})(jQuery);