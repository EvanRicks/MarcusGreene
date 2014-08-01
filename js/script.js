var main = function() {
	$('#gallery-container div').click(function() {
		var src = $(this).css('background-image');
		$('#frame').css('background-image', src);
		$('#frame').fadeIn();
		$('#overlay').fadeIn();
	});
	$('#overlay').click(function() {
		$(this).fadeOut();
		$('#frame').fadeOut();
	});
	$('#frame').click(function() {
		$(this).fadeOut();
		$('#overlay').fadeOut();
	});
}
$(document).ready(main);