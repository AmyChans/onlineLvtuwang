// JavaScript Document	
$(function(){
	$(".startSta").children().eq(1).on("click",function(){
		if($(".alertStaCity").css("display")=="none"){
			$(".alertStaCity").css("display","block");
		}else if( $(".alertStaCity").css("display")=="block"){
			$(".alertStaCity").css("display","none");
		}
		});
	$(".endSta").children().eq(1).on("click",function(){
		if($(".alertEndCity").css("display")=="none"){
			$(".alertEndCity").css("display","block");
		}else if( $(".alertEndCity").css("display")=="block"){
			$(".alertEndCity").css("display","none");
		}
		});		
	});
	
				
$(document).ready(function() {
	var $key=0; /*这个变量来控制图片的播放*/
	var $circle=0; /*这个变量用来控制小点点*/
	var speed=500;   /*设定动画时间*/
	
	
    /*定时器开始*/
      var timer=setInterval(autoplay, 2000);
      function autoplay(){
        
        $key++; 
		if($key>3)
		{
			/*alert("aa");*/
			$key=1; 
			$("#box ul").css("left",0);  
		}
		$("#box ul").stop().animate({"left":-$key*1920},speed);

		/*小点按钮开始*/
		$circle++;  
		if($circle>2) 
		{
			$circle=0;
		}
		$("#box .pointArea a").eq($circle).addClass('current').siblings().removeClass('current');
      }
     /* 点击小点事件*/

     $("#box .pointArea a").click(function(event) {
     	$key=$(this).index();  
     	$circle=$(this).index();
     	$("#box ul").stop().animate({"left":-$key*1920},speed);
     	$("#box .pointArea a").eq($circle).addClass('current').siblings().removeClass('current');
     });

     /*清除定时器*/
      $("#box").hover(function() {
        clearInterval(timer);
      }, function() {
      	clearInterval(timer);
      	timer=setInterval(autoplay,2000);
      });


});