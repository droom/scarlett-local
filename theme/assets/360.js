$(document).ready(function() {

	var listItems = $('li.items');
	var listString = ($.trim(listItems[0].innerHTML));
	var cachebuster = 13;
	var position360 = listString.indexOf("360");
	var url1 = listString.slice(0, position360+4);
	var url2 = listString.slice(position360+6, (position360+30)-cachebuster);

	$('.spritespin').spritespin({

		source: SpriteSpin.sourceArray(url1+'{frame}'+url2, { frame: [1, listItems.length ], digits: 2 }),

		width: 160,
		height: 100,
		sense: -1,
		renderer: 'image'

	});

})

