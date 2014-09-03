/* removed */


$(document).ready(function(){
  checkStatus();

  var prescriptionNeeded = false;
  var prescriptionComplete = false;

  var stage2question2_answered = false;
  var stage2question3_answered = false;
  var stage2question4_answered = false;



  // check item quantities
  var itemQtyPrescription = $('.checkout_buy_prescription_item').length;
  var itemQtyFrame = $('.checkout_buy_frame_item').length;
  var itemQtyAcc = $('.checkout_buy_acc_item').length;



  if (itemQtyPrescription > 0){
    $(".checkout_buy_prescription_title").show();
    console.log("prescription show")
    prescriptionNeeded = true;

  } else {
    $(".checkout_buy_prescription_title").hide();
    console.log("prescription hide")
  }

  if (itemQtyFrame > 0){
    $(".checkout_titles_buy_frames").show();
  } else {
    $(".checkout_titles_buy_frames").hide();
  }

  if (itemQtyAcc > 0){
    $(".checkout_titles_buy_acc").show();
  } else {
    $(".checkout_titles_buy_acc").hide();
  }




  function enableCheckout(){
    // $('#checkout').css('background', 'green');

   // $('#checkout').addClass('enabled');




    $('#checkout').attr('disabled', false);
    $('#checkout').val('Proceed to Review & Payment →');
  };

  function disableCheckout(){
    // $('#checkout').css('background', '#333');
    $('#checkout').attr('disabled', true);
    $('#checkout').val("Please fill in all fields to proceed");
  };




  function checkStatus(){

    console.log("stage2question2_answered", stage2question2_answered);
    console.log("stage2question3_answered", stage2question3_answered);
    console.log("stage2question4_answered", stage2question4_answered);

    // console.log("localStorage['stage2question2_answered']", localStorage['stage2question2_answered']);



    if (stage2question2_answered && stage2question3_answered && stage2question4_answered){

      enableCheckout();
      console.log("enable checkout");

    } else {

     disableCheckout();
     console.log("disable checkout");

   }




 };





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




$('.stage2question2 .radioWrap .radioLabel').click(function() {
  stage2question2_answered = true;
  // localStorage['stage2question2_answered'] = stage2question2_answered;
  activeQuestion('.stage2question2', this);
  checkStatus();
});

$('.stage2question3 .radioWrap .radioLabel').click(function() {
  stage2question3_answered = true;
  // localStorage['stage2question3_answered'] = stage2question3_answered;
  activeQuestion('.stage2question3', this);
  checkStatus();
});

$('.stage2question4 .radioWrap .radioLabel').click(function() {
  stage2question4_answered = true;
  // localStorage['stage2question4_answered'] = stage2question4_answered;
  activeQuestion('.stage2question4', this);
  checkStatus();
});





});
