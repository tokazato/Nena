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
        $('header').toggleClass('downIndex')
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

    $('.dropdown-li').hover(function(){
        $('.dropdown-li').toggleClass('dropdown-effect')
        $(this).toggleClass('dropdown-effect-active')

    })

    // open and hide popup slider 
    $('.honey-swiper-open-img, .honey__swiper__video').click(function(){
      $('.swiper-popup').addClass('swiper-popup-active')
    })
    $('.popup-background').click(function() {
      $('.swiper-popup').removeClass('swiper-popup-active')
    })

    // popup go active img 
    let honeyImgs = $('.honey-swiper-open-img');
      $.each(honeyImgs, function(index, element){
        $(element).on('click', function(){
          popupGalleryTop.slideTo(index, 0)
        }) 
      })

      // popup go active img 
    let honeyVideo = $('.honey__swiper__video');
    $.each(honeyVideo, function(index, element){
      $(element).on('click', function(){
        popupGalleryTop.slideTo(index, 0)
      }) 
    })
    

    // honey slider img init start 
    var honeyImgSwiper = new Swiper('.honey-img-swiper-container', {
        slidesPerView: 5,
        spaceBetween: 20,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
            nextEl: '.honey-img-next',
            prevEl: '.honey-img-prev',
        },
        breakpoints: {
            320: {
              slidesPerView: 2.6,
            },
            650: {
              slidesPerView: 2.6,
            },
            950: {
                slidesPerView: 3,
              },
            1224: {
              slidesPerView: 4,
            },
          }
      });
     // honey slider img init end 
      

     // honey slider video init start 
    var swiper = new Swiper('.honey-video-swiper-container', {
        slidesPerView: 5,
        spaceBetween: 20,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
            nextEl: '.honey-video-next',
            prevEl: '.honey-video-prev',
        },
        breakpoints: {
            320: {
              slidesPerView: 2.6,
            },
            650: {
              slidesPerView: 2.6,
            },
            950: {
                slidesPerView: 3,
              },
            1224: {
              slidesPerView: 4,
            },
          }
      });
     // honey slider video init end 

    //  swiper popup init start 
    var galleryThumbs = new Swiper('.popup-swiper-gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        320: {
          slidesPerView: 2.6,
        },
        650: {
          slidesPerView: 2.6,
        },
        950: {
            slidesPerView: 3,
          },
        1224: {
          slidesPerView: 4,
        },
      }
    });
    var popupGalleryTop = new Swiper('.popup-swiper-gallery-top', {
      spaceBetween: 10,
      pagination: {
        el: '.popup-swiper-pagenation',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.popup-swiper-next',
        prevEl: '.popup-swiper-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    //  swiper popup init end 
    
});