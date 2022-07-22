$(function(){

	var indiceatual = 0
 	var indicemaximo = $('.slider img').length;
	var delay = 5000

	initSlider();
	cliqueSlider();

	function initSlider(){
		for(var i = 0; i < indicemaximo; i++){
	 		if(i == 0){
	 			$('.bullet-nav').append('<span style="background:#069;"></span>');
	 		}else{
	 			$('.bullet-nav').append('<span></span>');
	 		}
		}
		$('.slider img').eq(0).fadeIn();
		setInterval(function(){
			alternarSlider();
		},delay);
	}

	function cliqueSlider() {
		$('.bullet-nav span').click(function(){
			$('.slider img').eq(indiceatual).stop().fadeOut(2000);
			indiceatual = $(this).index();
			$('.slider img').eq(indiceatual).stop().fadeIn(2000);
			$('.bullet-nav span').css('background-color','#ccc');
			$(this).css('background-color','#069')
		})
	}

	function alternarSlider(){
		$('.slider img').eq(indiceatual).stop().fadeOut(2000);
		indiceatual+=1
		if (indiceatual == indicemaximo)
			indiceatual == 0;
		$('.bullet-nav span').css('backgroud-color','#ccc');
		$('.bullet-nav span').eq(indiceatual).css('backgroud-color','#069');
		$('.slider img').eq(indiceatual).stop().fadeIn(2000);
	}

});