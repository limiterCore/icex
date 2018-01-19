(function() {
	var $burger = $('#burger'),
		$nav = $('#nav');

	$burger.click(function() {
		$burger.toggleClass('header__burger_active');
		$nav.slideToggle(300);
	});
})();