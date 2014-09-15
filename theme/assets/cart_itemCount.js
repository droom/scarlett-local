$(document).ready(function(){



 console.log("yahzee");

  var itemCount = parseInt($('.itemCount').html(),10) - 1;
  console.log("itemCount", itemCount);
 $('.itemCount').text(itemCount);

 if (itemCount === 1) {
  $(".itemPlural").text("item");
 }

});
