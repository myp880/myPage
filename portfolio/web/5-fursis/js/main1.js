/* slider */
$(document).ready(function(){
      $('.slider').bxSlider({
		  auto: true,
		stopAutoOnClick: true,
		pager: true
	  });
/*탭메뉴*/
	$(".content_showroom").append('<script>initTabMenu("tabmenu")</script>');
/*scroll top*/
     $('.go_top').click(function(){
		$('body,html').animate({scrollTop:0},400);
	 });

	
/* 햄버거 열기*/
$('.btn_allmenu_open').click(function(){
	$('nav').animate({
		left:"0"
	});
});
/* 햄버거 닫기 */
$('.btn_allmenu_close').click(function(){
	$('nav').animate({
		left:"-100%"
	});
});

	


}); /*끝*/




