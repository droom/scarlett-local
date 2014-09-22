$(document).ready(function(){

  var prescriptionQTY = 0;
  var lensesQTY = 0;
  var totalPrice = 0;
  var lensePrice = 3500;

  function initCallFunct(fToCall) {
  }

  function fCartEmpty(fToCall){
   fToCall = fToCall || function(){}

   jQuery.post('/cart/change.js', {
    quantity: 0,
    id: 763367271
  } ,  function(data) {

   console.log("success empty");
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


      if ( element.variant_id == 763367271 ){
        lensesQTY = element.quantity;
        lensePrice = element.price;
      }

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





// Add nominal charge HTO

(function addNominal() {
  var buyItemsPresc = $('.checkout_buy_prescription_item .checkout_cell1');
  var buyItemsFrame = $('.checkout_buy_frame_item .checkout_cell1');
  var tryItems = $('.checkout_try .checkout_cell1');
  var htoa = $('.home-try-on-authorisation');

   if((buyItemsPresc.length != 0 || buyItemsFrame.length != 0 || tryItems.length == 0 ) &&  htoa.length != 0) {
    console.log("no fee");
    jQuery.post('/cart/change.js', {
        quantity: 0,
        id: 829744291
    } , function(data) {
           console.log("success empty");
         },   "json" );
    console.log("yahtzee");
    ammendTotal();
   }

   else if((tryItems.length != 0 && htoa.length != 0)) {
    ammendTotal();
   }



  $('#checkout').click(function(){
      console.log("add fee");
      if (buyItemsFrame.length == 0  && buyItemsPresc.length == 0 && tryItems.length != 0  && htoa.length == 0) {
       jQuery.post('/cart/add.js', {
          quantity: 1,
          id: 829744291
        } , function (data) {
               console.log("success add");
            }, "json");
      }
  });

})();







function ammendTotal() {
  var finalPrice = parseInt( $('#priceFinal').text().substring(1), 10);
  $("#priceFinal").text(finalPrice -1);
  $("#priceFinal").currency();
}






});
