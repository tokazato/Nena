$(document).ready(function() {

// start lazy load image
  window.addEventListener('load', function(){
    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
  }, false)
  // end lazy load image

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
      console.log( $('#select-result').val() )
    });

    rs()
    $( window ).resize(function() {
        rs()
    });
    function rs(){
        if( window.matchMedia("(max-width: 690px)").matches ){
            $('.select2').css('width', '100%');
        } 
        else if( window.matchMedia("(max-width: 1000px)").matches ){
          $('.select2').css('width', '250px');
        }
        else {
          $('.select2').css('width', '279px');
        }
    }
    
  } catch (error) {}


  $('.main-swiper-thumbs-box').mouseover(function(){
    $(this).find('.thumb-img').css('bottom', '30px')
    $(this).next().find('.thumb-img').css('bottom', '10px')
    $(this).prev().find('.thumb-img').css('bottom', '10px')
  })

  $('.main-swiper-thumbs-box').mouseleave(function(){
    $(this).find('.thumb-img').css('bottom', '0px')
    $(this).next().find('.thumb-img').css('bottom', '0px')
    $(this).prev().find('.thumb-img').css('bottom', '0px')
  })


  $('.back__contact__form').click(function(){
    $('.success__popup').removeClass('success__popup__active')
    $('.export__information__form').removeClass('export__information__form__hide')
    $('.contact__form').removeClass('contact__form__hide')
  })

  

  $('#contact__form__submit, #export-submit').on('click', function(){
    var nameInput = $('.conctact__input__name');
    var phoneInput = $('.conctact__input__tel');
    var emailInput = $('.conctact__input__email');
    var contactText = $('.conctact__input__text');
    var countryInput = $('.conctact__input__country');

    if(nameInput.val().length < 2) {
      nameInput.addClass('contact__from__error')
      event.preventDefault()
    }else {
      nameInput.removeClass('contact__from__error')
    }

    if(countryInput.length != 0) {
      if(countryInput.val().length < 2) {
        countryInput.addClass('contact__from__error')
        event.preventDefault()
      } else {
        countryInput.removeClass('contact__from__error')
      }
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



  $('.conctact__input__name').keyup(function(){
    if($(this).val().length < 2) {
      $(this).addClass('contact__from__error')
      event.preventDefault()
    }else {
      $(this).removeClass('contact__from__error')
    }
  })

  $('.conctact__input__country').keyup(function(){
    if($(this).val().length < 2) {
      $(this).addClass('contact__from__error')
      event.preventDefault()
    }else {
      $(this).removeClass('contact__from__error')
    }
  })

  $('.conctact__input__tel').keyup(function(){
    if($(this).val().length < 9) {
      $(this).addClass('contact__from__error')
      event.preventDefault()
    }else {
      $(this).removeClass('contact__from__error')
    }
  })

  $('.conctact__input__email').keyup(function(){
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      if (testEmail.test( $(this).val())) {
        $(this).removeClass('contact__from__error');
      } else {
        $(this).addClass('contact__from__error');
        event.preventDefault()
      }
  })

  $('.conctact__input__text').keyup(function(){
    if($(this).val().length < 6) {
      $(this).addClass('contact__from__error')
      event.preventDefault()
    }else {
      $(this).removeClass('contact__from__error')
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
        $('body').toggleClass('scroll-none')
    })

    $('.description-btn').click(function() {
        $('.description--text-box-mobile').slideToggle()
        $('.description-btn').toggleClass('close-description-box')
        $('.descrip-plus').toggleClass('descrip-plus-hide')
        $('header').toggleClass('downIndex')
        $('body').toggleClass('scroll-none')
    })

    if( $('.go-to-big-img-active img').hasClass('bottle-1000') ) {
      $('.main-big-img').css('height', '100%')
    }
    if( $('.go-to-big-img-active img').hasClass('bottle-500') ) {
      $('.main-big-img').css('height', '75%')
    }
    if( $('.go-to-big-img-active img').hasClass('bottle-300') ) {
      $('.main-big-img').css('height', '60%')
    }
    
    $('.go-to-big-img').click(function(){

      if( $(this).hasClass('bottle-1000') ) {
        setTimeout(() => {
          $('.main-big-img').css('height', '100%')
        }, 500)
      }
      if( $(this).hasClass('bottle-500') ) {
        setTimeout(() => {
          $('.main-big-img').css('height', '75%')
        }, 500)
      }
      if( $(this).hasClass('bottle-300') ) {
        setTimeout(() => {
          $('.main-big-img').css('height', '60%')
        }, 500)
      }

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



    
// Start Product Tab and grame Active --------
    // grame get active and change text
    $('.product__text').html( $('.productDescriptGrams').eq( 0 ).attr('data-product-descript') )
    $('.productDescriptGrams').eq(0).addClass('tab-active')
    $('.productDescriptGrams').click(function(){
      $('.product__text').html( $(this).attr('data-product-descript') )
      $('.productDescriptGrams').removeClass('tab-active')
      $(this).addClass('tab-active');
    })
    
    //tab get active 
    $('.productDescriptTab .tab__btn').eq(0).addClass('tab-active')
    $('.productDescriptTab .big-circle').eq(0).addClass('tab-active')
    $('.productDescriptTab').click(function(){
      $('.productDescriptTab .tab__btn').removeClass('tab-active')
      $('.productDescriptTab .big-circle').removeClass('tab-active')
      $(this).find('button.tab__btn').addClass('tab-active')
      $(this).find('div.big-circle').addClass('tab-active')
    })
    
    // about button show grame and set active
    $('.aboutProductBtn').click(function(){
      $('.honey__g').css('display', 'block')
      $('.product__text').html( $('.productDescriptGrams').eq( 0 ).attr('data-product-descript') )
      $('.productDescriptGrams').removeClass('tab-active')
      $('.productDescriptGrams').eq(0).addClass('tab-active')
      $('.honey__description').css('justify-content', 'space-between')
    })
    
    // some tab hide grame and change text
    $('.hideGrameTab').click(function(){
      $('.honey__g').css('display', 'none')
      $('.product__text').html( $(this).attr('data-product-descript') )
      $('.honey__description').css('justify-content', 'flex-start')
    })
// end Product Tab and grame Active --------
    


// production background slider init start
  if( $('.production-background-slider').length != 0 ) {
    var productionBackgroundSlider = new Swiper('.production-background-slider', {
      spaceBetween: 30,
      effect: 'fade',
      autoplay: {
        disableOnInteraction: false,
        delay: 3500,
      },
      speed: 3000,
    });
  }
// production background slider init end

// honey slider img init start 
    if( $('.honey-img-swiper-container').length != 0 ) {
      var honeyImgSwiper = new Swiper('.honey-img-swiper-container', {
          slidesPerView: 5,
          spaceBetween: 20,
          navigation: {
              nextEl: '.honey-img-next',
              prevEl: '.honey-img-prev',
          },
          centerInsufficientSlides: true,
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
         centerInsufficientSlides: true,
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
        centerInsufficientSlides: true,
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
     centerInsufficientSlides: true,
     breakpoints: {
         320: {
           slidesPerView: 2.6,
         },
         650: {
           slidesPerView: 2.6,
           centerInsufficientSlides: false,
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
        centerInsufficientSlides: true,
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
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
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
      centerInsufficientSlides: true,
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
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
    videoPopupGalleryTop.on('slideChangeTransitionStart', function(){
      for(let i = 0; i < $('iframe').length; i++){
        $('iframe')[i].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
      }
    })
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
    for(let i = 0; i < $('iframe').length; i++){
      $('iframe')[i].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');  
    }
  })



$(document).keyup(function(e) {
  if( $('.swiper-popup').css('opacity') == 1 || $('.swiper-video-popup').css('opacity') ==1 ) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
      $('.swiper-popup').removeClass('swiper-popup-active');
      $('body').removeClass('scroll-none');
    }
  }
});



}); // end Jquery


// start init map 
function initMap() {
  var tbilisi = {
    info:
      '<strong>Nena</strong><br>\
    	S. Tsintsadze St #12<br> Tbilisi, Georgia<br>\
    	<a href="https://goo.gl/maps/F64a1QLHE5xjD6Aa6">Get Directions</a>',
    lat: 41.721800,
    long: 44.768850,
  }

  var dabaQeda = {
    info:
      '<strong>Nena</strong><br>\
    	Daba Keda<br>\
    	<a href="https://goo.gl/maps/V6Zf3cvernR1W5Yu8">Get Directions</a>',
    lat: 41.6000323,
    long: 41.9404434,
  }

  var Choxatauri = {
    info:
      '<strong>Nena</strong><br>\
    	Chokhatauri<br>\
    	<a href="https://goo.gl/maps/zkBxvqdXsES3kKmW8">Get Directions</a>',
    lat: 42.0084341,
    long: 42.238387,
  }

  var locations = [
    [tbilisi.info, tbilisi.lat, tbilisi.long, 0],
    [dabaQeda.info, dabaQeda.lat, dabaQeda.long, 1],
    [Choxatauri.info, Choxatauri.lat, Choxatauri.long, 1]
  ]

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: new google.maps.LatLng(42.3154, 43.3569),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  })

  var infowindow = new google.maps.InfoWindow({})

  var marker, i

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    })

    google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        }
      })(marker, i)
    )
  }
}

// end init map 
