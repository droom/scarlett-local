
$(document).ready(function(){

  // var getTitles = [];
  var prescriptionQTY = 0;
  var lensesQTY = 0;
  var totalPrice = 0;
  var lensePrice = 3500;

  // var test = 0;


  function initCallFunct(fToCall) {

  }

  function fCartEmpty(fToCall){
   fToCall = fToCall || function(){}

   jQuery.post('/cart/change.js', {
    quantity: 0,
    id: 763367271
  } ,  function(data) {

   console.log("success empty");
   //fCartAdd();
   fToCall();

 },   "json" );
 };


 function fCartAdd(fToCall){
   fToCall = fToCall || function(){}
   jQuery.post('/cart/add.js', {
    quantity: prescriptionQTY,
    id: 763367271
  } , function (data) {

    console.log("success add");
    console.log(fToCall);
    fToCall();

  }, "json");
 }


 function fPushPrice(){
  console.log("Batman!");
  console.log("Change totalPrice to " + totalPrice);
  $("#priceFinal").text(totalPrice / 100);
  $("#priceFinal").currency();
}

function fUpdateCart(fToCall){
  fToCall = fToCall || function(){}
  jQuery.getJSON('/cart.js', function(data) {
    console.log(data);

    prescriptionQTY = 0;

    $.each(data.items, function(index, element) {

      // Get Lenses

      if ( element.variant_id == 763367271 ){
        lensesQTY = element.quantity;
        lensePrice = element.price;
      }

      // Get Frames with Prescription

      if (element.title.indexOf("With ") >= 0) {
        prescriptionQTY += element.quantity;
      }; 

    });

    totalPrice = data.total_price;
    fToCall();

    console.log("totalPrice", totalPrice);
    console.log("prescriptionQTY", prescriptionQTY);
    console.log("lensesQTY", lensesQTY);
    console.log("totalPrice", totalPrice); 


  });



  // Report
};


function fRemoveFromCart() {
  var update_n_print = function() {
    fUpdateCart(fPushPrice);
  }
  fCartEmpty(update_n_print);
}


function fAddToCart () {
 var update_n_print = function() { fUpdateCart(fPushPrice) }
 var add_n_print = function() { fCartAdd(update_n_print) }
 var empty_n_add = function() { fCartEmpty(add_n_print) }
 fUpdateCart(empty_n_add); 
}


$("label[for='yes-1']").click(function(e){
  console.log("yes");
  e.preventDefault();
  fAddToCart();
});

$("label[for='no-2']").click(function(e){
  console.log("no");
  e.preventDefault();
  fUpdateCart(fRemoveFromCart);
});



/*
$("#HIL-ADD").click(function(e){
  e.preventDefault();
  fAddToCart();
});

$("#HIL-REMOVE").click(function(e){
  e.preventDefault();
  fUpdateCart(fRemoveFromCart);
});
*/




});