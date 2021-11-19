/*-----------------------------------------
===========================================
  CUSTOM SCRIPT FOR TERSUS TEMPLATE
===========================================
-----------------------------------------*/


/*!
 Menu Top Bar Slide In
*/

$(window).scroll(function() {
  if ($(this).scrollTop()> 60) {
  $('.menuSlideInScroll').slideDown();
  } else {
  $('.menuSlideInScroll').slideUp();
  }
});


/*!
 Counter
*/

jQuery(document).ready(function($) {
  if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
  $('.counter').counterUp({
  delay: 10,
  time: 1500,
  });
}
});


/*!
 Animated Hamburger Icon
*/

$(document).ready(function () {
  $('.menuIcon, .menuTopSlideButton').click(function () {
  $(".menuIcon-top").toggleClass("iconTop-click");
  $(".menuIcon-middle-a").toggleClass("iconMiddleA-click");
  $(".menuIcon-middle-b").toggleClass("iconMiddleB-click");
  $(".menuIcon-bottom").toggleClass("iconbottom-click");
  });
});

/*! Animate Icon On Scroll*/

$(window).scroll(function(){
  if ($(window).scrollTop() >= 10){
  $(".menuIcon-top").removeClass("iconTop-click");
  $(".menuIcon-middle-a").removeClass("iconMiddleA-click"); 
  $(".menuIcon-middle-b").removeClass("iconMiddleB-click");
  $(".menuIcon-bottom").removeClass("iconbottom-click");
  }
});


/*!
 Top Slide Menu
*/

$(document).ready(function () {
  $('.menuTopSlideNav-Btn').click(function () {
  $(".menuTopSlideNav").toggleClass("menuTopSlideNav-down");
  });
$('.menuTopSlideButton').click(function () {
  $(".menuTopSlideNav").removeClass("menuTopSlideNav-down");
  });
});


/*!
 Side Slide Menu
*/

$(document).ready(function () {
  $('.menuSideSlideNav-Btn').click(function () {
  $(".menuSideSlideNavRight,.menuSideSlideNavPhoneRight").toggleClass("menuSideSlideNav-to-left");
  $(".menuSideSlideNavLeft,.menuSideSlideNavPhoneLeft").toggleClass("menuSideSlideNav-to-right");
  });
  $('.menuSideSlideNav-Close, .menuSideSlideButton').click(function () {
  $(".menuSideSlideNavRight,.menuSideSlideNavPhoneRight").removeClass("menuSideSlideNav-to-left");
  $(".menuSideSlideNavLeft,.menuSideSlideNavPhoneLeft").removeClass("menuSideSlideNav-to-right");
  }); 
});


/*!
 Hide Slide Menu on Scroll
*/

$(window).scroll(function(){
  if ($(window).scrollTop() > 100){
  $(".menuTopSlideNav").removeClass("menuTopSlideNav-down");
  $(".menuSideSlideNavRight,.menuSideSlideNavPhoneRight").removeClass("menuSideSlideNav-to-left");
  $(".menuSideSlideNavLeft,.menuSideSlideNavPhoneLeft").removeClass("menuSideSlideNav-to-right");
  } 
});


/*!
WOW Animations
*/

