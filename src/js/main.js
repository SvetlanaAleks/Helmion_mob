//=require ../../node_modules/object-fit-images/dist/ofi.min.js
//=require ../../node_modules/slick-carousel/slick/slick.min.js
//=require partials/app.js

$(document).ready(function () {
   App.init();
});

$('.fix__btn').click(function (e) {
   var $message1 = $('.menu');

   if ($message1.css('display') != 'block') {
      $message1.show();
      var firstClick = true;
      $(document).bind('click.myEvent', function (e) {
         if (!firstClick && $(e.target).closest('.menu').length == 0) {
            $message1.hide();
            $(document).unbind('click.myEvent');
         }
         firstClick = false;
      });
   }

   e.preventDefault();
});