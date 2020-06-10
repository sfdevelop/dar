		//боковое  меню
		$(document).ready(function () {
			$("#navToggle").click(function () {
				$(this).toggleClass("active");
				$(".overlay").toggleClass("open");
				// this line ▼ prevents content scroll-behind
				$("body").toggleClass("locked");
			});
		});


		$(document).ready(function () {
			//lazyload Ленивая загрузка делаем так чтобы повысить скорость загрузки сайта для гугл speed		
		[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
				img.setAttribute('src', img.getAttribute('data-src'));
				img.onload = function () {
					img.removeAttribute('data-src');
				};
			});
		});

		//слайд шоу на главной
		$(document).ready(function () {

			$('.slider').slick({
				//			infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: false,
				autoplay: true,
				autoplaySpeed: 5000,
				arrow: true,
				prevArrow: '<div class="prev"></div>',
				nextArrow: '<div class="next"></div>',
				responsive: [
					{
						breakpoint: 992,
						settings: {
							centerPadding: '40px',
							slidesToShow: 2
						}
    },
					{
						breakpoint: 768,
						settings: {
							//						arrows: false,
							centerPadding: '10px',
							slidesToShow: 1
						}
    }
  ]

			});
		});
