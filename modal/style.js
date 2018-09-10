$(document).ready(() => {

		

	$('#btn').click(()=>{
		$('.modal-fade').fadeIn(300)
		$('.modal-content').slideToggle(500)
	})

	$('.close').click(()=>{
		$('.modal-fade').fadeOut(500)
		$('.modal-content').hide()
	})

	$('.btn-close').click(()=>{
		$('.modal-fade').fadeOut(500)
		$('.modal-content').hide()
	})

	$('.modal-fade').click(()=>{
		$('.modal-fade').fadeOut(500)
		$('.modal-content').hide()
	})


});
