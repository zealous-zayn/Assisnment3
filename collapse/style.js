$(document).ready(() => {

		

	$('#first').click(()=>{
		$('#firstBox').slideToggle()
	})

	$('#second').click(()=>{
		$('#secondBox').slideToggle()
	})

	$('#third').click(()=>{
		$('#secondBox').slideToggle()
		$('#firstBox').slideToggle()
	})

	$('#clickFirst').click(()=>{
		$('#paraFirst').slideToggle()
	})

	$('#clickSecond').click(()=>{
		$('#paraTwo').slideToggle()
	})

	$('#clickThird').click(()=>{
		$('#paraThird').slideToggle()
	})

});
