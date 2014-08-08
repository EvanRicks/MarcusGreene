var main = function() {
	var frameUp = false;
	var currentImg;
	var keycodeRight = 39;
	var keycodeLeft = 37;
	var keycodeEsc = 27;
	$('#gallery img').click(function() {
		var src = $(this).attr('src'); //gets source of thumbnail
		var newSrc = thumbToArt(src); //converts thumbnail to original art
		$('#frame').css('background-image', newSrc); //sets background of frame to art
		var caption = $(this).attr('alt'); //gets caption from thumbnail
		$('#caption').text(caption); //sets caption text
		setCaptionMargin(); //centers the caption
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
	$('#right, #left').mouseover(function() { //highlights arrows on mouseover
		if(frameUp) { //prevents arrows from highlighting during fade out
			$(this).css('opacity', '0.9');
		};
	});
	$('#right, #left').mouseleave(function() { //fades arrows on mouseleave
		if (frameUp) { //prevents arrows from highlighting during fade out
			$(this).css('opacity', '0.3');
		};
	});
}

$(document).ready(main);

function allFadeIn() { //fade in frame, overlay, and arrows, fade out footer, and resize frame
	resizeFrame();
	$('#frame').fadeIn();
	$('#overlay').fadeIn();
	$('#left').fadeIn();
	$('#right').fadeIn();
	$('#caption').fadeIn();
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
	$('#caption').fadeOut();
	$('footer').fadeIn();
	frameUp = false;
	return frameUp;
}
function resizeFrame() {
	$('#frameContainer').css({
		height: $(window).height(),
		width: $(window).width()
	});
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
	var nextSrc = nextImg.children('img').attr('src'); //gets source of next thumbnail
	nextSrc = thumbToArt(nextSrc); //converts thumbnail to original art
	$('#frame').css('background-image', nextSrc); //sets frame background to new art
	var caption = nextImg.children('img').attr('alt'); //gets caption from thumbnail
	$('#caption').text(caption); //sets caption text
	setCaptionMargin(); //centers the new caption
	currentImg = nextImg; //updates currentImg
	return currentImg; //returns new currentImg
}
function prevImg(currentImg) {
	if (currentImg.is(':first-child')) {
		var prevImg = $('#gallery li').last();
	}
	else {
		var prevImg = currentImg.prev();
	}
	var prevSrc = prevImg.children('img').attr('src'); //gets source of previous thumbnail
	prevSrc = thumbToArt(prevSrc); //converts thumbnail to original art
	$('#frame').css('background-image', prevSrc); //sets frame background to new art
	var caption = prevImg.children('img').attr('alt'); //gets caption from thumbnail
	$('#caption').text(caption); //sets caption text
	setCaptionMargin(); //centers the new caption
	currentImg = prevImg; //updates currentImg
	return currentImg; //returns new currentImg
}
function setCaptionMargin() { //centers the caption
	console.log('trying to center caption..');
	var margin = '-' + (($('#caption').width()) / 2) + 'px'; //makes margin a negative value of half the div's width
	$('#caption').css('margin-left', margin); //sets new margin for caption
}