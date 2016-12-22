// JavaScript Document	
$(function(){
	$(".sureBtn input").on("click",function(){
		$("input[type='text']").each(function(){
			if($(this).val() == ""){
            	$(this).parent().next().show();
				$(this).parent().next().next().show();
				$(this).addClass("borderRed");
            }else if($(this).val() != ""){
				$(this).parent().next().hide();
				$(this).parent().next().next().hide();
				$(this).removeClass("borderRed");
			};
		});
	});	
});
	
$(document).ready(function() {
		$(".bottomBtn").click(function(){         //点击按钮遮罩出现，弹框一
		$(".zhezhao").show();
		$(".popInfo").show();
		$('body').css({"overflow-y":"hidden","padding-right":"17px"})
		});
	});				