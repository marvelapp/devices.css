$(document).ready(function(){
	$(".selector li").click(function () {
		if($(this).hasClass("select-landscape")){
			$(this).toggleClass("selected");
			$(this).parent().parent().parent().toggleClass("landscape");
			return;
		}
		var deviceColour = $(this).attr("class");
		var selectedColour = deviceColour.split("-");
		if($(this).parent().find('.select-landscape').hasClass('selected')){
			$(this).parent().children().removeClass("selected");
			$(this).parent().find('.select-landscape').addClass("selected");
			$(this).addClass("selected");
			$(this).parent().parent().parent().removeClass();
			$(this).parent().parent().parent().addClass("landscape");
			$(this).parent().parent().parent().addClass(selectedColour[1]);
		} else {
			$(this).parent().children().removeClass("selected");
			$(this).addClass("selected");
			$(this).parent().parent().parent().removeClass();
			$(this).parent().parent().parent().addClass(selectedColour[1]);
		}
		
 	});
});