var galleryThumbs = new Swiper('.main-swiper-bottom-box', {
    spaceBetween: 10,
    slidesPerView: 10,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.main-swiper-top-box', {
    spaceBetween: 10,
    loop:true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.go-right',
      prevEl: '.go-left',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });