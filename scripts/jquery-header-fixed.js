$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop()>120){
			$('.row-header-imagenes').css('display', 'none');
			$('header').css('position', 'fixed');
			$('header').css('width', '100%');
			$('.row-header-nav').css('margin-top', '-13px');
			$('header').css('height', '47px');
		}
	});
	
	$(window).scroll(function(){
		if($(document).scrollTop()<120){
			 $('.row-header-imagenes').css('display', 'block');
			 $('header').css('position', 'relative')
			 $('.row-header-nav').css('margin-top', '0')
			 $('header').css('height', '165px');
		}
	});

});


