(function() {
	var $burger = $('#burger'),
		$nav = $('#nav'),
		$header = $('#header');

	$burger.click(function() {
		$burger.toggleClass('header__burger_active');
		$nav.slideToggle(300);
		$header.toggleClass('mobile-menu-open');
	});
})();