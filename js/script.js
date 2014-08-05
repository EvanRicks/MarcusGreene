var main = function() {
	var frameUp = false;
	var currentImg;
	var keycodeRight = 39;
	var keycodeLeft = 37;
	var keycodeEsc = 27;
	$('#gallery img').click(function() {
		var src = $(this).attr('src');
		var newSrc = thumbToArt(src);
		$('#frame').css('background-image', newSrc);
		currentImg = $(this).parent();
		frameUp = allFadeIn();
	});
	$('#frameContainer').click(function() {
		frameUp = allFadeOut();
	});
	if(frameUp) { //prevents from resizing the frame when it should be shrunk
		$(window).resize(function() {
			resizeFrame();
		});
	}
	$('#right').click(function() {
		currentImg = nextImg(currentImg);
	});
	$('#left').click(function() {
		currentImg = prevImg(currentImg);
	});
	$(document).keyup(function(event) {
		if(frameUp && event.keyCode == keycodeRight) {
			currentImg = nextImg(currentImg);
		}
		else if(frameUp && event.keyCode == keycodeLeft) {
			currentImg = prevImg(currentImg);
		}
		else if(frameUp && event.keyCode == keycodeEsc) {
			allFadeOut();
		}
	});
}

$(document).ready(main);

function allFadeIn() { //fade in frame, overlay, and arrows, fade out footer, and resize frame
	resizeFrame();
	$('#frame').fadeIn();
	$('#overlay').fadeIn();
	$('#left').fadeIn();
	$('#right').fadeIn();
	$('footer').fadeOut();
	frameUp = true;
	return frameUp;
}
function allFadeOut() { //fade out frame, overlay, and arrows, fade in footer, and shrink frame
	shrinkFrame();
	$('#left').fadeOut();
	$('#right').fadeOut();
	$('#overlay').fadeOut();
	$('#frame').fadeOut();
	$('footer').fadeIn();
	frameUp = false;
	return frameUp;
}
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
function thumbToArt(src) {
	var newSrc = 'url(' + src.substring(0,7) + 'art' + src.substring(13,src.length) + ')';
	return newSrc;
}
function nextImg(currentImg) {
	if (currentImg.is(':last-child')) {
		var nextImg = $('#gallery li').first();
	}
	else {
		var nextImg = currentImg.next();
	}
	var nextSrc = nextImg.children('img').attr('src');
	nextSrc = thumbToArt(nextSrc);
	$('#frame').css('background-image', nextSrc);
	currentImg = nextImg;
	return currentImg;
}
function prevImg(currentImg) {
	if (currentImg.is(':first-child')) {
		var prevImg = $('#gallery li').last();
	}
	else {
		var prevImg = currentImg.prev();
	}
	var prevSrc = prevImg.children('img').attr('src');
	prevSrc = thumbToArt(prevSrc);
	$('#frame').css('background-image', prevSrc);
	currentImg = prevImg;
	return currentImg;
}