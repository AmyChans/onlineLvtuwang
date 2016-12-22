// JavaScript Document	
$(function(){
	$(".paytop ul li").on("click",function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
		});
	});
	
				