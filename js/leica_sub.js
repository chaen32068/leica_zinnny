$(document).ready(function () {
	var swiper1 = new Swiper('.swiper-container', {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 30,
		speed: 600,
		loop: true,
		autoplay: {
			delay: 3000
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	})
});
