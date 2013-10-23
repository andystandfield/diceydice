$(document).ready(function(){

	$('dl.single_roll').click(function() {
		$('dl.single_roll.on .manipulator').fadeToggle(200);
		$('.manipulator',this).fadeToggle(200);
		$('dl.single_roll.on').removeClass('on');
		$(this).toggleClass('on');
		event.stopPropagation();
	});



	$('.manipulator .button').click(function() {
		console.log($(this).html());
	});

	$('html').click(function() {
		if ($('dl.single_roll').hasClass('on')) {
			$('dl.single_roll.on .manipulator').fadeToggle(200);
			$('dl.single_roll.on').removeClass('on');
		}
	});

	$('.close_btn').click(function() {
		event.preventDefault();
		$('#instructions').slideUp();
	});

	//

});