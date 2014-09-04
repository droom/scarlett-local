$(document).ready(function(){

var prescriptionNeeded = false;
var prescriptionComplete = false;

var stage2question2_answered = false;
var stage2question3_answered = false;
var stage2question4_answered = false;

var activeColor = '#a54c3a';
var inactiveColor = '#333';

var itemQtyPrescription = $('.checkout_buy_prescription_item').length;
var itemQtyFrame = $('.checkout_buy_frame_item').length;
var itemQtyAcc = $('.checkout_buy_acc_item').length;


// INIT

if (itemQtyPrescription > 0){
  // There are items in the cart which require the form
  $(".checkout_buy_prescription_title").show();
  prescriptionNeeded = true;
  $('#continue').show();
  $('#checkout').hide();


} else {
  $(".checkout_buy_prescription_title").hide();
  $('.checkout_breadcrumb li.step2').remove();
  if ( $('.checkout_breadcrumb li.step3').length == 1) {
    $('.checkout_breadcrumb li.step3').html($('.checkout_breadcrumb li.step3').html().replace('3.', '2.'));
  }


  prescriptionNeeded = false;
  $('#continue').hide();
  $('#checkout').show();
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


checkStatus();
stage2question2_hideSecondary();
stage2question4_hideSecondary();


$('.checkout_stage2').hide();
$('.checkout_breadcrumb .step1 a').css('color', activeColor);

// Nav


$('#continue').click(function(){
  $('.checkout_stage1').hide();
  $('.checkout_stage2').fadeIn(200);
  $('#continue').hide();
  $('#checkout').fadeIn(200);
  $('.checkout_breadcrumb .step1 a').css('color', inactiveColor);
  $('.checkout_breadcrumb .step2 a').css('color', activeColor);
});


$('.checkout_breadcrumb .step1 a').click(function(){
  $('.checkout_stage1').fadeIn(200);
  $('.checkout_stage2').hide();
  $('#continue').fadeIn(200);
  $('#checkout').hide();
  $('.checkout_breadcrumb .step1 a').css('color', activeColor);
  $('.checkout_breadcrumb .step2 a').css('color', inactiveColor);
});

$('.checkout_breadcrumb .step2 a').click(function(){
  $('.checkout_stage1').hide();
  $('.checkout_stage2').fadeIn(200);
  $('#continue').hide();
  $('#checkout').fadeIn(200);
  $('.checkout_breadcrumb .step1 a').css('color', inactiveColor);
  $('.checkout_breadcrumb .step2 a').css('color', activeColor);
});


// Form Status

function enableCheckout(){
 $('#checkout').attr('disabled', false);
 $('#checkout').val('Proceed to Review & Payment →');
};

function disableCheckout(){
  $('#checkout').attr('disabled', true);
  $('#checkout').val("Please fill in all fields to proceed");
};

function checkStatus(){
  // console.log("stage2question2_answered", stage2question2_answered);
  // console.log("stage2question3_answered", stage2question3_answered);
  // console.log("stage2question4_answered", stage2question4_answered);
  console.log("prescriptionNeeded", prescriptionNeeded);

  if (prescriptionNeeded) {

    if (stage2question2_answered && stage2question3_answered && stage2question4_answered){
      enableCheckout();
      console.log("checkout: enabled");
    } else {
      disableCheckout();
      console.log("checkout: disabled");
    }


  } else {
    enableCheckout();
    console.log("checkout: enabled");
  }



};


function stage2question2_hideSecondary(){
  $('.prescription-doctor').hide();
  $('.prescription-upload').hide();
  $('.prescription-address').hide();
}

function stage2question4_hideSecondary(){
  $('.prescription-pd').hide();
}


// Buttons

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
  activeQuestion('.stage2question2', this);
  checkStatus();
});

$('.stage2question3 .radioWrap .radioLabel').click(function() {
  stage2question3_answered = true;
  activeQuestion('.stage2question3', this);
  checkStatus();
});

$('.stage2question4 .radioWrap .radioLabel').click(function() {
  stage2question4_answered = true;
  activeQuestion('.stage2question4', this);
  checkStatus();
});


// SHOW AND HIDE
// Section 2


$('.upload-a-picture').click(function() {
  stage2question2_hideSecondary();
  $('.prescription-upload').show();
  console.log("upload-a-picture");
});

$('.call-my-doctor').click(function() {
  stage2question2_hideSecondary();
  $('.prescription-doctor').show();
  console.log("call-my-doctor");
});

$('.send-later').click(function() {
  console.log("send-later");
  stage2question2_hideSecondary();
  $('.prescription-address').show();
});



// Section 3

$('.measure').click(function() {
  $('.prescription-pd').css('display', 'block');
});

$('.dont-measure').click(function() {
  $('.prescription-pd').css('display', 'none');
});





});
