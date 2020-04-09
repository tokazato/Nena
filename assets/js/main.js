$(document).ready(function() {

  $(document).ready(function(){
    $(this).scrollTop(0);
  });

  $(document).scroll(function () {
      //stick nav to top of page
      var y = $(this).scrollTop();
      
      if( $('.export').length != 0 ) { 
        var navWrap1 = $('.export').offset().top + 100 ;
        if (y > navWrap1) {
          $('.export__presentation').addClass('slide-up-class2');
        }
      }

      if( $('.contact').length != 0 ) { 
        var navWrap1 = $('.contact').offset().top - 300 ;
        if (y > navWrap1) {
          $('.bank__detail:nth-child(1) .bank__info').addClass('slide-from-left');
          $('.bank__detail:nth-child(2) .bank__info').addClass('slide-from-right');
        }
      }
  });

  document.addEventListener("touchstart", function() {},false);

  try {

    // Initialize select2
    $("#selUser").select2();
 
    // Read selected option
    $('#export-submit').click(function() {
     //  var username = $('#selUser option:selected').text();
      var userid = $('#selUser').val();
      
      $('#select-result').val(userid);
      console.log( $('#select-result').val())
  
    });
    
  } catch (error) {}

  $('#contact__form__submit, #export-submit').on('click', function(){
    var nameInput = $('.conctact__input__name')
    var phoneInput = $('.conctact__input__tel')
    var emailInput = $('.conctact__input__email') 
    var contactText = $('.conctact__input__text')

    if(nameInput.val().length < 2) {
      nameInput.addClass('contact__from__error')
      event.preventDefault()
    }else {
      nameInput.removeClass('contact__from__error')
    }

    if(phoneInput.val().length < 9) {
      phoneInput.addClass('contact__from__error')
      event.preventDefault()
    }else {
      phoneInput.removeClass('contact__from__error')
    }

    if(contactText.val().length < 6) {
      contactText.addClass('contact__from__error')
      event.preventDefault()
    }else {
      contactText.removeClass('contact__from__error')
    }
      
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      if (testEmail.test( emailInput.val())) {
        emailInput.removeClass('contact__from__error');
      } else {
        emailInput.addClass('contact__from__error');
        event.preventDefault()
      }
  })

  // check contact form on keyup 
  $('#contact__form input, #contact__form textarea, .export__form input, .export__form textarea').keyup(function(){
    var nameInput = $('.conctact__input__name')
    var phoneInput = $('.conctact__input__tel')
    var emailInput = $('.conctact__input__email') 
    var contactText = $('.conctact__input__text')

    if(nameInput.val().length < 2) {
      nameInput.addClass('contact__from__error')
      event.preventDefault()
    }else {
      nameInput.removeClass('contact__from__error')
    }

    if(phoneInput.val().length < 9) {
      phoneInput.addClass('contact__from__error')
      event.preventDefault()
    }else {
      phoneInput.removeClass('contact__from__error')
    }

    if(contactText.val().length < 6) {
      contactText.addClass('contact__from__error')
      event.preventDefault()
    }else {
      contactText.removeClass('contact__from__error')
    }
      
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      if (testEmail.test( emailInput.val())) {
        emailInput.removeClass('contact__from__error');
      } else {
        emailInput.addClass('contact__from__error');
        event.preventDefault()
      }
  })

  $('#export-submit').click(function(){
    if( $('#select-result').val() == 0 ) {
      $('.select2-selection').addClass('contact__from__error')
      event.preventDefault()
    } else {
      $('.select2-selection').removeClass('contact__from__error')
    }
  })

  // export page set active whatsapp or viber icon
  $('.go-to-active').click(function(){
    $(this).toggleClass('viber__whatsapp__active')
  })

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
    
    
    

// honey slider img init start 
    if( $('.honey-img-swiper-container').length != 0 ) {
      var honeyImgSwiper = new Swiper('.honey-img-swiper-container', {
          slidesPerView: 5,
          spaceBetween: 20,
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
    }
// honey slider img init end 


// honey slider video init start 
    if( $('.honey-video-swiper-container').length != 0 ) {
     var honeyVideoSwiperContainer = new Swiper('.honey-video-swiper-container', {
         slidesPerView: 5,
         spaceBetween: 20,
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
    }
// honey slider video init end 



// production slider img init start 
  if( $('.production-img-swiper-container').length != 0 ) {
    var honeyImgSwiper = new Swiper('.production-img-swiper-container', {
        slidesPerView: 5,
        spaceBetween: 20,
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
  }
// production slider img init end 


// production slider video init start 
if( $('.production-video-swiper-container').length != 0 ) {
 var productionVideoSwiperContainer = new Swiper('.production-video-swiper-container', {
     slidesPerView: 5,
     spaceBetween: 20,
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
}
// production slider video init end 

// start popup swiper open to img slider 
    if( $('.popup-swiper-gallery-thumbs').length != 0 ) {
      var galleryThumbs = new Swiper('.popup-swiper-gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 6,
        freeMode: true,
        speed: 1000,
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
        speed: 1000,
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
      // popupGalleryTop.slideTo(currentSliderIndex, 0)
    }
  // start popup swiper open to img slider 


  // start popup swiper open to video slider 
  if( $('.popup-swiper-video-gallery-thumbs').length != 0 ) {
    var videoGalleryThumbs = new Swiper('.popup-swiper-video-gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      speed: 1000,
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
    var videoPopupGalleryTop = new Swiper('.popup-swiper-video-gallery-top', {
      spaceBetween: 10,
      speed: 1000,
      pagination: {
        el: '.popup-video-swiper-pagenation',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.popup-video-swiper-next',
        prevEl: '.popup-video-swiper-prev',
      },
      thumbs: {
        swiper: videoGalleryThumbs
      }
    });
  }

// open popup slider with production img slider 
  let productionSwiperImg = $('.production-swiper-open-img');
  $.each(productionSwiperImg, function( index, element ) {
      $(element).on('click', function(){
        popupGalleryTop.slideTo(index, 0);
        $('.swiper-img-popup').addClass('swiper-popup-active')
        $('body').addClass('scroll-none')
      })
  });

 // open popup slider with production video slider 
  let productionSwiperVideo = $('.production__swiper__video');
  $.each(productionSwiperVideo, function( index, element ) {
      $(element).on('click', function(){
        videoPopupGalleryTop.slideTo(index, 0);
        $('.swiper-video-popup').addClass('swiper-popup-active')
        $('body').addClass('scroll-none')
      })
  });


  // open popup slider with honey img slider 
  let honeySwiperImg = $('.honey-swiper-open-img');
  $.each(honeySwiperImg, function( index, element ) {
      $(element).on('click', function(){
        popupGalleryTop.slideTo(index, 0);
        $('.swiper-img-popup').addClass('swiper-popup-active')
        $('body').addClass('scroll-none')
      })
  });

  // open popup slider with honey video slider 
  let honeySwiperVideo = $('.honey__swiper__video');
  $.each(honeySwiperVideo, function( index, element ) {
      $(element).on('click', function(){
        videoPopupGalleryTop.slideTo(index, 0);
        $('.swiper-video-popup').addClass('swiper-popup-active')
        $('body').addClass('scroll-none')
      })
  });

   // export video to popup slider 
  let exportSwiperVideo = $('.export__media__video');
  $.each(exportSwiperVideo, function( index, element ) {
      $(element).on('click', function(){
        videoPopupGalleryTop.slideTo(index, 0);
        $('.swiper-video-popup').addClass('swiper-popup-active')
        $('body').addClass('scroll-none')
      })
  });


  // hide popup slider
  $('.popup-background').click(function() {
    $('.swiper-video-popup').removeClass('swiper-popup-active')
    $('.swiper-img-popup').removeClass('swiper-popup-active')
    $('body').removeClass('scroll-none')
  })

   
    
});