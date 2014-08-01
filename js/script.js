var main = function() {
	var frameUp = false;
	$('#gallery img').click(function() {
		var src = $(this).attr('src');
		var newSrc = 'url(' + src.substring(0,7) + 'art' + src.substring(13,src.length) + ')';/*changes directory of image from thumbs to art*/
		console.log(newSrc);
		$('#frame').css('background-image', newSrc);
		resizeFrame();
		$('#frame').fadeIn();
		$('#overlay').fadeIn();
		frameUp = true;
	});
	$('#frame').click(function() {
		shrinkFrame();
		$(this).fadeOut();
		$('#overlay').fadeOut();
		frameUp = false;
	});
	$('#overlay').click(function() {
		shrinkFrame();
		$(this).fadeOut();
		$('#frame').fadeOut();
		frameUp = false;
	});
	function resizeFrame() {
		$('#frameContainer').css({
			height: $(window).height(),
			width: $(window).width()
		});
		console.log('width: ' + $(window).width());
	}
	function shrinkFrame() {
		$('#frameContainer').css({
			height: 0,
			width: 0
		});
	}
	if(frameUp) { //prevents from resizing the frame when it should be shrunk
		$(window).resize(function() {resizeFrame();});
	}
}

$(document).ready(main);