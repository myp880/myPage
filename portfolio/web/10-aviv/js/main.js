$(function(){
	
    /*모바일 - 글자위치 및 색상 변경*/
    /*
	if ($(window).width() < 768 )
	{
		$('.main_content_sm div').removeClass('sm_text').addClass('big_main_text').css({"color":"#fff"});
	}
	*/
    $(window).resize(function(){
        if ($(window).width() < 768 )
        {
            $('.main_content_sm div').removeClass('sm_text').addClass('big_main_text').css({"color":"#fff"});
        }else if ($(window).width() > 768) {
            $('.main_content_sm div').removeClass('big_main_text').addClass('sm_text');      
                  }                  
    });
    $(window).trigger('resize');
    
    /*햄버거버튼 클릭시*/
    $('.btn_allmenu_open').click(function(){
        $('nav').animate({"right":"0"},500);
    });
    
    $('.btn_allmenu_close').click(function(){
        $('nav').animate({"right":"-100%"},500);
    });
    
    /*gnb li a 호버시*/
    $('.gnb > li > a').hover(function(){
        $('.gnb > li > a').removeClass('active');
        $(this).addClass('active');
    });
    
    
});