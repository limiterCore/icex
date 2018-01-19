/**
 * Sliders
 */

// Features slider
(function($) {
	var mySwiper = new Swiper ('#features-slider', {
		direction: 'horizontal',
		loop: false,
		// autoplay: true,
		speed: 800,
		slidesPerView: 4,
		spaceBetween: 45,
		pagination: {
			el: '.features__pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			1300: {
				slidesPerView: 3,
			},
			1000: {
				slidesPerView: 2,
			},
			700: {
				slidesPerView: 1,
			},
		},
	})
})(jQuery);

// Text slider
(function($) {
	var mySwiper = new Swiper ('#text-slider', {
		direction: 'horizontal',
		loop: false,
		// autoplay: true,
		speed: 800,
		slidesPerView: 1,
		pagination: {
			el: '.text-slider__slider-pagination',
			type: 'bullets',
			clickable: true,
		},

	})
})(jQuery);

