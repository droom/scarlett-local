
$(document).ready(function(){

  // var getTitles = [];
  var prescriptionQTY = 0;
  var lensesQTY = 0;

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

  // Reset

  // getTitles.length = 0;
  // prescriptionQTY = 0;
  // lensesQTY = 0;

  // Get

  jQuery.getJSON('/cart.js', function(data) {

    $.each(data.items, function(index, element) {

      // Get Lenses

      if ( element.variant_id == 763367271 ){

        lensesQTY = element.quantity;

        // console.log("QTY of", element.handle, element.quantity);
        // console.log("lensesQTY", lensesQTY);

      } else {

        // console.log("This isn't a High-Index Lens");

      }

      // getTitles.push(element.title) // Grab titles

      if (element.title.indexOf("With ") >= 0) {
       
        // console.log("YO");

        // test++ 

        prescriptionQTY = element.quantity;

        // console.log("element.quantity", element.quantity)

      };  

    });

    console.log("total_price", data.total_price);

    //$("#priceFinal").text(data.total_price);

  });





  // for ( var i = 0, l = getTitles.length; i < l; i++ ) {

  //   if (getTitles[i].indexOf("With ") >= 0) {

  //     prescriptionQTY ++;

  //   } else {

  //   }

  // }






  // Respond

  console.log("prescriptionQTY", prescriptionQTY);
  console.log("lensesQTY", lensesQTY);

};



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