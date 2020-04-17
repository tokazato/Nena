var galleryThumbs = new Swiper('.popular-swiper-thumbs', {
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchRatio: 0,
  });
  var galleryTop = new Swiper('.popular-swiper-top', {
    spaceBetween: 150,
    autoplay: {
      delay: 4000,
    },
    thumbs: {
      swiper: galleryThumbs
    },
    // speed: 100,
  });


  var mySwiper2 = document.querySelector('.popular-swiper-top').swiper


  mySwiper2.on('slideChange', function () {

    if( $('.swiper-slide-thumb-active').find('span.pupular-slider-line').length != 0 ) {
      $('.pupular-slider-line').removeClass('pupular-slider-line-active')
      $('.swiper-slide-thumb-active').find('span.pupular-slider-line').addClass('pupular-slider-line-active');
    }
    
    $('.popular-big-img, .popular-swiper-description-h1, .popular-swiper-description-text, .popular-swiper-weight-box').css({
      opacity: 0,
      transition: '0s ease',
    }); 

    setTimeout(() => {
        $('.popular-big-img, .popular-swiper-description-h1, .popular-swiper-description-text, .popular-swiper-weight-box').delay(100).css({
            opacity: 1,
            transition: '1.6s ease',
        })
    }, 500);


  });