// JavaScript Document	
$(function(){
	$(".reWrite").on("click",function(){
		$(".popInfo_2").css("display","block");
		$(".zhezhao").css("display","block");				
	});
	$(".popBtn_2").on("click",function(){
		$(".popInfo_1").css("display","none");
		$(".popInfo_2").css("display","none");
		$(".zhezhao").css("display","none");				
	});
	$(".addPasBtn").on("click",function(){
		$(".popInfo_1").css("display","block");
		$(".zhezhao").css("display","block");				
	});
});