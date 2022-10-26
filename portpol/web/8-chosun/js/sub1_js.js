/*slider*/
    $(document).ready(function(){
      $('.slider').bxSlider({
	  
	  auto: true,
	  autoControls: true,
	  stopAutoOnClick: true,
	  pager: true,
	  slideWidth: 600

	  });
    });
/**/
/*풀페이지*/
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
			navigation:true
	});

});

/*푸터 토글*/
$(function(){
	$(".family_site").click(function(){
		$(".form_site").toggle();
	});
	
	$(function(){
		$(".form_site").mouseleave(function(){
			$(this).hide();
		});
	});

});

