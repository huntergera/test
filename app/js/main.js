;(function($) {
	$("#reg-form").validate({
		rules: {
			password: 'required',
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			password: 'Type here your password',
			email: 'Enter your email'
		}
	});

	$( ".input" ).focus(function() {
		$(this).parent().find('.input-label, .error').addClass('active');
	});

	$( ".input" ).blur(function() {
		var inputVal = $(this).val();
		if (!inputVal) {
			$(this).parent().find('.input-label, .error').removeClass('active');
		}
	});
})(jQuery);