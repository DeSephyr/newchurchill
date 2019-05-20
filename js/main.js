$(document).ready(function() {
	
	$(function () {
		$("a[data-target^='anchor']").click(function () {
			var _href = $(this).attr("href");
			$("html, body").animate({ scrollTop: $(_href).offset().top -50 + "px"}, 700);
			return false;
		});
	});
	$( '.shop-wrap_device').hover(
		function(){
	   		// $( '.shop-feature-wrap_device').slideToggle().css("display", "flex");
	   		$( '.shop-feature-wrap_device').css("display", "flex");
	   		$('.shop').css("margin-bottom", "0");
	    },
	    function(){
	   		// $( '.shop-feature-wrap_device').slideToggle();
	    	$( '.shop-feature-wrap_device').css("display", "none");
	   		$('.shop').css("margin-bottom", "135px");
	});
	$( '.shop-wrap_liquids').hover(
		function(){
	   		// $( '.shop-feature-wrap_liquids').slideToggle().css("display", "flex");
	    	$( '.shop-feature-wrap_liquids').css("display", "flex");
	   		$('.shop').css("margin-bottom", "0");
	    },
	    function(){
	   		// $( '.shop-feature-wrap_liquids').slideToggle();
	    	$( '.shop-feature-wrap_liquids').css("display", "none");
	   		$('.shop').css("margin-bottom", "135px");
	});
	$('.devices-slider').slick({
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
	  	nextArrow: $('.devices-slider-arrow-next'), 
	  	prevArrow: $('.devices-slider-arrow-prev'),
		responsive: [
		{
		  breakpoint: 480,
		  settings: {
		    centerMode: false,
			variableWidth: false,
			dots: true,
		    slidesToShow: 1
		  }
		}
		]
	});
	$('.comments-slider').slick({
		dots: true,
	  	nextArrow: $('.comments-slider-arrow-next'), 
	  	prevArrow: $('.comments-slider-arrow-prev')
	});
	$('.open-popup-link').magnificPopup({
		type:'inline',
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
	
	// if($('#dont-smoke:radio:checked')) {
	// 	$('#btn_result').click(function () {
	// 		$('.quiz-answer#quiz-dont-smoke').show();
	// 	});
	// }
	// if($('#light:radio:checked')) {
	// 	$('#btn_result').click(function () {
	// 		$('.quiz-answer#quiz-light').show();
	// 	});
	// }
	// if($('#medium:radio:checked')) {
	// 	$('#btn_result').click(function () {
	// 		$('.quiz-answer#quiz-medium').show();
	// 	});
	// }
	$('input[name=quiz-radio]').change(function() {
	const val = $(this).val();
    if($(this).val(val)) {
		$('#btn_result').click(function () {
			$('#quiz-' + val).css('display', 'flex');
		});
	}

	});
	// if($('#hard:checked')) {
	// 	$('#btn_result').click(function () {
	// 		$('#quiz-hard').show();
	// 	});
	// }
	// if($('#dont-know:checked')) {
	// 	$('#btn_result').click(function () {
	// 		$('#quiz-dont-know').show();
	// 	});
	// }
	
	// $('a#close').click(function () {
	// 	$('#mfp-bg').hide();
	// });
});
