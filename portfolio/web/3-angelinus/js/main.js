
/*slider*/	
	$(document).ready(function(){
        
      $('.slider').bxSlider({
		  auto: true,
		 /* autoControls: true, */
		  stopAutoOnClick: true,
		  speed:400,
		  pager: true,
		  slideWidth: 4000
	  });
        
      $('.slider2').bxSlider({
		  auto: true,
		 /* autoControls: true, */
		  stopAutoOnClick: true,
		  speed:400,
		  pager: true,
		  
	  });
        
     var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $("#header").css("top", "-60px");
        } else {
            $("#header").css("top", "0px");
        }
        lastScrollTop = st;
    });       
        
    });


