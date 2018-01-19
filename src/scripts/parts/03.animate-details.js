(function($) {
	var ww = $(window).width();

	if (ww > 1300) {
		$(window).scroll(function() {
			$('.js-detail:in-viewport').addClass('loaded');
		});
		$(window).scroll();
	}
})(jQuery);

