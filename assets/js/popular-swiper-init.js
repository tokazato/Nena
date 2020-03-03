var galleryThumbs = new Swiper('.popular-swiper-thumbs', {
    // spaceBetween: 25,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.popular-swiper-top', {
    spaceBetween: 0,
    pagination: {
      el: '.popular--swiper-pagenation',
      clickable: true,
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });