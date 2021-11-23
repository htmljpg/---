$(document).ready(function(){
    (function() {
      'use strict';

      // breakpoint where swiper will be destroyed
      // and switches to a dual-column layout
      const breakpoint = window.matchMedia( '(min-width: 992px)' );

      // keep track of swiper instances to destroy later
      let mySwiper;

      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////

      const breakpointChecker = function() {

        // if larger viewport and multi-row layout needed
        if ( breakpoint.matches === true ) {

          // clean up old instances and inline styles when available
          if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

          // or/and do nothing
          return;

          // else if a small viewport and single column layout needed
          } else if ( breakpoint.matches === false ) {

            // fire small viewport version of swiper
            return enableSwiper();

          }

      };

      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////

      const enableSwiper = function() {
        mySwiper = new Swiper('.swiper-container--we-work', {
            slidesPerView: 'auto',
            autoHeight: false,
            simulateTouch: false,
            watchOverflow: true,
            watchSlidesVisibility: true,
            cssMode: false,
            loop: false,
            pagination: {
                el: '#discWeWork',
                clickable: true,
            },
            mousewheel: {
                forceToAxis: true,
            },
            touchReleaseOnEdges: true,
            keyboard: false,
        });
        mySwiper = new Swiper('.swiper-container--activity', {
            slidesPerView: 'auto',
            autoHeight: false,
            simulateTouch: false,
            watchOverflow: true,
            watchSlidesVisibility: true,
            cssMode: false,
            loop: false,
            pagination: {
                el: '#discActivity',
                clickable: true,
            },
            mousewheel: {
                forceToAxis: true,
            },
            touchReleaseOnEdges: true,
            keyboard: false,
        });
        mySwiper = new Swiper('.swiper-container--news', {
            slidesPerView: 'auto',
            autoHeight: false,
            simulateTouch: false,
            watchOverflow: true,
            watchSlidesVisibility: true,
            cssMode: false,
            loop: false,
            pagination: {
                el: '#discNews',
                clickable: true,
            },
            mousewheel: {
                forceToAxis: true,
            },
            touchReleaseOnEdges: true,
            keyboard: false,
        });
        mySwiper = new Swiper('.swiper-container--advantages', {
            slidesPerView: 'auto',
            autoHeight: false,
            simulateTouch: false,
            watchOverflow: true,
            watchSlidesVisibility: true,
            cssMode: false,
            loop: false,
            pagination: {
                el: '#discAdvantages',
                clickable: true,
            },
            mousewheel: {
                forceToAxis: true,
            },
            touchReleaseOnEdges: true,
            keyboard: false,
        });

      };

      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////

      // keep an eye on viewport size changes
      breakpoint.addListener(breakpointChecker);

      // kickstart
      breakpointChecker();



    })(); /* IIFE end */
    // menu responsive
    $('[data-target]').on('click', function(){
        var target = $(this).data("target");
        if($(this).hasClass('target-absolute')) {
            $(this).toggleClass('active');
            $(target).toggleClass('active');
            $(target).siblings('.overlay').addClass('active');
            if($(this).hasClass('overlay')) {
                $(this).removeClass('active');
            }
        } else if($(this).hasClass('arrow-btn')) {
            $(this).toggleClass('active').parent().siblings(target).slideToggle();
        }
        else {
            $(this).toggleClass('active').siblings(target).slideToggle();
        }
        
    });

    mySwiper = new Swiper('.swiper-container--products', {
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '#nextProducts',
        prevEl: '#prevProducts',
    },
        pagination: {
        el: '#discProducts',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            992: {
                slidesPerView: 3,
            },
            1490: {
                slidesPerView: 4,
            }
        }
    });
    
    mySwiper = new Swiper('.swiper-container--brands', {
        slidesPerView: 5,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '#nextBrands',
        prevEl: '#prevBrands',
    },
        pagination: {
        el: '#discBrands',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1229: {
                slidesPerView: 5,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--reviews', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '#nextReviews',
        prevEl: '#prevReviews',
    },
        pagination: {
        el: '#discReviews',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1229: {
                slidesPerView: 3,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--stones', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '#nextStones',
        prevEl: '#prevStones',
    },
        pagination: {
        el: '#discStones',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
            },
            991: {
                slidesPerView: 3,
            },
            1229: {
                slidesPerView: 4,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--banner', {
        slidesPerView: 1,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: true,
        navigation: {
        nextEl: '#nextBanner',
        prevEl: '#prevBanner',
    },
        effect: 'fade',
        fade: {crossFade: true},
        pagination: {
        el: '#discBanner, #discNumBanner',
        clickable: true,
        paginationType: 'custom',
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
    });

    var galleryTop = new Swiper('.swiper-container--intro-slider', {
        simulateTouch: false,
        spaceBetween: 0,
        effect: 'fade',
        fade: {crossFade: true},
        pagination: {
            el: '#discIntro',
            clickable: true,
        },
        navigation: {
            nextEl: '#nextIntro',
            prevEl: '#prevIntro',
        },
        loop: true,
        loopedSlides: 3,
        thumbs: {
            swiper: galleryThumbs
        },
    });
    var galleryThumbs = new Swiper('.swiper-container--intro-thumbnails', {
        spaceBetween: 0,
        centeredSlides: false,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 3
    });
    stepsProgress = new Swiper('.swiper-container--steps-progress', {
        spaceBetween: 0,
        centeredSlides: false,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: false,
        loopedSlides: 4,
    });
    steps = new Swiper('.swiper-container--steps', {
        slidesPerView: 1,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '#nextSteps',
        prevEl: '',
    },
        pagination: {
        el: '#discStepsNum, #discStepsNum2',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        thumbs: {
            swiper: stepsProgress
        },
    });

    // product
    var productThumbs = new Swiper('.swiper-container--product-thumbnail', {
        spaceBetween: 0,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var productImage = new Swiper('.swiper-container--product-image', {
        spaceBetween: 0,
        pagination: {
        el: '#discProductImage',
        clickable: true,
    },
    navigation: {
        nextEl: '#nextProductImage',
        prevEl: '#prevProductImage',
    },
    thumbs: {
        swiper: productThumbs
    }
    });


    $(".show-more-btn").click(function(e){
        let targetShow = $(this).data('target-show');
        $(targetShow).fadeIn();
        $(this).parent('.section__btn').fadeOut();
    });

    /*products sort*/
    $(".sort__button").click(function(){
        $(this).addClass('selected').parent('.sort__button-block').siblings('.sort__button-block').find('.sort__button').removeClass('selected');
        $('.products__item').removeClass('products__item--list products__item--gallery').addClass($(this).data('view'));
    })

    //-----JS for Price Range slider-----

    $(function() {
        $( "#slider-range" ).slider({
            animate: true,
            range: true,
            min: 200,
            max: 18500,
            values: [ 200, 18500 ],
            slide: function( event, ui ) {
                $( "#rangeFrom" ).val( ui.values[ 0 ] + " руб");
                $( "#rangeTo" ).val( ui.values[ 1 ] + " руб");
            }
        });
    });

    // Tabs
    $('.tab__item, .box__col').hide();
    
    $('.tabs__nav-item, .box__nav-item').click( function() {
	
	var tabID = $(this).attr('data-tab');

        $(this).addClass('active').siblings().removeClass('active');

        $('#tab-'+tabID).addClass('active').show().siblings().hide().removeClass('active');
    });

    // quantity buttons
    // $('.quantity__button--sub').click(function () {
	// 	var $input = $(this).parents('.quantity').find('input');
	// 	var count = parseInt($input.val()) - 1;
	// 	count = count < 1 ? 1 : count;
	// 	$input.val(count);
	// 	$input.change();
	// 	return false;
	// });
	// $('.quantity__button--add').click(function () {
	// 	var $input = $(this).parents('.quantity').find('input');
	// 	$input.val(parseInt($input.val()) + 1);
	// 	$input.change();
	// 	return false;
    // });

    var stepper = function () {
        var stepperNumber,
            subButton;
        
        return {
          
          allSteppers: $( '.input-stepper' ),
        
          // check to see if the input is at '1'...
          checkStepperNumber: function ( thisStepper ) {
            stepperInput = $( thisStepper ).find( 'input' );
            stepperNumber = stepperInput.val();
            decrementButton = $( thisStepper ).find( 'button.quantity__button--sub' );
      
            if ( stepperNumber === '1' || stepperNumber <= 1 ) {
              // if so, disable the sub button. 
              decrementButton.prop( 'disabled', true );
              stepperInput.val( 1 );
            } else {
              // if number is positive, enable the sub button
              decrementButton.prop( 'disabled', false );
            }
      
          },
      
          init: function () {
            stepper.allSteppers.each( function ( index, element ) {
              var thisStepperInput = $( element ).find( 'input' );
              var thissubButton = $( element ).find( 'button.quantity__button--sub' );
      
              if ( thisStepperInput.val() === '1' || thisStepperInput.val() <= 1 ) {
                thissubButton.prop( 'disabled', true );
                thisStepperInput.val( 1 );
              } else {
                // if number is positive, enable the sub button
                thissubButton.prop( 'disabled', false );
              }
            });
          }
          
        }
      }();
      
      // on button.add click ...
      $( '.input-stepper button.quantity__button--add' ).on( 'click', function ( e ) {
        thisStepper = $( e.target ).closest( '.input-stepper' );
        stepperInput = thisStepper.find( 'input' );
        
        // check the input value
        stepperNumber = stepperInput.val();
        
        // increment the input value
        stepperNumber++;
        stepperInput.val( stepperNumber );
        
        // then check the stepper number
        stepper.checkStepperNumber( thisStepper );
      });
      
      // on button.sub click ...
      $( '.input-stepper button.quantity__button--sub' ).on( 'click', function ( e ) {
        thisStepper = $( e.target ).closest( '.input-stepper' );
        stepperInput = thisStepper.find( 'input' );
        
        // check the input value
        stepperNumber = stepperInput.val();
        
        // decrement the input value
        stepperNumber--;
        stepperInput.val( stepperNumber );
        
        // then check the stepper number
        stepper.checkStepperNumber( thisStepper );
      });
      
      // on input field blur ...
      $( '.input-stepper input' ).on( 'blur', function ( e ) {
        thisStepper = $( e.target ).closest( '.input-stepper' );
        // check the stepper number
        stepper.checkStepperNumber( thisStepper );
      });
      
      // check the stepper number on load
      if ( $( '.input-stepper' ).length ) {
        stepper.init();
       }


    $('.fancybox').fancybox();

    // mask
    $('input[type="tel"]').mask('+7 (999) 999-99-99');

    $('.js-anchor-link').click(function(e){
        e.preventDefault();
        var target = $($(this).attr('href'));
        if(target.length){
            var scrollTo = target.offset().top;
            $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
        }
    });

    // map marker

    // map show in scroll
    // let beforeScrolling = $('.before-scrolling');
    // let beforeScrollingTop = beforeScrolling.offset().top;
    // $(window).bind('scroll', function(){
    //     let windowTop = $(this).scrollTop();
    //     if(windowTop > beforeScrollingTop) {
    //         $(window).unbind('scroll');
    //     }
    // });

    // ymaps.ready(function () {
    //     var myMap = new ymaps.Map('map', {
    //             center: [47.222078, 39.720358],
    //             zoom: 9
    //         }, {
    //             searchControlProvider: 'yandex#search'
    //         }),
    
    //         // Создаём макет содержимого.
    //         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    //             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    //         ),
    
    //         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    //             hintContent: 'Собственный значок метки',
    //             balloonContent: 'Это красивая метка'
    //         }, {
    //             // Опции.
    //             // Необходимо указать данный тип макета.
    //             iconLayout: 'default#image',
    //             // Своё изображение иконки метки.
    //             iconImageHref: 'img/svg/pin.svg',
    //             // Размеры метки.
    //             iconImageSize: [112, 150],
    //             // Смещение левого верхнего угла иконки относительно
    //             // её "ножки" (точки привязки).
    //             iconImageOffset: [-5, -38]
    //         }),
    
    //         myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
    //             hintContent: 'Собственный значок метки с контентом',
    //             balloonContent: 'А эта — новогодняя',
    //             iconContent: '12'
    //         }, {
    //             // Опции.
    //             // Необходимо указать данный тип макета.
    //             iconLayout: 'default#imageWithContent',
    //             // Своё изображение иконки метки.
    //             iconImageHref: 'images/ball.png',
    //             // Размеры метки.
    //             iconImageSize: [48, 48],
    //             // Смещение левого верхнего угла иконки относительно
    //             // её "ножки" (точки привязки).
    //             iconImageOffset: [-24, -24],
    //             // Смещение слоя с содержимым относительно слоя с картинкой.
    //             iconContentOffset: [15, 15],
    //             // Макет содержимого.
    //             iconContentLayout: MyIconContentLayout
    //         });
    
    //     myMap.geoObjects
    //         .add(myPlacemark)
    //         .add(myPlacemarkWithContent);
    // });
});