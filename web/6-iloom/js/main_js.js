/*slider*/
	$(document).ready(function(){
      $('.slider').bxSlider({
		  auto: true,
		stopAutoOnClick: true,
		pager: true
	  });
    });

/**/
$(function(){
	$('.btn_allmenu_open').click(function(){
		$('.allmenu').animate({left:"0"});
		$('.dimmed').animate({left:"50%"});
	});
	$('.btn_allmenu_close').click(function(){
		$('.allmenu').animate({left:"-100%"});
		$('.dimmed').animate({left:"-50%"});
	});
	$('.dimmed').click(function(){
		$('.allmenu').animate({left:"-100%"});
		$('.dimmed').animate({left:"-50%"});		
	});
});

/* 헤더 숨기기 */
$(function () {
    var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $("#header").css({"top":"0px","background":"none"});
        } else {
            $("#header").css({"top": "0px","background":"#fff"});
        }
        lastScrollTop = st;
    });
});  

