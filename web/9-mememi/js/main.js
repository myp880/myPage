    $(document).ready(function(){

    /*headerscroll*/    
         var jbOffset = $( '.header_wrap' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > jbOffset.top ) {
            $( '.header_wrap' ).addClass( 'header_fixed' );
          }
          else {
            $( '.header_wrap' ).removeClass( 'header_fixed' );
          }
        });
        
    /*btn_allmenu*/
    $('.btn_allmenu_open').click(function(){
        $(this).toggleClass('ex');
        $('nav').slideToggle();
    });    
    
    /*하위메뉴*/    
    $('.gnb > li').mouseenter(function(){
		if ($(window).width() < 768 )
		{
			return false;
		}
        $(this).children('.depth').stop().slideDown();
    });
    $('.gnb > li').focusin(function(){
        $(this).children('.depth').stop().slideDown();
    });    
        
    $('.gnb > li').mouseleave(function(){
        $(this).children('.depth').stop().slideUp();
    });

              
    /*bxslider*/ 
    $('.slider').bxSlider({
		  auto: true,
		stopAutoOnClick: true,
		pager: true
	  });
        
    /*flowslider*/    
	$('.issue').mouseenter(function(){
		$(this).find('.flowimg em').show();
	});
	$('.issue').mouseleave(function(){
		$(this).find('.flowimg em').hide();
	});

	$("#flowslider").FlowSlider({
		marginStart:0,
		marginEnd:0,
		//position:0.0,
		startPosition:0.55
	});        
    

        
    });