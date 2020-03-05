$(document).ready(function() {

    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").fadeOut();
        }else{
           $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });

    $('.burger-main-box').click(function() {
        $('.header-nav').toggleClass('open-nav');
        $('.close-burger').toggleClass('x-toggle');
        $('.open-burger').toggleClass('close-burger-bar')
    })

    $('.description-btn').click(function() {
        $('.description--text-box-mobile').slideToggle()
        $('.description-btn').toggleClass('close-description-box')
        $('.descrip-plus').toggleClass('descrip-plus-hide')
        $('.descript-back').toggleClass('active-descrip-back')
        // $('.descript-back').slideToggle()
        $('body').toggleClass('scroll-none')
    })

    $('.go-to-big-img').click(function(){
        let currentSrc = $(this).attr('src')
        $('.main-big-img').fadeOut('')
        setTimeout(() => {
            $('.main-big-img').attr('src', currentSrc).delay(100).fadeIn('slow')
        }, 400);
    })

    $('.main-swiper-select-content-box').click(function(){
        $('.main-swiper-select-content-box').removeClass('go-to-big-img-active')
        $(this).addClass('go-to-big-img-active')
    })

    $('.go-right').click(function(){

        $('.slider-text-box, .slider-title').css({
            opacity: 0,
            transition: '0s ease',
        }); 

        $('.main-big-img, .main-swiper-select-product-box').css({
            opacity: 0,
            transition: '0.67s ease', 
        }) 

        setTimeout(() => {
            $('.slider-text-box, .slider-title').delay(200).css({
                opacity: 1,
                transition: '0.6s ease',
            })
        }, 1500);

        setTimeout(() => {
            $('.main-big-img, .main-swiper-select-product-box ').css({
                opacity: 1,
                // transition: '0.3s ease',
            })
        }, 600);
        
    })
    
    
});