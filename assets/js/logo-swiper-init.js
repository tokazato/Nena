var swiper = new Swiper('.logo-slider-box', {
    slidesPerView: 6,
    // spaceBetween: 20,
    autoplay: {
      delay: 2000,
    },
    speed: 1000,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1224: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    }
  });