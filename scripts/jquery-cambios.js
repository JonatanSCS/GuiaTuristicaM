$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop()>120){

			//Cambios sólo en el header
			$('.row-header-imagenes').css('display', 'none');
			$('header').css('position', 'fixed');
			$('header').css('width', '100%');
			$('.row-header-nav').css('margin-top', '-13px');
			$('header').css('height', '47px');

			//Cambios sólo en las barras laterales (estados y arte)
			$('.cuerpo-guia').css('margin-top', '59px');
			$('.cuerpo-guia').css('position', 'fixed');
			$('.cuerpo-guia').css('width', '100%');

		}
	});
	
	$(window).scroll(function(){
		if($(document).scrollTop()<120){
			//Cambios sólo en el header
			 $('.row-header-imagenes').css('display', 'block');
			 $('header').css('position', 'relative');
			 //$('.row-header-nav').css('margin-top', '0');
			 $('header').css('height', '165px');
			 //Cambios sólo en las barras laterales (estados y arte)
			 $('.cuerpo-guia').css('margin-top', '0');
			 $('.cuerpo-guia').css('position', 'relative');


		}
	});
});


