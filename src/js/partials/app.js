//Some JS
const App = (function () {
   "use strict";
   return {
      scrollToTarget: function (scrollSelector, speed) {
         const links = $(scrollSelector);
         links.click(function (e) {
            e.preventDefault();
            const _this = $(this);
            const href = _this.attr('href');

            if (href.length <= 1) {
               return;
            }
            const target = $(href);
            if (!target.length) {
               return;
            }
            const top = target.offset().top;
            $('html, body').animate({
               scrollTop: top
            }, speed);
         });
      },
      sliderReviewsInit: function () {
         $('.reviews__slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: "linear",
            prevArrow: '<div class="arr arr--left"><i class="fico fico-arrow"></i></div>',
            nextArrow: '<div class="arr arr--right"><i class="fico fico-arrow"></i></div>',
            autoplay: false,
            adaptiveHeight: true
         });
      },
      sliderInfectionInit: function () {
         $('.infection__content').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: "linear",
            prevArrow: '<div class="arr arr--left"><i class="fico fico-arrow"></i></div>',
            nextArrow: '<div class="arr arr--right"><i class="fico fico-arrow"></i></div>',
            autoplay: false,
            adaptiveHeight: true
         });
      },
      init: function () {
         App.scrollToTarget('.js-scroll', 700);
         App.sliderReviewsInit();
         App.sliderInfectionInit();
      },
   };
})();