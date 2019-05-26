$(document).ready(function () {

	$(function () {
		$("a[data-target^='anchor']").click(function () {
			var _href = $(this).attr("href");
			$("html, body").animate({
				scrollTop: $(_href).offset().top - 50 + "px"
			}, 700);
			return false;
		});
	});
	$('.shop-wrap_device').hover(
		function () {
			// $( '.shop-feature-wrap_device').slideToggle().css("display", "flex");
			$('.shop-feature-wrap_device').css("display", "flex");
			$('.shop').css("margin-bottom", "0");
			
		},
		function () {
			// $( '.shop-feature-wrap_device').slideToggle();
			$('.shop-feature-wrap_device').css("display", "none");
			$('.shop').css("margin-bottom", "105px");
			if(window.matchMedia('(max-width: 768px)').matches){
				$('.shop').css("margin-bottom", "20px");
			}
		});
	$('.shop-wrap_liquids').hover(
		function () {
			// $( '.shop-feature-wrap_liquids').slideToggle().css("display", "flex");
			$('.shop-feature-wrap_liquids').css("display", "flex");
			$('.shop').css("margin-bottom", "0");
		},
		function () {
			// $( '.shop-feature-wrap_liquids').slideToggle();
			$('.shop-feature-wrap_liquids').css("display", "none");
			$('.shop').css("margin-bottom", "105px");
			if(window.matchMedia('(max-width: 768px)').matches){
				$('.shop').css("margin-bottom", "20px");
			}
		});
	$('.devices-slider').slick({
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		nextArrow: $('.devices-slider-arrow-next'),
		prevArrow: $('.devices-slider-arrow-prev'),
		responsive: [{
			breakpoint: 480,
			settings: {
				centerMode: false,
				variableWidth: false,
				dots: true,
				slidesToShow: 1
			}
		}]
	});
	$('.comments-slider').slick({
		dots: true,
		nextArrow: $('.comments-slider-arrow-next'),
		prevArrow: $('.comments-slider-arrow-prev')
	});
	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true
	});
	$('button.open-popup-link').magnificPopup({
		items: {
			src: '#request-popup',
			type: 'inline'
		}
	});
	$('.navbar-basket').click(function () {
		$('#hmt').trigger('click');
	});


	$('#btn_result').click(function () {
		var value = $('input[name=quiz-radio]:checked').val();

		if (!!value) {
			$('#quiz-' + value).css('display', 'flex');
		}


	});
	$('.btn_answer').click(function () {
		$('.quiz-answer').css('display', 'none');
	});


	


	//Логика калькулятора выгоды
	$('#calcStart').click(function () {
		$('#mask').fadeIn(200);
		document.body.style.overflow = 'hidden'; //показываем всплывающее окно
		$('#calc-popup1').css('display', 'flex');


	});
	$('#mask, .btn_sale').click(function () {
		$('#calc-popup1, #calc-popup2, .calc-popupFinal, #mask').fadeOut(200);
		document.body.style.overflow = 'visible'; //скрываем всплывающее окно
	});
	$('#firstStep').click(function () {
		var value = $('input[name=calc-popup-price]:checked').val(); 
		//Записываем выбранный вариант
		if (value) {
			$('#calc-popup1').css('display', 'none');
			$('#calc-popup2').css('display', 'flex');
		}
		$('#secondStep').click(function () {

			var value1 = $('input[name=calc-popup-pack]:checked').val(); //записываем выбранный вариант
			
			if (value == "1" && value1 == "4") {
				$('#result-calc1').css('display', 'flex');
				$('#result-calc2').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "1" && value1 == "5") {
				$('#result-calc2').css('display', 'flex');
				$('#result-calc1').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "1" && value1 == "6") {
				$('#result-calc3').css('display', 'flex');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "2" && value1 == "4") {
				$('#result-calc4').css('display', 'flex');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "2" && value1 == "5") {
				$('#result-calc5').css('display', 'flex');
				$('#result-calc4').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "2" && value1 == "6") {
				$('#result-calc6').css('display', 'flex');
				$('#result-calc5').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "3" && value1 == "4") {
				$('#result-calc7').css('display', 'flex');
				$('#result-calc6').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc8').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "4" && value1 == "5") {
				$('#result-calc8').css('display', 'flex');
				$('#result-calc7').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
				$('#result-calc9').css('display', 'none');
			}
			if (value == "3" && value1 == "6") {
				$('#result-calc9').css('display', 'flex');
				$('#result-calc8').css('display', 'none');
				$('#result-calc7').css('display', 'none');
				$('#result-calc6').css('display', 'none');
				$('#result-calc5').css('display', 'none');
				$('#result-calc4').css('display', 'none');
				$('#result-calc3').css('display', 'none');
				$('#result-calc2').css('display', 'none');
				$('#result-calc1').css('display', 'none');
			}
		})
	})

	

	
});