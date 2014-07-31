  for ( var i = 0; i < checkout_try_remaining; i++ ) {
    var numberStamp = i + 1 + checkout_try_array;
    console.log( "generate cell " + i );
    $( "<div class=\"checkout_try empty\"><h5 id=\'test\'><strong>"+numberStamp+"</stroxng>. Please add another frame</h5></div>").appendTo( ".generate_empty_cells");
  }
