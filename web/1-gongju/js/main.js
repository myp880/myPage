
/*슬라이더*/
	$(document).ready(function(){
      $('.slider').bxSlider({
		  auto: true,
		stopAutoOnClick: true,
		pager: true,
		prevSelector:"#b_left",
		nextSelector:"#b_right"
	  });
/*주메뉴*/        
	$(".h_bot").hover(function(){
		$(".sub_menu").css({"position":"absolute","top":"62px"}).slideDown();
	});        
    });

