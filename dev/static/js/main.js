$(document).ready(function () {
    svg4everybody({});

    var sandwich = function () {
	$(document).on('click', '.sandwich', function (){
		$(this).toggleClass('sandwich--active');

		});
	};

	var popularCategoriesSlider = function () {
		if($(window).width() < 768) {
			$('.js-categories-prev').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
			})
		}
	};

	popularCategoriesSlider();
	sandwich();
});

var popularCategoriesSlider = function () {
		var sliderElement = $('.js-categories-prev');

		if($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))) {
			sliderElement.slick({
				slidesToShow: 2,
				slidesToScroll: 1,
			})
		} else if ($(window).width() > 768 && (sliderElement.hasClass('slick-initialized'))) {
			sliderElement.slick('unslick')
		}
	};

$(window).on('resize',function() {
	popularCategoriesSlider();
});