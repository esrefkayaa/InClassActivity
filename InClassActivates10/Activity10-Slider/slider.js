$(document).ready(function () {
	$("#slider").bxSlider({
		auto: true,
		pager: true,
		randomStart: true,
		captions: true,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		slideWidth: 250,
		slideMargin: 10,
		pause: 3000,
		pagerCustom: '#pager',
		pagerType: 'short'
	});
});
