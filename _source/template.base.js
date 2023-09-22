const showDialog = (_dialogID) => {
	document.getElementById(_dialogID).classList.add('is-active')
	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
	const body = document.body;
	body.style.position = 'fixed';
	body.style.top = `-${scrollY}`;
};
const closeDialog = (_dialogID) => {
	const body = document.body;
	const scrollY = body.style.top;
	body.style.position = '';
	body.style.top = '';
	window.scrollTo(0, parseInt(scrollY || '0') * -1);
	document.getElementById(_dialogID).classList.remove('is-active');
}

$(document).ready(function () {
	var 
		is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	$(".noUi-handle").on("click", function () {
	  $(this).width(50);
	});
    
    $(window).click(function() {
		//Hide the menus if visible
		$(".navbar-item.has-dropdown").removeClass("is-active");
		$(".navbar__background").removeClass("is-active");
		$(".navbar-item.has-dropdown .navbar-dropdown").removeClass("is-active").css("display", "none");				
	});

    $(".navbar-item.has-dropdown").on("click", function(event){
		event.stopPropagation();

		var 
			nav_background = $(".navbar__background"),
			dropdown = $(this).find(".navbar-dropdown");
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			nav_background.removeClass("is-active");
			dropdown.removeClass("is-active");		
		} else {
			$(this).addClass("is-active");
			nav_background.addClass("is-active");	
			dropdown.addClass("is-active");		
		}
	});

	$(".al_menu-switcher").on("click", function(event) {
		if (is_mobile) {
			//let menu = $(this).parent().find(".al_menu-submenu");
			showDialog($(this).data('target'));
			//menu.addClass("is-active");
			//$('body').addClass('noscroll');
		}
	});

	$(".al_menu-submenu-back").on("click", function(event) {
		//$(this).parent().removeClass("is-active");
		//$('body').removeClass('noscroll');
		closeDialog($(this).data('target'));
	});

	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		slidesPerView: 'auto',
		slideClass: "swiper-slide",
		loopedSlides: 3,
		loop: true,
		spaceBetween: 20,
		navigation: {
		  nextEl: '.swiper__slider-arrow-left',
		  prevEl: '.swiper__slider-arrow-right',
		},
	});	

	var moneyFormat = wNumb({
		decimals: 0,
		thousand: ",",
		prefix: ""
		});

	var rangeSlider = document.getElementById("slider-range");
	var moneyFormat = wNumb({
	  decimals: 0,
	  thousand: ",",
	  prefix: ""
	});
	
	if (rangeSlider) {
		noUiSlider.create(rangeSlider, {
		start: [100000, 1000000],
		step: 1,
		range: {
			min: [100000],
			max: [1000000]
		},
		format: moneyFormat,
		connect: true
		});

		rangeSlider.noUiSlider.on("update", function (values, handle) {
			document.getElementById("slider-range-value1").innerHTML = values[0];
			document.getElementById("slider-range-value2").innerHTML = values[1];
			document.getElementsByName("min-value").value = moneyFormat.from(values[0]);
			document.getElementsByName("max-value").value = moneyFormat.from(values[1]);
		});
	}
    
    $(window).scroll(function() {
		if( !is_mobile ) {
	        var scrollTop = $(window).scrollTop();
    	    $(".site-header__content-wrapper").css("bottom", -scrollTop);
		}
    }); 	
});