
$(document).ready(function(){

	$('body, html').animate({
			scrollTop: '1px'
		}, 300);
	
	
	$(window).scroll(function(){
		if($(document).scrollTop()>120){
			//Cambios sólo en el header
			$('.row-header-imagenes').css('display', 'none');
			$('header').css('position', 'fixed');
			$('header').css('width', '100%');
			$('.row-header-nav').css('margin-top', '-13px');
			$('header').css('height', '47px');

			//Cambio esólo en margen de cuerpo-guia
			$('.cuerpo-guia').css('margin-top', '165px');

		}
		
		var altura = $(document).scrollTop();
		if($(document).scrollTop()<120){
			$('.estados-lista').css('top', '0');
			$('.arte-lista').css('top', '0');
			$('.estados-small').css('top', '0');
			$('.arte-small').css('top', '0');
		}


	});
	
	$(window).scroll(function(){
		if($(document).scrollTop()<120){
			//Cambios sólo en el header
			 $('.row-header-imagenes').css('display', 'block');
			 $('header').css('position', 'relative');
			 $('.row-header-nav').css('margin-top', '0');
			 $('header').css('height', '165px');
			 //Cambio esólo en margen de cuerpo-guia
			 $('.cuerpo-guia').css('margin-top', '0')

			
		}

		var altura = $(document).scrollTop();
		if($(document).scrollTop()>120){
			$('.estados-lista').css('top', altura - 107);
			$('.arte-lista').css('top', altura -107);
			$('.estados-small').css('top', altura - 117);
			$('.arte-small').css('top', altura - 117);

		}


	});

});



