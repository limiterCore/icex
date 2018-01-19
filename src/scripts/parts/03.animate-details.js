(function($) {
	$(window).scroll(function() {
		$('.js-detail:in-viewport').addClass('loaded');
	});
	$(window).scroll();
})(jQuery);

