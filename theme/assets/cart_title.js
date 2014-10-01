    $(document).ready(function(){

    	var navCartItemHTO = $('.navCart-item-hto');
    	var navCartItemAcc = $('.navCart-item-acc');
    	var navCartItemBuy = $('.navCart-item-buy');




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