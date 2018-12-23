$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


$('.carousel').carousel({
	interval:4000
});

