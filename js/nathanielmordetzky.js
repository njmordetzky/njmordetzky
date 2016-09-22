$(document).ready(function(){
	$('.skilBox')
		.on('hover', function() {
			$(this).addClass('animate');
		})
		.hover(function() {
			$(this).addClass('animate');
		});


    $('.skilBox').on(
    	'webkitAnimationEnd \
    	mozAnimationEnd \
    	MSAnimationEnd \
    	oanimationend \
    	animationend',
		function (e) {
			$(this).removeClass('animate');
		});
});



// $('.skilBox').hover(
//   function() {
//     $(this).removeClass('animate');
// }, 
//   function() {
//     $(this).addClass('animate'); 
//   }
// );

// $('.skilBox').hover(
//   function() {
//     $(this).addClass('animate'); 
//   }
// );

// $( ".skilBox" ).off( "mouseenter mouseleave" );

// setTimeout(function(){
//   $('.skilBox').hover(function() {
//     $(this).removeClass('animate');
//   }); 
// }, 2000);

// $( "td" ).hover(
//   function() {
//     $( this ).addClass( "hover" );
//   }, function() {
//     $( this ).removeClass( "hover" );
//   }
// );

// setTimeout(function() {
//   $('skilBox').removeClass('animate');
// }, 1000); // The length of your animation