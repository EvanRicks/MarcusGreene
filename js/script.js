var main = function() {
	var frameUp = false;
	var currentPage = $('#gallery #pg1');
	var currentDot = $('.carousel .dot img:nth-child(1)');
	console.log(currentDot.css('opacity') + 'dot logged!')
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
		currentImg = $(this).parent();
		frameUp = allFadeIn();
	});
	$('.carousel .next').click(function() {
		currentPage = nextPage(currentPage);
		currentDot = nextDot(currentDot);
	});
	$('.carousel .previous').click(function() {
		currentPage = prevPage(currentPage);
		currentDot = prevDot(currentDot);
	});
	$('#frameContainer').click(function() {
		frameUp = allFadeOut();
	});
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
	$('#frameContainerFixed').fadeIn().css('display', 'table'); //table allows for frame to be vert. centered
	$('#frameContainer').fadeIn().css('display', 'table-cell'); //table-cell allows for frame to be vert. centered
	$('#frame').fadeIn();
	$('#overlay, #left, #right, #caption').fadeIn();
	$('footer').fadeOut();
	frameUp = true;
	return frameUp;
}
function allFadeOut() { //fade out frame, overlay, and arrows, fade in footer, and shrink frame
	$('#frame, #frameContainer, #frameContainerFixed').fadeOut();
	$('#overlay, #left, #right, #caption').fadeOut();
	$('footer').fadeIn();
	frameUp = false;
	return frameUp;
}
function thumbToArt(src) {
	var newSrc = 'url(' + src.substring(0,7) + 'art' + src.substring(13,src.length) + ')';
	return newSrc;
}
function nextPage(currentPage) {
	$('.carousel .previous').css('visibility', 'visible'); //shows previous arrow
	var nextPage = currentPage.next(); //finds next page
	currentPage.css('display', 'none'); //hides current page
	currentPage = nextPage; //updates currentPage
	currentPage.css('display', 'block'); //shows new page
	if (currentPage.is(':last-child')) { //hides next arrow if last page
		$('.carousel .next').css('visibility', 'hidden');
	}
	return currentPage; //returns new currentPage
}
function prevPage(currentPage) {
	$('.carousel .next').css('visibility', 'visible'); //shows next arrow
	var prevPage = currentPage.prev(); //finds previous page
	currentPage.css('display', 'none'); //hides current page
	currentPage = prevPage; //updates currentPage
	currentPage.css('display', 'block'); //shows new page
	if (currentPage.is(':first-child')) { //hides previous arrow if first page
		$('.carousel .previous').css('visibility', 'hidden');
	}
	return currentPage; //returns new currentPage
}
function nextDot(currentDot) {
	var nextDot = currentDot.next(); //finds next dot
	currentDot.css('opacity', '0.3'); //deactivates dot
	currentDot = nextDot; //updates currentDot
	currentDot.css('opacity', '1'); //activates new dot
	return currentDot;
}
function prevDot(currentDot) {
	var prevDot = currentDot.prev(); //finds previous dot
	currentDot.css('opacity', '0.3'); //deactivates dot
	currentDot = prevDot; //updates currentDot
	currentDot.css('opacity', '1'); //activates new dot
	return currentDot;
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
	currentImg = prevImg; //updates currentImg
	return currentImg; //returns new currentImg
}