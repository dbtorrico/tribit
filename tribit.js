$(function(){
	//Rolagem
	$('#menu ul li').click(function(){
		var index = $(this).attr('class');
		
		$('html, body').animate({
			scrollTop: $('#'+index).offset().top - 50
		}, 1000);

//		if(index == 'home'){
//			window.history.replaceState("Joe Black - ", "", "/");
//		}else{
//			window.history.replaceState("Joe Black - ", "", "/#"+index);
//		}
	});
});

//Bt Home
//$(window).scroll(function(){		
//	
//	if($(window).scrollTop() > 1000){		
//		$('#menu ul li.home').show();
//	}else{
//		$('#menu ul li.home').hide();
//	}
//	
//});