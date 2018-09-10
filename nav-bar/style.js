$(document).ready(() => {
	$('input').focus(function(){

		$(this).addClass("input-shadow")
	});

	$('input').focusout(function(){

		$(this).removeClass("input-shadow")
	});

	$("#dropdown").click(() =>{
		$(".dropdown-menu").toggle()
		if($(window).width()<=965){
		$(".nav-bar").toggleClass("visible2")
		$('li').eq(2).toggleClass('hit')}
		});


	$('.toggler').click(() =>{
		$('.collapse').toggle();
		$('.nav-bar').toggleClass('visible')
	})
var i = 0;

$(()=> {
    $(window).on("resize",()=> {
        var windowsize = $(window).width();
        if (windowsize < 965 && i === 0) {
            i = 1;
        } else if (windowsize >= 965 && i == 1) {
            location.reload();
            i = 0;
        }
    });
});

});

