// var ypos, image, image2, content;

// image = document.getElementById('image1');
// image2 = document.getElementById('image2');
// content = document.getElementById('content');
// content.style.bottom = '0px';

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	if(wScroll < 514){

	$('#image1').css({
		'transform': 'translate(0px, '+ wScroll/25 + '%)'
	});

	$('.content').css({
		'transform': 'translate(0px, '+ wScroll/-20 + '%)'
	});

	$('#image2').css({
		'transform': 'translate(0px, '+ wScroll/-31 + '% )'
	});

}

});









// window.addEventListener('scroll', function(){
	
// 	ypos = window.pageYOffset;

// 	image.style.top = ypos*0.3 + 'px';
// 	if (parseInt(image.style.top) >= 195) image.style.top = 195 + 'px';

// 	image2.style.top = ypos*0.6 - 215 + 'px';

// 	console.log(ypos);


// 	// if( ypos>= 654) {
// 	// 	content.style.top = "0px";
// 	// 	content.style.position = 'fixed';
// 	// }else{
// 	// 	content.style.position = 'relative';
// 	// }

// });