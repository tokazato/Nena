var swiper = new Swiper('.testiiii', {
    direction: 'vertical',
    mousewheel: true,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    }
});

var mySwiper = document.querySelector('.testiiii').swiper

// Now you can use all slider methods like

$('.page-1').click(function(){
    mySwiper.slideTo(0, 1000);
    $('.pagenation-box a').removeClass('active-page')
    $(this).addClass('active-page')
})
$('.page-2').click(function(){
    $('.pagenation-box a').removeClass('active-page')
    $(this).addClass('active-page')
    mySwiper.slideTo(1, 1000);
})
$('.page-3').click(function(){
    $('.pagenation-box a').removeClass('active-page')
    $(this).addClass('active-page')
    mySwiper.slideTo(2, 1000);
})
$('.page-4').click(function(){
    $('.pagenation-box a').removeClass('active-page')
    $(this).addClass('active-page')
    mySwiper.slideTo(3, 1000);
})

mySwiper.on('slideChangeTransitionStart', function () {
    if( $('#page1').hasClass('swiper-slide-active') ) {
        $('.pagenation-box a').removeClass('active-page')
        $('.page-1').addClass('active-page')
    }
    if( $('#page2').hasClass('swiper-slide-active') ) {
        $('.pagenation-box a').removeClass('active-page')
        $('.page-2').addClass('active-page')
    }
    if( $('#page3').hasClass('swiper-slide-active') ) {
        $('.pagenation-box a').removeClass('active-page')
        $('.page-3').addClass('active-page')
    }
    if( $('#page4').hasClass('swiper-slide-active') ) {
        $('.pagenation-box a').removeClass('active-page')
        $('.page-4').addClass('active-page')
    }
  });
