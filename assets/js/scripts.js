
function scroll_to_class(element_class, removed_height) {
	var scroll_to = $(element_class).offset().top - removed_height;
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 0);
	}
}

function bar_progress(progress_line_object, direction) {
	var number_of_steps = progress_line_object.data('number-of-steps');
	var now_value = progress_line_object.data('now-value');
	var new_value = 0;
	if(direction == 'right') {
		new_value = now_value + ( 100 / number_of_steps );
	}
	else if(direction == 'left') {
		new_value = now_value - ( 100 / number_of_steps );
	}
	progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {

	var step = $('div').find('.f1-step.active').attr('id');
	if(step == 1){
		var event = document.createEvent('customEvent')
		event.initCustomEvent('analyticsCall', true, true, {
				eventType: "taskFlow",
				taskName: "Registration task",
				tastStart: true,
				tastComplete: false,
				taskSeqNo: 1,
				taskStepName: "about",
				lineOfBusiness: "lob",
				website: "website",
				pageName: "Registration about page",
				siteSectionL1 : " about page siteSectionL1",
				siteSectionL2 : "about page siteSectionL2",
				siteSectionL3 : "about page siteSectionL3"
		});
		document.body.dispatchEvent(event);
	}

    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");

    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });

    /*
        Form
    */
    $('.f1 fieldset:first').fadeIn('slow');

    $('.f1 input[type="text"], .f1 input[type="password"], .f1 textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });

    // next step
    $('.f1 .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');

    	// fields validation
    	parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');

    		}
    	});
    	// fields validation

    	if( next_step ) {
				if(this.id == "tell_us"){
					var event = document.createEvent('customEvent')
					 event.initCustomEvent('analyticsCall', true, true, {
								 eventType: "formSubmit",
								 formName: "Registration form",
								 formId: "registration id",
								 formMulti: true,
								 formTotalSteps: "3",
								 formStart: true,
								 formStepName: "about",
								 formStepNo: 1,
								 formSubmit: true,
								 lineOfBusiness: "lob",
								 website: "website",
								 pageName: "Registration page name",
								 siteSectionL1 : "siteSectionL1",
								 siteSectionL2 : "siteSectionL2",
								 siteSectionL3 : "siteSectionL3"
						 });
						 document.body.dispatchEvent(event);
						 console.log('event detail', event.detail)
				}else if(this.id == "account_setup"){
					var event = document.createEvent('customEvent')
					 event.initCustomEvent('analyticsCall', true, true, {
								 eventType: "formSubmit",
								 formName: "Registration form",
								 formId: "registration id",
								 formMulti: true,
								 formTotalSteps: "3",
								 formStart: true,
								 formStepName: "account",
								 formStepNo: 2,
								 formSubmit: true,
								 lineOfBusiness: "lob",
								 website: "website",
								 pageName: "Registration page name",
								 siteSectionL1 : "siteSectionL1",
								 siteSectionL2 : "siteSectionL2",
								 siteSectionL3 : "siteSectionL3"
						 });
						 document.body.dispatchEvent(event);
						 console.log('event detail', event.detail)
				}

    		parent_fieldset.fadeOut(400, function() {
    			// change icons
    			current_active_step.removeClass('active').addClass('activated').next().addClass('active');

    			// progress bar
    			bar_progress(progress_line, 'right');
    			// show next step
	    		$(this).next().fadeIn();
					console.log('current_active_step' , 	current_active_step.next().attr('id'))
					var step = current_active_step.next().attr('id');
					 if (step == 2){
						var event = document.createEvent('customEvent')
						event.initCustomEvent('analyticsCall', true, true, {
								eventType: "taskFlow",
								taskName: "Registration task",
								tastStart: false,
								tastComplete: false,
								taskSeqNo: step,
								taskStepName: "account detail",
								lineOfBusiness: "lob",
								website: "website",
								pageName: "Registration account detail page",
								siteSectionL1 : " account detail siteSectionL1",
								siteSectionL2 : "account detail siteSectionL2",
								siteSectionL3 : "account detail siteSectionL3"
						});
						document.body.dispatchEvent(event);
					}else if (step == 3){
					 var event = document.createEvent('customEvent')
					 event.initCustomEvent('analyticsCall', true, true, {
							 eventType: "taskFlow",
							 taskName: "Registration task",
							 tastStart: false,
							 tastComplete: false,
							 taskSeqNo: step,
							 taskStepName: "social detail",
							 lineOfBusiness: "lob",
							 website: "website",
							 pageName: "Registration social detail page",
							 siteSectionL1 : " social detail siteSectionL1",
							 siteSectionL2 : "social detail siteSectionL2",
							 siteSectionL3 : "social detail siteSectionL3"
					 });
					 document.body.dispatchEvent(event);
				 }
	    		// scroll window to beginning of the form
    			scroll_to_class( $('.f1'), 20 );
	    	});
    	}else{
				if(this.id == "tell_us"){
					var event = document.createEvent('customEvent')
					event.initCustomEvent('analyticsCall', true, true, {
								eventType: "formError",
								formName: "Registration form",
								formId: "registration id",
								formMulti: true,
								formTotalSteps: "3",
								formStart: true,
								formStepName: "about",
								formStepNo: 1,
								formErrors: true,
								formErrorCount: "3",
								formErrorFields: "firstname|lastname|about",
								formErrorType: "empty|empty|empty",
								formSubmit: false,
								lineOfBusiness: "lob",
								 website: "website",
								 pageName: "Registration page name",
								 siteSectionL1 : "siteSectionL1",
								 siteSectionL2 : "siteSectionL2",
								 siteSectionL3 : "siteSectionL3"
						});
						document.body.dispatchEvent(event);
						 console.log('event detail', event.detail)
				}else if(this.id == "account_setup"){
					var event = document.createEvent('customEvent')
					event.initCustomEvent('analyticsCall', true, true, {
								eventType: "formError",
								formName: "Registration form",
								formId: "registration id",
								formMulti: true,
								formTotalSteps: "3",
								formStart: true,
								formStepName: "account",
								formStepNo: 2,
								formErrors: true,
								formErrorCount: "3",
								formErrorFields: "email|password|repeat_password",
								formErrorType: "empty|empty|empty",
								formSubmit: false,
								lineOfBusiness: "lob",
							 website: "website",
							 pageName: "Registration page name",
							 siteSectionL1 : "siteSectionL1",
							 siteSectionL2 : "siteSectionL2",
							 siteSectionL3 : "siteSectionL3"
						});
						document.body.dispatchEvent(event);
						 console.log('event detail', event.detail)
				}
			}

    });

    // previous step
    $('.f1 .btn-previous').on('click', function() {
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');

    	$(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
    		current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
    		// progress bar
    		bar_progress(progress_line, 'left');
    		// show previous step
    		$(this).prev().fadeIn();
    		// scroll window to beginning of the form
			scroll_to_class( $('.f1'), 20 );
    	});
    });

    // submit
    $('#submit').on('click', function(e) {
			var event = document.createEvent('customEvent')
			 event.initCustomEvent('analyticsCall', true, true, {
						 eventType: "formSubmit",
						 formName: "Registration form",
						 formId: "registration id",
						 formMulti: true,
						 formTotalSteps: "3",
						 formStart: true,
						 formStepName: "account",
						 formStepNo: 2,
						 formSubmit: true,
						 lineOfBusiness: "lob",
						 website: "website",
						 pageName: "Registration page name",
						 siteSectionL1 : "siteSectionL1",
						 siteSectionL2 : "siteSectionL2",
						 siteSectionL3 : "siteSectionL3"
				 });

				 document.body.dispatchEvent(event);
				 console.log('event detail', event.detail)
				 var event = document.createEvent('customEvent')
				 event.initCustomEvent('analyticsCall', true, true, {
						 eventType: "taskFlow",
						 taskName: "Registration task",
						 tastStart: false,
						 tastComplete: true,
						 taskSeqNo: 'step',
						 taskStepName: "social detail",
						 lineOfBusiness: "lob",
						 website: "website",
						 pageName: "Registration social detail page",
						 siteSectionL1 : " social detail siteSectionL1",
						 siteSectionL2 : "social detail siteSectionL2",
						 siteSectionL3 : "social detail siteSectionL3"
				 });
				 document.body.dispatchEvent(event);
				 console.log('events', event)
			window.location = '/index.html'
    	// fields validation
    	// $(this).find('input[type="text"], input[type="password"], textarea').each(function() {
    	// 	if( $(this).val() == "" ) {
    	// 		e.preventDefault();
    	// 		$(this).addClass('input-error');
    	// 	}
    	// 	else {
			// 		var event = document.createEvent('customEvent')
			// 		event.initCustomEvent('analyticsCall', true, true, {
			// 				eventType: "taskFlow",
			// 				taskName: "Registration task",
			// 				tastStart: false,
			// 				tastComplete: true,
			// 				taskSeqNo: 'step',
			// 				taskStepName: "social detail",
			// 				lineOfBusiness: "lob",
			// 				website: "website",
			// 				pageName: "Registration social detail page",
			// 				siteSectionL1 : " social detail siteSectionL1",
			// 				siteSectionL2 : "social detail siteSectionL2",
			// 				siteSectionL3 : "social detail siteSectionL3"
			// 		});
			// 		document.body.dispatchEvent(event);
    	// 		$(this).removeClass('input-error');
    	// 	}
    	// });

    	// fields validation

    });


});
