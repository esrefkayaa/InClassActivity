$(document).ready(function () {
	// preload images
	$("#image_list a").each(function () {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});

	// set up event handlers for links
	$("#image_list a").click(function (evt) {

		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");

		// when clicked the image fadeuot caption and image 
		$("#caption, #image").fadeOut(1000, function () {
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);

			// after that fadein caption and image.
			$("#caption, #image").fadeIn(1000);
		});

		evt.preventDefault();
	}); // end click

	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready
