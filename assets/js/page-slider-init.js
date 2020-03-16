var swiper = new Swiper('.page-slider-swiper-container', {
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

var mySwiper = document.querySelector('.page-slider-swiper-container').swiper

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
        $('body').css('background', '#fff')
        $('.pagenation-box a').removeClass('active-page')
        $('.page-1').addClass('active-page')
        $('.ball-1').css({
            left: 'calc(50% - 340px)',
            top: '70px',
            height: '180px',
            width: '180px',
            transition: '0.9s ease',
        })
        $('.ball-2').css({
            right: '20vmin',
            top: '161px',
            height: '120px',
            width: '120px',
            transition: '0.9s ease',
        })
        $('.ball-3').css({
            left: '15vmin',
            top: '65vh',
            height: '120px',
            width: '120px',
            transition: '0.9s ease',
        })
        $('.ball-4').css({
            right: '15vmin',
            top: '70vh',
            height: '90px',
            width: '90px',
            transition: '0.9s ease',
        })
    }
    if( $('#page2').hasClass('swiper-slide-active') ) {
        $('body').css('background', '#fffeef')
        $('.pagenation-box a').removeClass('active-page')
        $('.page-2').addClass('active-page')
        $('  .popular-swiper-wraper, .popular-swiper-description-box').addClass('slide-up-class')  
        $('.ball-1').css({
            left: 'calc(50% - 475px)',
            top: '160px',
            height: '200px',
            width: '200px',
            transition: '0.9s ease',
        })
        $('.ball-2').css({
            right: '18vmin',
            top: '151px',
            height: '100px',
            width: '100px',
            transition: '0.9s ease',
        })
        $('.ball-3').css({
            left: '25vmin',
            top: '65vh',
            height: '110px',
            width: '110px',
            transition: '0.9s ease',
        })
        $('.ball-4').css({
            right: '10vmin',
            top: '75vh',
            height: '120px',
            width: '120px',
            transition: '0.9s ease',
        })
    }
    if( $('#page3').hasClass('swiper-slide-active') ) {
        $('body').css('background', '#FCF5F7')
        $('.pagenation-box a').removeClass('active-page')
        $('.page-3').addClass('active-page')
        $('.about-as-slider').addClass('slide-up-class')
        $('.about-as-description-box').addClass('slide-from-left')
        // $('.video').addClass('slide-from-right') 
        // $('.about-as-content-box').addClass('slide-up-class')
        $('.ball-1').css({
            left: 'calc(50% - 160px)',
            top: '100px',
            height: '190px',
            width: '190px',
            transition: '0.9s ease',
        })
        $('.ball-2').css({
            right: '15vmin',
            top: '151px',
            height: '80px',
            width: '80px',
            transition: '0.9s ease',
        })
        $('.ball-3').css({
            left: '15vmin',
            top: '65vh',
            height: '110px',
            width: '110px',
            transition: '0.9s ease',
        })
        $('.ball-4').css({
            right: '10vmin',
            top: '52vh',
            height: '220px',
            width: '220px',
            transition: '0.9s ease',
        })
    }
    if( $('#page4').hasClass('swiper-slide-active') ) {
        $('body').css('background', '#EFF6FF')
        $('.pagenation-box a').removeClass('active-page')
        $('.page-4').addClass('active-page')
        $('.fb-box').addClass('slide-from-left')
        $('.insta-box').addClass('slide-from-right') 
        $('.smart-web-box').addClass('slide-up-class')
        $('.ball-1').css({
            left: 'calc(50% - 160px)',
            top: '100px',
            height: '90px',
            width: '90px',
            transition: '0.9s ease',
        })
        $('.ball-2').css({
            right: '40%',
            top: '300px',
            height: '60px',
            width: '60px',
            transition: '0.9s ease',
        })
        $('.ball-3').css({
            left: '15vmin',
            top: '65vh',
            height: '250px',
            width: '250px',
            transition: '0.9s ease',
        })
        $('.ball-4').css({
            right: '25vmin',
            top: '70vh',
            height: '170px',
            width: '170px',
            transition: '0.9s ease',
        })
    }
  });


