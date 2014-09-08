var main = function() {
	var frameUp = false;
	var currentPage = $('#gallery #pg1');
	var currentDot = $('.carousel .dot img:nth-child(1)');
	var currentImg;
	var keycodeRight = 39;
	var keycodeLeft = 37;
	var keycodeEsc = 27;
	setGalleryPages(currentPage, currentDot);
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
		resultArr = nextImg(currentImg, currentPage, currentDot);
		currentImg = resultArr[0];
		currentPage = resultArr[1];
		currentDot = resultArr[2];
	});
	$('#left').click(function() {
		resultArr = prevImg(currentImg, currentPage, currentDot);
		currentImg = resultArr[0];
		currentPage = resultArr[1];
		currentDot = resultArr[2];
	});
	$(document).keyup(function(event) {
		if(frameUp && event.keyCode == keycodeRight) {
			resultArr = nextImg(currentImg, currentPage, currentDot);
			currentImg = resultArr[0];
			currentPage = resultArr[1];
			currentDot = resultArr[2];
		}
		else if(frameUp && event.keyCode == keycodeLeft) {
			resultArr = prevImg(currentImg, currentPage, currentDot);
			currentImg = resultArr[0];
			currentPage = resultArr[1];
			currentDot = resultArr[2];
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
	console.log(src);
	var newSrc = 'url(' + src.substring(28,34) + 'art' + src.substring(40,src.length) + ')';
	console.log(newSrc);
	return newSrc;
}
function setGalleryPages(currentPage, currentDot) {
	var numPages = currentPage.parent().children().length;
	var pageCounter = 0;
	for (var i = 0; i < numPages; i++) { //checks each page for images
		if (currentPage.has('li').length == 0) { //if page has no images
			var nextPage = currentPage.next();
			var nextDot = currentDot.next();
			currentPage.remove(); //remove current page from DOM
			currentDot.remove(); //remove current dot from DOM
			currentPage = nextPage; //set to next page
			currentDot = nextDot; //set to next dot
		}
		else { //page has images
			if (pageCounter == 1) { //if the second page..
				currentDot.prev().css('visibility', 'visible'); //makes first dot visible
				currentDot.css('visibility', 'visible'); //makes second dot visible
				$('.carousel .next').css('visibility', 'visible'); //shows next arrow
			}
			else if (pageCounter > 1) {
				currentDot.css('visibility', 'visible'); //makes current dot visible
			}
			currentPage = currentPage.next(); //sets to next page
			currentDot = currentDot.next(); //sets to next dot
			pageCounter++; //adds to pageCounter
		}
	};
}
function nextPage(currentPage) {
	if (currentPage.is(':last-child')) { //finds first page if current is last
		var nextPage = $('#gallery .page:first-child');
		$('.carousel .previous').css('visibility', 'hidden'); //hides previous arrow
		$('.carousel .next').css('visibility', 'visible'); //shows next arrow
	}
	else { //finds next page
		var nextPage = currentPage.next();
		$('.carousel .previous').css('visibility', 'visible'); //shows previous arrow
	}
	currentPage.css('display', 'none'); //hides current page
	currentPage = nextPage; //updates currentPage
	currentPage.css('display', 'block'); //shows new page
	if (currentPage.is(':last-child')) { //hides next arrow if last page
		$('.carousel .next').css('visibility', 'hidden');
	}
	return currentPage; //returns new currentPage
}
function prevPage(currentPage) {
	if (currentPage.is(':first-child')) { //finds last page if current is first
		var prevPage = $('#gallery .page:last-child');
		$('.carousel .next').css('visibility', 'hidden'); //hides next arrow
		$('.carousel .previous').css('visibility', 'visible'); //shows previous arrow
	}
	else { //finds previous page
		var prevPage = currentPage.prev();
		$('.carousel .next').css('visibility', 'visible'); //shows next arrow
	}
	currentPage.css('display', 'none'); //hides current page
	currentPage = prevPage; //updates currentPage
	currentPage.css('display', 'block'); //shows new page
	if (currentPage.is(':first-child')) { //hides previous arrow if first page
		$('.carousel .previous').css('visibility', 'hidden');
	}
	return currentPage; //returns new currentPage
}
function nextDot(currentDot) {
	if (currentDot.is(':last-child')) { //finds first dot if current is last
		var nextDot = $('.carousel .dot img:first-child');
	}
	else { //finds next dot
		var nextDot = currentDot.next();
	}
	currentDot.css('opacity', '0.3'); //deactivates dot
	currentDot = nextDot; //updates currentDot
	currentDot.css('opacity', '1'); //activates new dot
	return currentDot;
}
function prevDot(currentDot) {
	if (currentDot.is(':first-child')) { //finds last dot if current is first
		var prevDot = $('.carousel .dot img:last-child');
	}
	else { //finds previous dot
		var prevDot = currentDot.prev();
	}
	currentDot.css('opacity', '0.3'); //deactivates dot
	currentDot = prevDot; //updates currentDot
	currentDot.css('opacity', '1'); //activates new dot
	return currentDot;
}
function nextImg(currentImg, currentPage, currentDot) {
	if (currentImg.is(':last-child')) { //checks if current image is last of the page
		if (currentImg.parent().is(':last-child')) { //checks if image is last of the last page
			var nextImg = $('#gallery li').first(); //sets image to first of all pages
		}
		else { //image is last but not of the last page
			var nextImg = currentImg.parent().next().children('li:first-child'); //sets image to the first of the next page
		}
		currentPage = nextPage(currentPage); //updpates current page
		currentDot = nextDot(currentDot); //updates current dot
	}
	else { //image isn't last of the page
		var nextImg = currentImg.next(); //sets image to next image
	}
	var nextSrc = nextImg.children('img').attr('src'); //gets source of next thumbnail
	nextSrc = thumbToArt(nextSrc); //converts thumbnail to original art
	$('#frame').css('background-image', nextSrc); //sets frame background to new art
	var caption = nextImg.children('img').attr('alt'); //gets caption from thumbnail
	$('#caption').text(caption); //sets caption text
	currentImg = nextImg; //updates currentImg
	var resultArr = [currentImg, currentPage, currentDot]; //stores new image, page, and dot in array
	return resultArr; //returns array of new image, page, and dot
}
function prevImg(currentImg, currentPage, currentDot) {
	if (currentImg.is(':first-child')) { //checks if current iamge is first of the page
		if (currentImg.parent().is(':first-child')) { //checks if image is first of the first page
			var prevImg = $('#gallery li').last(); //sets image to last of all pages
		}
		else { //image is first but of the first page
			var prevImg = currentImg.parent().prev().children('li:last-child'); //sets image to the last of the previous page
		}
		currentPage = prevPage(currentPage); //updates current page
		currentDot = prevDot(currentDot); //updates current dot
	}
	else { //image isn't first of the page
		var prevImg = currentImg.prev(); //sets image to the previous image
	}
	var prevSrc = prevImg.children('img').attr('src'); //gets source of previous thumbnail
	prevSrc = thumbToArt(prevSrc); //converts thumbnail to original art
	$('#frame').css('background-image', prevSrc); //sets frame background to new art
	var caption = prevImg.children('img').attr('alt'); //gets caption from thumbnail
	$('#caption').text(caption); //sets caption text
	currentImg = prevImg; //updates currentImg
	var resultArr = [currentImg, currentPage, currentDot]; //stores new image, page, and dot in array
	return resultArr; //returns array of new image, page, and dot
}