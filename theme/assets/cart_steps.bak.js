    $(document).ready(function(){

    // VARIABLES
    var activeColor = '#a54c3a';
    var inactiveColor = '#333';
    var checkout_section_position = 0;

    // Look for items in the buy table
    var checkout_buy_quantity = $('.shoppingItem').length;


    // CONSTRUCTOR -->
    $('.checkout_stage1').show();
    $('.checkout_stage2').hide();


    $('.prescription-secondary').hide();

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


    function hidePrescriptionToggles(){

        $('.prescription-secondary').show();
        $('.prescription-doctor').hide();
        $('.prescription-upload').hide();
        $('.prescription-address').hide();

    }



    $('.upload-a-picture').click(function() {
        hidePrescriptionToggles();
        $('.prescription-upload').show();
    });


    $('.call-my-doctor').click(function() {
        hidePrescriptionToggles();
        $('.prescription-doctor').show();
    });



    $('.send-later').click(function() {
        hidePrescriptionToggles();
        $('.prescription-address').show();
    });



    $('label[for=\'prescription-1\']').click(function() {

        //$('.stage2question1 .radioWrap .radioLabel').css('font-weight', 'normal');

    });



    function activeQuestion(whichQuestion, thisPassed){

        $(whichQuestion+' label').css('border', '#e7e7e7 1px solid');

        $(whichQuestion+' .radioWrap .radioLabel').css('-webkit-box-shadow', '1px 1px 1px #e7e7e7');
        $(whichQuestion+' .radioWrap .radioLabel').css('-moz-box-shadow', '1px 1px 1px #e7e7e7');
        $(whichQuestion+' .radioWrap .radioLabel').css('box-shadow', '1px 1px 1px #e7e7e7');

        $(thisPassed).css('border', '#666 1px solid');

        $(thisPassed).css('-webkit-box-shadow', 'inset 2px 2px 2px #e5e5e5');
        $(thisPassed).css('-moz-box-shadow', 'inset 2px 2px 2px #e5e5e5');
        $(thisPassed).css('box-shadow', 'inset 2px 2px 2px #e5e5e5');

    }





    $('.stage2question1 .radioWrap .radioLabel').click(function() {
        activeQuestion('.stage2question1', $(this));
    });

    $('.stage2question2 .radioWrap .radioLabel').click(function() {
       activeQuestion('.stage2question2', $(this));
   });

    $('.stage2question3 .radioWrap .radioLabel').click(function() {
        activeQuestion('.stage2question3', $(this));
    });

    $('.stage2question4 .radioWrap .radioLabel').click(function() {
        activeQuestion('.stage2question4', $(this));
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


 $('.prescription-secondary').fadeOut(200);
 $('.pd-launch').fadeOut(200);

 $( ".addRequired" ).removeAttr( "required" );
}

function show_prescription(){
   $('.stage2question2').fadeIn(200);
   $('.stage2question3').fadeIn(200);
   $('.stage2question4').fadeIn(200);

   $(".addRequired").prop('required',true);
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
