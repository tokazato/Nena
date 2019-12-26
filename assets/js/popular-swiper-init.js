var galleryThumbs = new Swiper('.popular-swiper-thumbs', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.popular-swiper-top', {
    spaceBetween: 0,
    thumbs: {
      swiper: galleryThumbs
    }
  });