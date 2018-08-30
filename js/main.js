function goFullscreen() {
			// Must be called as a result of user interaction to work
			mf = document.getElementById("auto");
			mf.webkitRequestFullscreen();
			mf.style.display="";
		}

		function fullscreenChanged() {
			if (document.webkitFullscreenElement == null) {
				mf = document.getElementById("auto");
				//mf.style.display="none";
			}
		}

		document.onwebkitfullscreenchange = fullscreenChanged;
		document.documentElement.onclick = goFullscreen;
		document.onkeydown = goFullscreen;


//////////////////////////////////////////

function loading(){
	$(".loading").show();
    
    setTimeout(function(){ 
    	$(".loading").hide();
    }, 1500);
}

$(document).ready(function() {
	$(".miauto").height($(window).height());
	
	$(".miauto").find('.step-2').find('.accesorios').find('.categoria').find('.item').each(function(index, el) {
		var size_accesorios = null;
		
		size_accesorios = (101+34) * $(this).find('div').size();
		$(this).width(size_accesorios);
	});
	
	$(".miauto").find('.temas').on('click', '.item', function(event) {
		event.preventDefault();
		$(".tema").removeClass('t1');
		$(".tema").removeClass('t2');
		$(".tema").removeClass('t3');

		$(".tema").addClass('t'+$(this).attr('tema'));

		$(".temas").removeClass('on');

		$(".temas").find('.item').each(function(index, el) {
			$(this).removeClass('pulse');
		});

		$(".step-1").find('.alerta').hide();

		$(".next-step").addClass('expandOpen');

		$('audio').remove();
       	$('body').append('<audio src="./js/audio/background.mp3" type="audio/mp3" autoplay></audio>');
	});

	$(".step-1").on('click', '.next-step', function(event) {
		event.preventDefault();
		$('audio').remove();
       	$('body').append('<audio src="./js/audio/background.mp3" type="audio/mp3" autoplay></audio>');

       	$(".step-1").hide();
		$(".step-2").show();

		setTimeout(function(){
		$(".step-2").find('.alerta').show();
			$(".step-2").find('.alerta').find('.p1').addClass('expandOpen');
		}, 1000);
	});

	setTimeout(function(){
		$(".step-1").find('.alerta').show();
		$(".step-1").find('.alerta').find('.p1').addClass('expandOpen');
	}, 1000);




	//step 2

	$(".step-2").find('.accesorios').on('click', '.bottom-updowm', function(event) {
		event.preventDefault();
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).parent().animate({bottom:-108}, 300);
		}else{
			$(this).addClass('on');
			$(this).parent().animate({bottom:0}, 300);
		}
		
	});

	$(".step-2").on('click', '.alerta', function(event) {
		event.preventDefault();
		$(this).hide();
	});

	//aqui
	$(".step-2").on('click', '.option', function(event) {
		event.preventDefault();
		$('audio').remove();
       	$('body').append('<audio src="./js/audio/check.mp3" type="audio/mp3" autoplay></audio>');

       	$(".accesorios").animate({bottom:-108}, 300);
       	
       	setTimeout(function(){ 
       		$(".accesorios").animate({bottom:0}, 500);	
       	}, 500);

       	var accesori = $(this).attr('accesorio');

       	$(".step-2").find('.option').each(function(index, el) {
			$(this).removeClass('on pulse');       		
       	});

       	$(this).addClass('on pulse');

       	$(".categoria").find('.item').each(function(index, el) {
       		$(this).hide();
       		$(this).removeClass('on');

       		if($(this).attr('accesorio') == accesori){
       			var elemento = $(this);
       			setTimeout(function(){ 
	       			elemento.show();
       				elemento.addClass('on');
	       		}, 500);
       			
       		}	
       	});

	});
    
    /*$( ".categoria" ).find('.item').each(function(index, el) {
    	$(this).draggable({ axis: "x", containment: ".contenido"});
    });*/

		// canvas
      	var rines = 1;
      	var tono = 1;
      	var estribo = 1;
      	var parachoque = 1;
      	var capo = 1;
      	var cama = 1;
      	var thule = 1;

      	$(".categoria").find('.item').on('click', function(event) {
      		event.preventDefault();
	      	$(".categoria").find('.item').each(function(index, el) {
	      		if($(this).hasClass('parachoque')){	      			
	      			$(this).find('div').each(function(index, el) {
	      				if($(this).hasClass('on')){
	      					parachoque = $(this).attr('parachoque');
	      				}
	      			});
	      		}

	      		if($(this).hasClass('capo')){	      			
	      			$(this).find('div').each(function(index, el) {
	      				if($(this).hasClass('on')){
	      					capo = $(this).attr('capo');
	      				}
	      			});
	      		}

	      		if($(this).hasClass('thule')){	      			
	      			$(this).find('div').each(function(index, el) {
	      				if($(this).hasClass('on')){
	      					thule = $(this).attr('thule');
	      				}
	      			});
	      		}

	      		if($(this).hasClass('cama')){	      			
	      			$(this).find('div').each(function(index, el) {
	      				if($(this).hasClass('on')){
	      					cama = $(this).attr('cama');
	      				}
	      			});
	      		}

	      		if($(this).hasClass('estribo')){	      			
	      			$(this).find('div').each(function(index, el) {
	      				if($(this).hasClass('on')){
	      					estribo = $(this).attr('estribo');
	      				}
	      			});
	      		}

	      		if($(this).hasClass('llantas')){	      			
	      			$(this).find('div').each(function(index, el) {
	      				if($(this).hasClass('on')){
	      					rines = $(this).attr('llantas');
	      				}
	      			});
	      		}

	      		if($(this).hasClass('colores')){	      			
	      			$(this).find('div').each(function(index, el) {
	      				if($(this).hasClass('on')){
	      					tono = $(this).attr('color');
	      				}
	      			});
	      		}
	      	});

		});
		
		//set canvas
      	var estrib = document.getElementById("estribos");
      	var parachoq = document.getElementById("parachoque");
      	var cap = document.getElementById("capo");
      	var cam = document.getElementById("cama");
      	var thul = document.getElementById("thule");
		var base = document.getElementById("base");
		var llantas = document.getElementById("llantas");

		//canvas area
	    var ctx = base.getContext("2d");

	    //objeto img
	    var estrib_img = new Image();
	    var parachoq_img = new Image();
	    var cap_img = new Image();
	    var cam_img = new Image();
	    var thule_img = new Image();
	    var base_img = new Image();
	    var llantas_img = new Image();

	    estrib_img.src =  './img/categoria/estribo/1.png';
	    parachoq_img.src = './img/categoria/parachoque/1.png';
	    cap_img.src = './img/categoria/capo/1.png';
		cam_img.src = './img/categoria/cama/1.png';
		thule_img.src = './img/categoria/thule/1.png';
		base_img.src = './img/color/1.png';
		llantas_img.src = './img/categoria/llantas/1.png';

		base_img.onload = function(){
			ctx.drawImage(base_img, 0, 0);
			setTimeout(function(){
				ctx.drawImage(parachoq_img, 0, 0);
			    ctx.drawImage(thule_img, 0, 0);
			    ctx.drawImage(cam_img, 0, 0);
			    ctx.drawImage(cap_img, 0, 0);
				ctx.drawImage(llantas_img, 0, 0);
			    ctx.drawImage(estrib_img, 0, 0);
			}, 500);	
	    }

      	//colores 
      	$(".categoria").find('.item').on('click', 'div', function(event) {
      		event.preventDefault();
      		//identificador
      		$(this).parent().find('div').each(function(index, el) {
      			$(this).removeClass('on');
      		});

      		$(this).addClass('on');

      		//loading

      		loading();

      		//limpiar canvas
      		ctx.clearRect(0, 0, base_img.width, base_img.height);
      		ctx.clearRect(0, 0, parachoq_img.width, parachoq_img.height);
      		ctx.clearRect(0, 0, cap_img.width, cap_img.height);
      		ctx.clearRect(0, 0, cam_img.width, cam_img.height);
      		ctx.clearRect(0, 0, thule_img.width, thule_img.height);
      		ctx.clearRect(0, 0, estrib_img.width, estrib_img.height);
      		ctx.clearRect(0, 0, llantas_img.width, llantas_img.height);
      		

      		if($(this).parent().hasClass('parachoque')){
      			parachoque = $(this).attr('parachoque');
      		}else if($(this).parent().hasClass('capo')){
      			capo = $(this).attr('capo');
      		}else if($(this).parent().hasClass('thule')){
      			thule = $(this).attr('thule');
      		}else if($(this).parent().hasClass('cama')){
      			cama = $(this).attr('cama');
      		}else if($(this).parent().hasClass('estribo')){
      			estribo = $(this).attr('estribo');
      		}else if($(this).parent().hasClass('llantas')){
      			rines = $(this).attr('llantas');
      		}else if($(this).parent().hasClass('colores')){
      			tono = $(this).attr('color');
      		}

      		//redisenar canvas
      		estrib_img.src =  './img/categoria/estribo/'+estribo+'.png';
		    parachoq_img.src = './img/categoria/parachoque/'+parachoque+'.png';
		    cap_img.src = './img/categoria/capo/'+capo+'.png';
			cam_img.src = './img/categoria/cama/'+cama+'.png';
			thule_img.src = './img/categoria/thule/'+thule+'.png';
      		base_img.src = './img/color/'+tono+'.png';
      		llantas_img.src = './img/categoria/llantas/'+rines+'.png'

      		//cargar base primero
      		base_img.onload = function(){
				ctx.drawImage(base_img, 0, 0);
				setTimeout(function(){
					ctx.drawImage(parachoq_img, 0, 0);
				    ctx.drawImage(thule_img, 0, 0);
				    ctx.drawImage(cam_img, 0, 0);
				    ctx.drawImage(cap_img, 0, 0);
					ctx.drawImage(llantas_img, 0, 0);
				    ctx.drawImage(estrib_img, 0, 0);
				}, 500);	
	      	}

	      	 $('audio').remove();
        	 $('body').append('<audio src="./js/audio/touch.mp3" type="audio/mp3" autoplay></audio>');

      	});






});
