$(document).ready(function () {
	var 
		is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		countBlockTop = $(".left-part").offset().top,
		windowHeight = window.innerHeight,
		windowWidth  = window.innerWidth,
		show = true;

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
			
	$(window).scroll( function (){
		if(show && (countBlockTop - windowHeight < $(window).scrollTop() + windowHeight)){ 
			show = false;
					
			$('.left-part').spincrement({
				from: 1,
				duration: 3000,
				decimalPoint: ","
			});
		}
		document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
	})

});