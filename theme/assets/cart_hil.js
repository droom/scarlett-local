
$(document).ready(function(){

  // var getTitles = [];
  var prescriptionQTY = 0;
  var lensesQTY = 0;
  var totalPrice = 0;

  // var test = 0;

 //  function fCartEmpty(){
 //   jQuery.post('/cart/change.js', {
 //    quantity: 0,
 //    id: 763367271,
 //  }).success();
 // };


 function fCartAdd(){
   jQuery.post('/cart/add.js', {
    quantity: 5,
    id: 763367271,
  }).success();
 };





 function fUpdateCart(){

  jQuery.getJSON('/cart.js', function(data) {

    prescriptionQTY = 0;

    $.each(data.items, function(index, element) {

      // Get Lenses

      if ( element.variant_id == 763367271 ){
        lensesQTY = element.quantity;
      }

      if (element.title.indexOf("With ") >= 0) {

        // console.log("element.title", element.title)
        // console.log("element.quantity", element.quantity)

        prescriptionQTY += element.quantity;
        
        // prescriptionQTY = element.quantity;



      }; 

    });

    //console.log("total_price", data.total_price);
    totalPrice = data.total_price;


  });




  // Respond

  console.log("prescriptionQTY", prescriptionQTY);
  console.log("lensesQTY", lensesQTY);
  console.log("totalPrice", totalPrice);


};



fUpdateCart();


$("#add_hil").click(function(){
  fUpdateCart();
});

$("#remove_hil").click(function(){
  fUpdateCart();
});

$("#manual_add").click(function(){
  fCartAdd();
});




});