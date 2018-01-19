(function() {
	var $link = $('.js-smooth-scroll'),
		$window = $('html, body');

	$link.click(function() {
		var $t = $(this),
			target = $t.data('href');

		if ($(target).length > 0) {
			$window.animate({
				scrollTop: $(target).offset().top
			}, 500);
		}
	});
})();