// JavaScript Document	
$(function(){
	$(".loadId span").on("click",function(){
		$(".loadUser").css("display","block");
		$(".loadAddress").css("display","none");
	});
	$(".loadPassword span").on("click",function(){
		$(".loadUser").css("display","none");
		$(".loadAddress").css("display","block");
	});		
});
			