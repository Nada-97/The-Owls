

// $(document).ready(function(){

// //Check to see if the window is top if not then display button

// $(window).scroll(function(){ if ($(this).scrollTop() > 100) { $('.scrollToTop').fadeIn(); }

// else { $('.scrollToTop').fadeOut(); } })




$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
