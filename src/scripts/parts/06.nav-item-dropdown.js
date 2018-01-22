/**
 * ICheck - in subscribe block
 */
(function($) {
	var $link = $('.js-header-nav-item-trigger'),
		$dropdown = $link.find('.js-header-nav-item-dropdown');

	$link.click(function() {
		$dropdown.toggleClass('header__nav-item-dropdown_open');
		$link.toggleClass('header__nav-item_open');

		return false;
	});
})(jQuery);