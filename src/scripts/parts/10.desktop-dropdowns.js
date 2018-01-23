/**
 * Desktop dropdown open
 */

(function($) {
	var $link = $('.js-header-item-dropdown'),
		$page = $('.js-page'),
		ww = $(window).width();

	if (ww > 1100) {
		$link.click(function() {
			var $t = $(this),
				$dropdown = $t.find('.js-desktop-dropdown');

			console.log("!");

			$dropdown.fadeToggle(300);

			$page.click(function() {
				$dropdown.fadeOut(300);
			});
		});
	}
})(jQuery);