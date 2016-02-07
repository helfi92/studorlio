$(document).ready(function(){
	
	//set navbar active tab
	$(".nav a").on("click",function(){
		$(".nav .active").removeClass("active");
		$(this).parent().addClass("active");
	});

});
