$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        pager: true
    });

    $('.slider2').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        pager: true,
        mode:'fade'
    });
    
    $('.btn_allmenu').click(function(){
        $('nav').toggleClass('mb_nav');
    });
    
    
    
});

