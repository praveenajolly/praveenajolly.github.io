$(document).ready(function() {
	
$("#image1").click(function() {
	$("#modal-container").fadeIn(200);
	$("#modal-header").text('Flashing Lights');
});

$("#image2").click(function() {
	$("#modal-container").fadeIn(200);
	$("#modal-header").text('Color Burst');
});


$("#image3").click(function() {
	$("#modal-container").fadeIn(200);
	$("#modal-header").text('Evil Eye');
});


$("#modal-submit").click(function() {
	$("#modal-container").fadeOut(200);
});

$("#modal-cancel").click(function() {
	$("#modal-container").fadeOut(200);
});

$("#modal-overlay").click(function() {
	$("#modal-container").fadeOut(200);
});

$("#first").click(function() {
$("html, body").animate({scrollTop:$("#first-container").offset().top - 50 }, 400);
});

$("#second").click(function() {
$("html, body").animate({scrollTop:$("#second-container").offset().top - 50 }, 400);
});

$("#third").click(function() {
$("html, body").animate({scrollTop:$("#third-container").offset().top - 50 }, 400);
});

$('.nav_button').hover(function(){
	$(this).css('color', 'rgba(0, 0, 0, 0.8)');
}, function() {
	$(this).css('color', 'white');

});

});