$(document).ready(function () {

//Fade In Animations With Delay (8 Timing Delays for Each)
$('.wow-fadeIn,.wow-fadeInDelay200ms,.wow-fadeInDelay400ms,.wow-fadeInDelay600ms,.wow-fadeInDelay800ms,.wow-fadeInDelay1000ms,.wow-fadeInDelay1200ms,.wow-fadeInDelay1400ms,.wow-fadeInDelay1600ms').addClass('wow fadeIn');
$('.wow-fadeInLeft,.wow-fadeInLeftDelay200ms,.wow-fadeInLeftDelay400ms,.wow-fadeInLeftDelay600ms,.wow-fadeInLeftDelay800ms,.wow-fadeInLeftDelay1000ms,.wow-fadeInLeftDelay1200ms,.wow-fadeInLeftDelay1400ms,.wow-fadeInLeftDelay1600ms').addClass('wow fadeInLeft');
$('.wow-fadeInLeftBig,.wow-fadeInLeftBigDelay200ms,.wow-fadeInLeftBigDelay400ms,.wow-fadeInLeftBigDelay600ms,.wow-fadeInLeftBigDelay800ms,.wow-fadeInLeftBigDelay1000ms,.wow-fadeInLeftBigDelay1200ms,.wow-fadeInLeftBigDelay1400ms,.wow-fadeInLeftBigDelay1600ms').addClass('wow fadeInLeftBig');
$('.wow-fadeInRight,.wow-fadeInRightDelay200ms,.wow-fadeInRightDelay400ms,.wow-fadeInRightDelay600ms,.wow-fadeInRightDelay800ms,.wow-fadeInRightDelay1000ms,.wow-fadeInRightDelay1200ms,.wow-fadeInRightDelay1400ms,.wow-fadeInRightDelay1600ms').addClass('wow fadeInRight');
$('.wow-fadeInRightBig,.wow-fadeInRightBigDelay200ms,.wow-fadeInRightBigDelay400ms,.wow-fadeInRightBigDelay600ms,.wow-fadeInRightBigDelay800ms,.wow-fadeInRightBigDelay1000ms,.wow-fadeInRightBigDelay1200ms,.wow-fadeInRightBigDelay1400ms,.wow-fadeInRightBigDelay1600ms').addClass('wow fadeInRightBig');
$('.wow-fadeInUp,.wow-fadeInUpDelay200ms,.wow-fadeInUpDelay400ms,.wow-fadeInUpDelay600ms,.wow-fadeInUpDelay800ms,.wow-fadeInUpDelay1000ms,.wow-fadeInUpDelay1200ms,.wow-fadeInUpDelay1400ms,.wow-fadeInUpDelay1600ms').addClass('wow fadeInUp');
$('.wow-fadeInUpBig,.wow-fadeInUpBigDelay200ms,.wow-fadeInUpBigDelay400ms,.wow-fadeInUpBigDelay600ms,.wow-fadeInUpBigDelay800ms,.wow-fadeInUpBigDelay1000ms,.wow-fadeInUpBigDelay1200ms,.wow-fadeInUpBigDelay1400ms,.wow-fadeInUpBigDelay1600ms').addClass('wow fadeInUpBig');
$('.wow-fadeInDown,.wow-fadeInDownDelay200ms,.wow-fadeInDownDelay400ms,.wow-fadeInDownDelay600ms,.wow-fadeInDownDelay800ms,.wow-fadeInDownDelay1000ms,.wow-fadeInDownDelay1200ms,.wow-fadeInDownDelay1400ms,.wow-fadeInDownDelay1600ms').addClass('wow fadeInDown');
$('.wow-fadeInDownBig,.wow-fadeInDownBigDelay200ms,.wow-fadeInDownBigDelay400ms,.wow-fadeInDownBigDelay600ms,.wow-fadeInDownBigDelay800ms,.wow-fadeInDownBigDelay1000ms,.wow-fadeInDownBigDelay1200ms,.wow-fadeInDownBigDelay1400ms,.wow-fadeInDownBigDelay1600ms').addClass('wow fadeInDownBig');

$('.wow-fadeInDelay200ms,.wow-fadeInLeftDelay200ms,wow-fadeInLeftBigDelay200ms,.wow-fadeInRightDelay200ms,.wow-fadeInRightBigDelay200ms,.wow-fadeInUpDelay200ms,.wow-fadeInUpBigDelay200ms,.wow-fadeInDownDelay200ms,.wow-fadeInDownBigDelay200ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'200ms'});
$('.wow-fadeInDelay400ms,.wow-fadeInLeftDelay400ms,wow-fadeInLeftBigDelay400ms,.wow-fadeInRightDelay400ms,.wow-fadeInRightBigDelay400ms,.wow-fadeInUpDelay400ms,.wow-fadeInUpBigDelay400ms,.wow-fadeInDownDelay400ms,.wow-fadeInDownBigDelay400ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'400ms'});
$('.wow-fadeInDelay600ms,.wow-fadeInLeftDelay600ms,wow-fadeInLeftBigDelay600ms,.wow-fadeInRightDelay600ms,.wow-fadeInRightBigDelay600ms,.wow-fadeInUpDelay600ms,.wow-fadeInUpBigDelay600ms,.wow-fadeInDownDelay600ms,.wow-fadeInDownBigDelay600ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'600ms'});
$('.wow-fadeInDelay800ms,.wow-fadeInLeftDelay800ms,wow-fadeInLeftBigDelay800ms,.wow-fadeInRightDelay800ms,.wow-fadeInRightBigDelay800ms,.wow-fadeInUpDelay800ms,.wow-fadeInUpBigDelay800ms,.wow-fadeInDownDelay800ms,.wow-fadeInDownBigDelay800ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'800ms'});
$('.wow-fadeInDelay1000ms,.wow-fadeInLeftDelay1000ms,wow-fadeInLeftBigDelay1000ms,.wow-fadeInRightDelay1000ms,.wow-fadeInRightBigDelay1000ms,.wow-fadeInUpDelay1000ms,.wow-fadeInUpBigDelay1000ms,.wow-fadeInDownDelay1000ms,.wow-fadeInDownBigDelay1000ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1000ms'});
$('.wow-fadeInDelay1200ms,.wow-fadeInLeftDelay1200ms,wow-fadeInLeftBigDelay1200ms,.wow-fadeInRightDelay1200ms,.wow-fadeInRightBigDelay1200ms,.wow-fadeInUpDelay1200ms,.wow-fadeInUpBigDelay1200ms,.wow-fadeInDownDelay1200ms,.wow-fadeInDownBigDelay1200ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1200ms'});
$('.wow-fadeInDelay1400ms,.wow-fadeInLeftDelay1400ms,wow-fadeInLeftBigDelay1400ms,.wow-fadeInRightDelay1400ms,.wow-fadeInRightBigDelay1400ms,.wow-fadeInUpDelay1400ms,.wow-fadeInUpBigDelay1400ms,.wow-fadeInDownDelay1400ms,.wow-fadeInDownBigDelay1400ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1400ms'});
$('.wow-fadeInDelay1600ms,.wow-fadeInLeftDelay1600ms,wow-fadeInLeftBigDelay1600ms,.wow-fadeInRightDelay1600ms,.wow-fadeInRightBigDelay1600ms,.wow-fadeInUpDelay1600ms,.wow-fadeInUpBigDelay1600ms,.wow-fadeInDownDelay1600ms,.wow-fadeInDownBigDelay1600ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1600ms'});

//Slide In Animations With Delay (8 Timing Delays for Each)
$('.wow-slideInLeft,.wow-slideInLeftDelay200ms,.wow-slideInLeftDelay400ms,.wow-slideInLeftDelay600ms,.wow-slideInLeftDelay800ms,.wow-slideInLeftDelay1000ms,.wow-slideInLeftDelay1200ms,.wow-slideInLeftDelay1400ms,.wow-slideInLeftDelay1600ms').addClass('wow slideInLeft');
$('.wow-slideInRight,.wow-slideInRightDelay200ms,.wow-slideInRightDelay400ms,.wow-slideInRightDelay600ms,.wow-slideInRightDelay800ms,.wow-slideInRightDelay1000ms,.wow-slideInRightDelay1200ms,.wow-slideInRightDelay1400ms,.wow-slideInRightDelay1600ms').addClass('wow slideInRight');
$('.wow-slideInUp,.wow-slideInUpDelay200ms,.wow-slideInUpDelay400ms,.wow-slideInUpDelay600ms,.wow-slideInUpDelay800ms,.wow-slideInUpDelay1000ms,.wow-slideInUpDelay1200ms,.wow-slideInUpDelay1400ms,.wow-slideInUpDelay1600ms').addClass('wow slideInUp');
$('.wow-slideInDown,.wow-slideInDownDelay200ms,.wow-slideInDownDelay400ms,.wow-slideInDownDelay600ms,.wow-slideInDownDelay800ms,.wow-slideInDownDelay1000ms,.wow-slideInDownDelay1200ms,.wow-slideInDownDelay1400ms,.wow-slideInDownDelay1600ms').addClass('wow slideInDown');

$('.wow-slideInLeftDelay200ms,.wow-slideInRightDelay200ms,.wow-slideInUpDelay200ms,.wow-slideInDownDelay200ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'200ms'});
$('.wow-slideInLeftDelay400ms,.wow-slideInRightDelay400ms,.wow-slideInUpDelay400ms,.wow-slideInDownDelay400ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'400ms'});
$('.wow-slideInLeftDelay600ms,.wow-slideInRightDelay600ms,.wow-slideInUpDelay600ms,.wow-slideInDownDelay600ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'600ms'});
$('.wow-slideInLeftDelay800ms,.wow-slideInRightDelay800ms,.wow-slideInUpDelay800ms,.wow-slideInDownDelay800ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'800ms'});
$('.wow-slideInLeftDelay1000ms,.wow-slideInRightDelay1000ms,.wow-slideInUpDelay1000ms,.wow-slideInDownDelay1000ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1000ms'});
$('.wow-slideInLeftDelay1200ms,.wow-slideInRightDelay1200ms,.wow-slideInUpDelay1200ms,.wow-slideInDownDelay1200ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1200ms'});
$('.wow-slideInLeftDelay1400ms,.wow-slideInRightDelay1400ms,.wow-slideInUpDelay1400ms,.wow-slideInDownDelay1400ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1400ms'});
$('.wow-slideInLeftDelay1600ms,.wow-slideInRightDelay1600ms,.wow-slideInUpDelay1600ms,.wow-slideInDownDelay1600ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1600ms'});

//Bounce In Animations With Delay (8 Timing Delays for Each)
$('.wow-bounceInLeft,.wow-bounceInLeftDelay200ms,.wow-bounceInLeftDelay400ms,.wow-bounceInLeftDelay600ms,.wow-bounceInLeftDelay800ms,.wow-bounceInLeftDelay1000ms,.wow-bounceInLeftDelay1200ms,.wow-bounceInLeftDelay1400ms,.wow-bounceInLeftDelay1600ms').addClass('wow bounceInLeft');
$('.wow-bounceInRight,.wow-bounceInRightDelay200ms,.wow-bounceInRightDelay400ms,.wow-bounceInRightDelay600ms,.wow-bounceInRightDelay800ms,.wow-bounceInRightDelay1000ms,.wow-bounceInRightDelay1200ms,.wow-bounceInRightDelay1400ms,.wow-bounceInRightDelay1600ms').addClass('wow bounceInRight');
$('.wow-bounceInUp,.wow-bounceInUpDelay200ms,.wow-bounceInUpDelay400ms,.wow-bounceInUpDelay600ms,.wow-bounceInUpDelay800ms,.wow-bounceInUpDelay1000ms,.wow-bounceInUpDelay1200ms,.wow-bounceInUpDelay1400ms,.wow-bounceInUpDelay1600ms').addClass('wow bounceInUp');
$('.wow-bounceInDown,.wow-bounceInDownDelay200ms,.wow-bounceInDownDelay400ms,.wow-bounceInDownDelay600ms,.wow-bounceInDownDelay800ms,.wow-bounceInDownDelay1000ms,.wow-bounceInDownDelay1200ms,.wow-bounceInDownDelay1400ms,.wow-bounceInDownDelay1600ms').addClass('wow bounceInDown');

$('.wow-bounceInLeftDelay200ms,.wow-bounceInRightDelay200ms,.wow-bounceInUpDelay200ms,.wow-bounceInDownDelay200ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'200ms'});
$('.wow-bounceInLeftDelay400ms,.wow-bounceInRightDelay400ms,.wow-bounceInUpDelay400ms,.wow-bounceInDownDelay400ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'400ms'});
$('.wow-bounceInLeftDelay600ms,.wow-bounceInRightDelay600ms,.wow-bounceInUpDelay600ms,.wow-bounceInDownDelay600ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'600ms'});
$('.wow-bounceInLeftDelay800ms,.wow-bounceInRightDelay800ms,.wow-bounceInUpDelay800ms,.wow-bounceInDownDelay800ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'800ms'});
$('.wow-bounceInLeftDelay1000ms,.wow-bounceInRightDelay1000ms,.wow-bounceInUpDelay1000ms,.wow-bounceInDownDelay1000ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1000ms'});
$('.wow-bounceInLeftDelay1200ms,.wow-bounceInRightDelay1200ms,.wow-bounceInUpDelay1200ms,.wow-bounceInDownDelay1200ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1200ms'});
$('.wow-bounceInLeftDelay1400ms,.wow-bounceInRightDelay1400ms,.wow-bounceInUpDelay1400ms,.wow-bounceInDownDelay1400ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1400ms'});
$('.wow-bounceInLeftDelay1600ms,.wow-bounceInRightDelay1600ms,.wow-bounceInUpDelay1600ms,.wow-bounceInDownDelay1600ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1600ms'});

//Zoom In Animations With Delay (8 Timing Delays for Each)
$('.wow-zoomIn,.wow-zoomInDelay200ms,.wow-zoomInDelay400ms,.wow-zoomInDelay600ms,.wow-zoomInDelay800ms,.wow-zoomInDelay1000ms,.wow-zoomInDelay1200ms,.wow-zoomInDelay1400ms,.wow-zoomInDelay1600ms').addClass('wow zoomIn');
$('.wow-zoomInLeft,.wow-zoomInLeftDelay200ms,.wow-zoomInLeftDelay400ms,.wow-zoomInLeftDelay600ms,.wow-zoomInLeftDelay800ms,.wow-zoomInLeftDelay1000ms,.wow-zoomInLeftDelay1200ms,.wow-zoomInLeftDelay1400ms,.wow-zoomInLeftDelay1600ms').addClass('wow zoomInLeft');
$('.wow-zoomInRight,.wow-zoomInRightDelay200ms,.wow-zoomInRightDelay400ms,.wow-zoomInRightDelay600ms,.wow-zoomInRightDelay800ms,.wow-zoomInRightDelay1000ms,.wow-zoomInRightDelay1200ms,.wow-zoomInRightDelay1400ms,.wow-zoomInRightDelay1600ms').addClass('wow zoomInRight');

$('.wow-zoomInDelay200ms,.wow-zoomInLeftDelay200ms,.wow-zoomInRightDelay200ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'200ms'});
$('.wow-zoomInDelay400ms,.wow-zoomInLeftDelay400ms,.wow-zoomInRightDelay400ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'400ms'});
$('.wow-zoomInDelay600ms,.wow-zoomInLeftDelay600ms,.wow-zoomInRightDelay600ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'600ms'});
$('.wow-zoomInDelay800ms,.wow-zoomInLeftDelay800ms,.wow-zoomInRightDelay800ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'800ms'});
$('.wow-zoomInDelay1000ms,.wow-zoomInLeftDelay1000ms,.wow-zoomInRightDelay1000ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1000ms'});
$('.wow-zoomInDelay1200ms,.wow-zoomInLeftDelay1200ms,.wow-zoomInRightDelay1200ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1200ms'});
$('.wow-zoomInDelay1400ms,.wow-zoomInLeftDelay1400ms,.wow-zoomInRightDelay1400ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1400ms'});
$('.wow-zoomInDelay1600ms,.wow-zoomInLeftDelay1600ms,.wow-zoomInRightDelay1600ms').attr({'data-wow-duration':'1s', 'data-wow-delay':'1600ms'});

//Misc Animations
$('.wow-lightSpeedIn').addClass('wow lightSpeedIn');
$('.wow-rollIn').addClass('wow rollIn');
$('.wow-rotateIn').addClass('wow rotateIn');

wow = new WOW(
  {
  boxClass:     'wow',
  animateClass: 'animated',
  offset:       0,
  mobile:       false,
  live:         true
  }
  )
  wow.init();
});