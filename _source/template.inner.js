$(document).ready(function () {
	var 
		is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	$(".noUi-handle").on("click", function () {
	  $(this).width(50);
	});

   	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		slidesPerView: "auto",
		slideClass: "cars-available-slide",
		loopedSlides: 3,
		loop: true,
		navigation: {
		  nextEl: '.cars-available__slider-arrow-left',
		  prevEl: '.cars-available__slider-arrow-right',
		},
	});	

	$("#my-accordion").accordionjs();
});