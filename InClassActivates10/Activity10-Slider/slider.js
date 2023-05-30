$(document).ready(function () {
	$("#slider").bxSlider({
		auto: true,
		randomStart: true,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		slideWidth: 250,
		slideMargin: 10,
		pause: 3000,
		pager: true,
		pagerCustom: '#pager',
		captions: true,
		pagerType: 'short',
	});
});
