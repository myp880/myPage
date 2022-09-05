$(function(){
 
	/* 클릭시 해당클래스로 스크롤이동, 시간나면 함수 단축화 해라 */
    
    
    
	$('.btn_web').on("click",function(e){
	e.preventDefault();

	var webtop = $('.content_web').offset();
	$('html,body').animate({scrollTop : webtop.top});
	});

	$('.btn_design').on("click",function(e){
	e.preventDefault();

	var webtop = $('.content_design').offset();
	$('html,body').animate({scrollTop : webtop.top});
	});

	$('.btn_about').on("click",function(e){
	e.preventDefault();

	var webtop = $('.content_about').offset();
	$('html,body').animate({scrollTop : webtop.top});
	});

	$('.btn_skills').on("click",function(e){
	e.preventDefault();

	var webtop = $('.content_skill').offset();
	$('html,body').animate({scrollTop : webtop.top});
	});

	$('.btn_contact').on("click",function(e){
	e.preventDefault();

	var webtop = $('.contact').offset();
	$('html,body').animate({scrollTop : webtop.top});
	});
	
    
    
	/* 모달 */
	  $("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");
   $("#glayLayer").click(function(){
      $(this).hide();
      $("#overLayer").hide();
	  $("#glayLayer").hide();
	 /*모달창닫을때시작*/
	$('html,body').css({'overflow':'auto','height':'auto'});
	$('body').off('scroll touchmove mousewheel');
	/*모달창닫을때끝*/
   });  

  $("#overLayer").click(function(){
		  $(this).hide();
		 $("#glayLayer").hide();
	$('html,body').css({'overflow':'auto','height':'auto'});
	$('body').off('scroll touchmove mousewheel');
	/*모달창닫을때끝*/
   });
   
   $(".modal").click(function(){
      $("#glayLayer").show();
		/*$("#modal_button").show();*/
      $("#overLayer").show().html("<div class='scroll' ><img src='"+$(this).attr("href")+"' /></div> ");

	  /*모달열엇을때 시작*/
    $('html, body').css({'overflow':'hidden','height':'auto'});
	return false;
 	$('body').on('scroll touchmove mousewheel', function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
   });
   /*모달열엇을때 끝*/
   });
	
	/*모바일-네비게이션 버튼 이벤트*/
	$('.btn_allmenu').click(function(){
		$('.gnb_wrap > ul').toggleClass('mb_nav');
		$('.btn_allmenu div').toggleClass('ex');
		$('.btn_allmenu span').fadeToggle(1);
		$('.gnb_wrap').toggleClass('mb_wrap');
	});
	$('.gnb_wrap').on('click focusOut',function(){
		$('.gnb_wrap > ul').removeClass('mb_nav');
		$('.btn_allmenu div').toggleClass('ex');
		$('.btn_allmenu span').fadeToggle(1);
		$(this).removeClass('mb_wrap');
	});
 
    /*버튼클릭시 
	$('.btn_allmenu').on('click focusIn',function(){
		$('.gnb').fadeToggle(500);
        $('.btn_allmenu span').fadeToggle(100);
       $('.btn_allmenu div').toggleClass('ex');        
	});
	*/



});