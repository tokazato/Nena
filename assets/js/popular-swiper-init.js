var galleryThumbs = new Swiper('.popular-swiper-thumbs', {
    // spaceBetween: 25,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // simulateTouch: false,
    touchRatio: 0,
  });
  var galleryTop = new Swiper('.popular-swiper-top', {
    spaceBetween: 150,
    // pagination: {
    //   el: '.popular--swiper-pagenation',
    //   clickable: true,
    // },
    thumbs: {
      swiper: galleryThumbs
    },
    // speed: 100,
  });


  var mySwiper2 = document.querySelector('.popular-swiper-top').swiper


  mySwiper2.on('slideChange', function () {
    
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