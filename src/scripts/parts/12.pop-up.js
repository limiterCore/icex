/* POP-UP */
(function($) {


	$('a.popup-link').click(function () {
		$('#exampleModal').arcticmodal({
			overlay: {
				css: {
					backgroundColor: '#000',
					opacity: .3
				}
			}
		});
	});

	$('#close-pop-up').click(function () {
		$.arcticmodal('close');
	});


})(jQuery);