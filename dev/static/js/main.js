$(document).ready(function () {
    svg4everybody({});

    var sandwich = function () {
	$(document).on('click', '.catalog-nav__header', function () {
		var sandwich = $(this).find('.sandwich');
		catalog = $(this).parent();
		sandwich.toggleClass('sandwich--active');
		catalog.toggleClass('catalog-nav--active');
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

	var productPrevSlider = function() {
		var sliderCount = $('.product-slider__count'),
		prodSlider = $('.js-product-slider');

		prodSlider.on('init afterChange', function(event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			sliderCount.text('Страница ' + i + ' из ' + slick.slideCount);
		});

		prodSlider.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '.slider-nav--prev',
			nextArrow: '.slider-nav--next',
			infinite: false,
		})
	};

	var catalogNavHover = function () {
		$('.catalog-nav__item').hover(
			function () {
				var catalogBody = $(this).closest('.catalog-nav__body')
				catalogBody.css('width', 825)
			},
			function() {
				var catalogBody = $(this).closest('.catalog-nav__body')
				catalogBody.css('width', 'auto')
			}
		)
	};

	var locationChoose = function () {
		$(document).on('click','.location-question__btn', function () {
			var answer = $(this).data('location');
			$(this).closest('.location-question').hide();
			if(answer === 'no') {
				$(this).closest('.location__body').addClass('is-location-choose');
			}
		})
		$(document).on('click','.location-choose__item', function () {
			$(this).closest('.location__body').removeClass('is-location-choose');
		})
		$(document).on('click','.location__header', function () {
			$(this).siblings('.location__body').addClass('is-location-choose');
		})
	};

	sandwich();
	popularCategoriesSlider();
	productPrevSlider();
	catalogNavHover();
	locationChoose();
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