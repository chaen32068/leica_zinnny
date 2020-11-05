var firstSwiper;
var secondSwiper;

$(document).ready(function () {
	//initialize swiper when document ready 
	firstSwiper = new Swiper('.first', {
		// Optional parameters \
		spaceBetween: 0,
		speed: 600,
		autoplay: {
			delay: 3000,
        	disableOnInteraction: false
		},
		on: {
			slideChange: function (swiper) {
				var dots = $('.slick-dots li');
				
				var previousDots = dots[swiper.previousIndex];
				$(previousDots).removeClass('active');
				
				var activeDots = dots[swiper.activeIndex];
				$(activeDots).addClass('active');
			}
		}
	})

	secondSwiper = new Swiper('.second', {
		slidesPerView: 'auto',
		spaceBetween: 40,
		width: '100%',
      	centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 3000
		}
	});
	
});
