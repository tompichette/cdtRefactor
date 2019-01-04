$(document).ready(function() {

	/* ======= Blue header when scrolled ======= */
	let yourNavigation = $(".nav"); blueNav = "nav--blue"; yourHeader = $('.header').height();

	$(window).scroll(function() {
		if ($(this).scrollTop() >= yourHeader) {
			yourNavigation.addClass(blueNav);
		} else {
			yourNavigation.removeClass(blueNav);
		}
	});

	$(function() {
		$.scrollify({
			section : ".section",
		});
	});
});
