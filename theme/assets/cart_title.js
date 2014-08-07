    $(document).ready(function(){

    	var navCartItemHTO = $('.navCart-item-hto');
    	var navCartItemAcc = $('.navCart-item-acc');
    	var navCartItemBuy = $('.navCart-item-buy');


    	// var navCartTitleHTO = $('.navCart-title-hto');
    	// var navCartTitleAcc = $('.navCart-title-acc');
    	// var navCartTitleBuy = $('.navCart-title-buy');



    	console.log("navCartItemHTO", navCartItemHTO.length);
    	// console.log("navCartTitleHTO", navCartTitleHTO);
    	console.log("navCartItemAcc", navCartItemAcc.length);
    	// console.log("navCartTitleAcc", navCartTitleAcc);
    	console.log("navCartItemBuy", navCartItemBuy.length);
    	// console.log("navCartTitleBuy", navCartTitleBuy);


    	if (navCartItemHTO.length == 0) {
    		$('.navCart-title-hto').hide();
    	}

    	if (navCartItemAcc.length == 0) {
    		$('.navCart-title-acc').hide();
    	}

    	if (navCartItemBuy.length == 0) {
    		$('.navCart-title-buy').hide();
    	}

    });