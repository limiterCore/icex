/**
 * Up Arrow
 */

(function() {
	var $arr = $('#up-arrow');

		$(window).scroll(function() {

			if ($(this).scrollTop() > 200 && $(window).width() > 768) {
				$arr.fadeIn();
			} else {
				$arr.fadeOut();
			}
		});
		$arr.click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
		});



})();