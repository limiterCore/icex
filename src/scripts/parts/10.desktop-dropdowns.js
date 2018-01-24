/**
 * Desktop dropdown open
 */

(function($) {
	var $link = $('.js-header-item-toggle'),
		ww = $(window).width();

	if (ww > 1100) {
		$link.click(function() {
			var $t = $(this),
				$dropdown = $t.closest('.js-header-item-dropdown').find('.js-desktop-dropdown');

			$dropdown.toggle();

			if ($dropdown.is(':visible')) {
				// Hide on click on page
				$('body').on('click.drop', function(e) {
					var $target = $(e.target);

					// If click is not inside search form
					if (!$target.hasClass('.js-desktop-dropdown') && $target.closest('.js-desktop-dropdown').length < 1) {
						$dropdown.hide();
						$('body').off('click.drop');
					}
				});
			}
			else {
				$('body').off('click.drop');
			}

			return false;
		});
	}
})(jQuery);