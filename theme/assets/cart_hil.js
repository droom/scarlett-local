
$(document).ready(function(){

  var checkout_price = $("#priceFinal").text();
  var checkout_price_sliced = checkout_price.slice(1, checkout_price.length);
  var checkout_price_raw = parseInt(checkout_price_sliced);
  var high_index_set = false;
  var high_index_price = 35;
  var checkout_hi_qty = parseInt($(".checkout_acc .hi_qty").text());
  var checkout_buy_qty = $(".checkout_buy .buy_qty").text();
  var checkout_buy_qty_total = 0;
  

  // Constructor
  if(isNaN(checkout_hi_qty)){
    checkout_hi_qty = 0;
  }

  if (checkout_hi_qty > 0){
    if (checkout_buy_qty_total == checkout_hi_qty){
      console.log ("high index qty matches the qty of specs. stop.");
    } else {
      console.log ("high index qty DOES NOT match the qty of specs.");
      hi_emptycart();      
      hi_pushtocart();
      hi_updateprice();
    }
  } else {
    console.log ("high index qty matches the qty of specs. stop.");
  }


  // Functions
  function getBuyQuantity(){
    for ( var i = 0; i < checkout_buy_qty.length; i++ ) {
      console.log(checkout_buy_qty[i]);
      console.log(parseInt(checkout_buy_qty[i]));
      checkout_buy_qty_total += parseInt(checkout_buy_qty[i]);
    }
  }

  function hi_updateprice(){
    console.log ("high_index_price", high_index_price);
    console.log ("checkout_hi_qty", checkout_hi_qty);
    console.log ("checkout_price_raw", checkout_price_raw);
    $("#priceFinal").text((checkout_hi_qty * high_index_price)+checkout_price_raw);
    $('#priceFinal').currency();
  }

 // AJAX
 function hi_emptycart(){
   jQuery.post('/cart/change.js', {
    quantity: 0,
    id: 763367271,
  }).success(console.log("hi_emptycart success"));
 };

 function hi_pushtocart(){
   jQuery.post('/cart/add.js', {
    quantity: checkout_buy_qty_total,
    id: 763367271,
  }).success(hi_updateprice());
 };




// Buttons
$("#add_hil").click(function(){
  if (high_index_set){
  } else {
    hi_pushtocart();
    high_index_set = true;
  }
});


$("#remove_hil").click(function(){
 hi_emptycart();
 high_index_set = false;
});




});