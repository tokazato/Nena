var galleryThumbs = new Swiper('.main-swiper-bottom-box', {
    spaceBetween: 10,
    slidesPerView: 11,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // centerInsufficientSlides: true,
    // slideToClickedSlide: true,
    // navigation: {
    //   nextEl: '.go-right',
    //   prevEl: '.go-left',
    // },
    // centeredSlides: true,
    
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      750: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1000: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
    }

  });
  var galleryTop = new Swiper('.main-swiper-top-box', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs,
    },
    navigation: {
      nextEl: '.go-right',
      prevEl: '.go-left',
    },
    speed: 1500,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    }
  });


  var mySwiper1 = document.querySelector('.main-swiper-top-box').swiper
  

  mySwiper1.on('slideChange', function () {

    
    // .removeClass('go-to-big-img-active') 

        $('.slider-title-box , .slider-text-box ').css({
          opacity: '0',
          transition: '0s ease',
        }); 

      setTimeout(() => {
        $(' .slider-title-box , .slider-text-box ').delay(200).css({
            opacity: '1',
            transition: '0.6s ease',
        })
      }, 1500);


      $('.main-big-img, .main-swiper-select-product-box').css({
          opacity: 0,
          transition: '0.67s ease', 
      }) 

      setTimeout(() => {
          $('.main-big-img, .main-swiper-select-product-box ').css({
              opacity: 1,
          })
      }, 600);

  });

  $('.main-swiper-bottom-img-box .swiper-slide-thumb-active').css('bottom', '35px')
  $('.main-swiper-bottom-img-box .swiper-slide-thumb-active').next().css('bottom', '10px')
  $('.main-swiper-bottom-img-box .swiper-slide-thumb-active').prev().css('bottom', '10px')
  $('.main-swiper-bottom-img-box .swiper-slide-thumb-active').css('pointer-events', 'none')


  $(".description-text-mobile").text( $(".main .swiper-slide-active .main-swiper-description-text").text() )

  $('.main-swiper-top-box .swiper-slide-active  .main-swiper-select-content-box').last().addClass('go-to-big-img-active')
  $('.main .swiper-slide-active .main-big-img').attr('src',  $('.main .swiper-slide-active .go-to-big-img').last().attr('src') )

  mySwiper1.on('slideChangeTransitionStart', function () {

    $('.main-swiper-bottom-img-box .main-swiper-thumbs-box').css('pointer-events', 'initial')
    $('.main-swiper-bottom-img-box .swiper-slide-thumb-active').css('pointer-events', 'none')

    $('.main-swiper-bottom-img-box .main-swiper-thumbs-box').css('bottom', '0')
    $('.main-swiper-bottom-img-box .swiper-slide-thumb-active').css('bottom', '35px')
    $('.main-swiper-bottom-img-box .swiper-slide-thumb-active').next().css('bottom', '10px')
    $('.main-swiper-bottom-img-box .swiper-slide-thumb-active').prev().css('bottom', '10px')

    if( $('.main .swiper-slide-active .go-to-big-img').last().hasClass('bottle-1000') ) {
      setTimeout(() => {
        $('.main-big-img').css('height', '100%')
      }, 300)
    }
    if( $('.main .swiper-slide-active .go-to-big-img').last().hasClass('bottle-500') ) {
      setTimeout(() => {
        $('.main-big-img').css('height', '75%')
      }, 300)
    }
    if( $('.main .swiper-slide-active .go-to-big-img').last().hasClass('bottle-300') ) {
      setTimeout(() => {
        $('.main-big-img').css('height', '60%')
      }, 300)
    }

    $('.main-swiper-top-box .swiper-slide-active  .main-swiper-select-content-box').removeClass('go-to-big-img-active')
    $('.main-swiper-top-box .swiper-slide-active  .main-swiper-select-content-box').last().addClass('go-to-big-img-active')

    $(".description-text-mobile").text( $(".main .swiper-slide-active .main-swiper-description-text").text() )

    $('.main .swiper-slide-active .main-big-img').attr('src',  $('.main .swiper-slide-active .go-to-big-img').last().attr('src') )

  });

  