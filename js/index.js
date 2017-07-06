$(function(){
	var $height=$('.nav_bg').position().top;
	var $tt=$('.nav_bg').outerHeight(true)
	$(document).scroll(function(){
		var $top=$(document).scrollTop();
		if($top>=$height){
			$('.nav_bg').css({'position':'fixed','top':0});
			$('.subst').css('display','block');
			$('.cc_l').css({'position':'fixed','top':$tt})
		}
	})
	$(document).scroll(function(){
		var $top=$(document).scrollTop();
		if($top<=$height){
			$('.nav_bg').css('position','');
			$('.subst').css('display','none');
			$('.cc_l').css('position','')
		}
	})
	$('.l_area p').each(function(index){
		$(this).click(function(){
			$('.l_area p').removeClass('on1').eq(index).addClass('on1');
			$('.area_sch').hide().eq(index).show();
			$('html,body').scrollTop($height)
		})
	})
})