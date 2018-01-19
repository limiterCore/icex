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
		},
		// breakpoints: {
		// 	700: {
		// 		autoHeight: true
		// 	},
		// },
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
		},
		// breakpoints: {
		// 	700: {
		// 		autoHeight: true
		// 	},
		// },
	})
})(jQuery);

