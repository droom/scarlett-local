    $(document).ready(function(){

    // VARIABLES
    var activeColor = '#a54c3a';
    var inactiveColor = '#333';
    var checkout_section_position = 0;
    var checkout_buy_quantity = $('.shoppingItem').length;


    // CONSTRUCTOR -->
    $('.checkout_stage1').show();
    $('.checkout_stage2').hide();

    $('.prescription-upload').css('display', 'none');
    $('.prescription-doctor').css('display', 'none');
    $('.prescription-address').css('display', 'none');
    $('.pd-launch').css('display', 'none');
    $('.cart-list').css('display', 'none');


    $('.checkout_breadcrumb .step1 a').css('color', activeColor);

    if (checkout_buy_quantity > 0){
    	$('#checkout').css('display', 'none');
    	$('#continue').css('display', 'block');
    } else {
    	$('#checkout').css('display', 'block');
    	$('#continue').css('display', 'none');
    }


    $('.btnContinue').click(function(){
    	checkout_section_position++;
    	gotoNextSection(checkout_section_position);
    });   

    $('.checkout_breadcrumb .step1 a').click(function(){
    	checkout_section_position = 0;
    	gotoNextSection(checkout_section_position);
    });   

    $('.checkout_breadcrumb .step2 a').click(function(){
    	checkout_section_position = 1;
    	gotoNextSection(checkout_section_position);
    });   







    $("h4.measure").text("Yes");
    $("h4.dont-measure").text("No");
    $("label[for='prescription-1']").text("I need prescription lenses for my glasses.");
    $("label[for='readers-2']").text("I need reading / magnifying lenses for my glasses.");
    $("label[for='non-rx-3']").text("I need non-prescription lenses for my glasses.");
    $("label[for='upload-a-picture-1']").text("I will attach a copy of my prescription and upload it from my computer.");
    $("label[for='call-my-doctor-2']").text("I would like you to call my doctor and obtain my prescription.");
    $("label[for='send-later-3']").text("I don't have my prescription right now but I will send it to Scarlett of Soho later.");
    $("label[for='yes-1']").text("Please use extra high index (1.67) lenses for an additional £35 if I have a high prescription.");
    $("label[for='no-2']").text("Please do not use extra high-index lenses for my prescription");
    $("label[for='measure-1']").text("Please measure my PD ");
    $("label[for='dont-measure-2']").text("Without PD, we’ll use the standard measurements 65mm Men and 63mm Women");



    $('.upload-a-picture').click(function() {
    	$('.prescription-upload').css('display', 'block');
    	$('.prescription-doctor').css('display', 'none');
    	$('.prescription-address').css('display', 'none');
    });
    $('.call-my-doctor').click(function() {
    	$('.prescription-upload').css('display', 'none');
    	$('.prescription-doctor').css('display', 'block');
    	$('.prescription-address').css('display', 'none');
    });
    $('.send-later').click(function() {
    	$('.prescription-upload').css('display', 'none');
    	$('.prescription-doctor').css('display', 'none');
    	$('.prescription-address').css('display', 'block');
    });
    $('.radioWrap .radioLabel').hover(function() {
    	$('selector').css( 'cursor', 'pointer' );
    });


    $('.stage2question1 .radioWrap .radioLabel').click(function() {
    	$('.stage2question1 .radioWrap .radioLabel').css('font-weight', 'normal');
    	$(this).css('font-weight', 'bold');
    });
    $('.stage2question2 .radioWrap .radioLabel').click(function() {
    	$('.stage2question2 .radioWrap .radioLabel').css('font-weight', 'normal');
    	$(this).css('font-weight', 'bold');
    }); 
    $('.stage2question3 .radioWrap .radioLabel').click(function() {
    	$('.stage2question3 .radioWrap .radioLabel').css('font-weight', 'normal');
    	$(this).css('font-weight', 'bold');
    }); 
    $('.stage2question4 .radioWrap .radioLabel').click(function() {
    	$('.stage2question4 .radioWrap .radioLabel').css('font-weight', 'normal');
    	$(this).css('font-weight', 'bold');
    }); 


    $("label[for='prescription-1']").click(function(){
    	show_prescription();
    });
    $("label[for='non-rx-2']").click(function(){
    	hide_prescription();
    });



    $('.measure').click(function() {
    	$('.pd-launch').css('display', 'block');
    });

    $('.dont-measure').click(function() {
    	$('.pd-launch').css('display', 'none');
    });




    function gotoNextSection(position){
    	console.log(position);

    	if ( position == 0 ){

    		$('#continue').css('display', 'block');
    		$('#checkout').css('display', 'none');
    		$('.checkout_stage1').fadeIn(300);
    		$('.checkout_stage2').hide();
    		$('.checkout_breadcrumb .step1 a').css('color', activeColor);
    		$('.checkout_breadcrumb .step2 a').css('color', inactiveColor);
    		$('.cart-customer').css('display', 'block');
    		$('.cart-list').css('display', 'none');
    	}


    	if ( position == 1 ){

    		$('#continue').css('display', 'none');
    		$('#checkout').css('display', 'block');
    		$('.checkout_stage1').hide();
    		$('.checkout_stage2').fadeIn(300);
    		$('.checkout_breadcrumb .step1 a').css('color', inactiveColor);
    		$('.checkout_breadcrumb .step2 a').css('color', activeColor);
    		$('.cart-customer').css('display', 'none');
    		$('.cart-list').css('display', 'block');
    	}
    }; 

    function hide_prescription(){
    	$('.stage2question2').fadeOut(200);
    	$('.stage2question3').fadeOut(200);
    	$('.stage2question4').fadeOut(200);
    }

    function show_prescription(){
    	$('.stage2question2').fadeIn(200);
    	$('.stage2question3').fadeIn(200);
    	$('.stage2question4').fadeIn(200);
    }

    function checkout_section(stepValue){
    	$('.checkout_breadcrumb .step1 a').css('color', inactiveColor);
    	$('.checkout_breadcrumb .step2 a').css('color', inactiveColor);
    	$('.checkout_breadcrumb .step3 a').css('color', inactiveColor);
    	$('.checkout_breadcrumb '+stepValue+' a').css('color', activeColor);

    	$('.checkout_stage1').hide();
    	$('.checkout_stage2').hide();

    	$('.checkout_stage'+checkout_section_position).css('display', 'block');

    };


});