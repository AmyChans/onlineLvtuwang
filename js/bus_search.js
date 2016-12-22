// JavaScript Document
$(document).ready(function() {
	$(".date ul li").click(function() {
		$(this).addClass('on').siblings().removeClass('on');
		/*alert($(this).index()); 通过上面的li获取响应的索引值，给下面的ul使用*/
		$(".leftInfo .main-so").eq($(this).index()).show().siblings().hide();
	});
});