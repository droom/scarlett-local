    $(document).ready(function(){


        console.log("product_spriteSpin called")

        var listItems = $('.spin360');
        var listItemsLength = listItems.length;
        var listString = ($.trim(listItems[0].innerHTML));
        var position360 = listString.indexOf("360");

        var url_part1 = listString.slice(0, position360+4);
        var url_part2 = listString.slice(position360+4, position360+6);
        var url_part3 = listString.slice(position360+6, listString.length);



        console.log(listItems);
        console.log(listItemsLength);
        console.log(listString);
        console.log(position360);
        console.log(url_part1);
        console.log(url_part2);
        console.log(url_part3);



        $('.spritespin360').spritespin({
          // source: SpriteSpin.sourceArray(url_part1+'{frame}'+url_part3, { frame: [01,listItemsLength], digits: 2 }),
          // width: 553,
          // height: 315,
          // sense: -1,
          // renderer: 'image'
      });




    });