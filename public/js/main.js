/*
 * Initializing Library Functionalities
 */

$(document).ready(function(){
	AOS.init({
		duration:1000
	});
	$('.sidenav').sidenav();
	$('.tooltipped').tooltip();
	$('select').formSelect();
	$(".typed").typed({
		strings: [
			"<em>first tagline...</em>",
			"<em>second tagline...</em>",
			"<em>third tagline...</em>"
		],
		typeSpeed: 50,
		startDelay: 50,
		showCursor: true,
		cursorChar: "|",
		contentType: 'html',
		backDelay: 1000,
		smartBackspace: true,
		loop: true
	});
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&& location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			let target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
					// Callback after animation
					// Must change focus!
					let $target = $(target);
					$target.focus();
					if ($target.is(":focus")) return false;
					else {
						$target.attr('tabindex','-1');
						$target.focus();
					};
				});
			}
		}
	});
});
