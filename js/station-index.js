// JavaScript Document	
$(function(){
	$(".inputSheng").on("click",function(){
		if( $(".popSheng").css("display")=="none" ){
			$(".popSheng").css("display","block");
			$(".popShi").css("display","none");
		}else if( $(".popSheng").css("display")=="block" ){
			$(".popSheng").css("display","none");
		};
	});
	$(".inputShi").on("click",function(){
		if( $(".popShi").css("display")=="none" ){
			$(".popShi").css("display","block");
			$(".popSheng").css("display","none");
		}else if( $(".popShi").css("display")=="block" ){
			$(".popShi").css("display","none");
		};
	});
	$(".shengList span").on("click",function(){
		var getShengInfo=$(this).html();
		$(".inputSheng").attr("value",getShengInfo);
		$(".popSheng").css("display","none");		
		$(".popShi").css("display","block");	
	});
	$(".shiList span").on("click",function(){
		var getShiInfo=$(this).html();
		$(".inputShi").attr("value",getShiInfo);
		$(".popShi").css("display","none");			
	});			
});
