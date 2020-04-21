var galleryThumbs = new Swiper('.main-swiper-bottom-box', {
    spaceBetween: 10,
    slidesPerView: 10,
    // loop: true,
    freeMode: true,
    // loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      750: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1224: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    }
  });
  var galleryTop = new Swiper('.main-swiper-top-box', {
    spaceBetween: 10,
    // loop:true,
    // loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.go-right',
      prevEl: '.go-left',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    speed: 1500,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    }
  });


  var mySwiper1 = document.querySelector('.main-swiper-top-box').swiper


  mySwiper1.on('slideChange', function () {

        $('.slider-title-box , .slider-text-box ').css({
          opacity: '0',
          transition: '0s ease',
      }); 

      $('.main-big-img, .main-swiper-select-product-box').css({
          opacity: 0,
          transition: '0.67s ease', 
      }) 

      setTimeout(() => {
          $(' .slider-title-box , .slider-text-box ').delay(200).css({
              opacity: '1',
              transition: '0.6s ease',
          })
      }, 1000);

      setTimeout(() => {
          $('.main-big-img, .main-swiper-select-product-box ').css({
              opacity: 1,
          })
      }, 600);

  });



  $(".description-text-mobile").text( $(".main .swiper-slide-active .main-swiper-description-text").text() )

  mySwiper1.on('slideChangeTransitionStart', function () {

    $(".description-text-mobile").text( $(".main .swiper-slide-active .main-swiper-description-text").text() )

    $('.main .swiper-slide-active .main-big-img').attr('src',  $('.main .swiper-slide-active .go-to-big-img').last().attr('src') )

  });

  