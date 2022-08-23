$(function(){
    //sticky navbar
    var menuTop = $(".header_sticky").offset().top;
    $(window).on("scroll", function () {
      var scrollToTop = $(window).scrollTop();
  
      //js
      // if (scrollToTop > menuTop) {
      //   $(".header_sticky").addClass("menuFix");
      // } else {
      //   $(".header_sticky").removeClass("menuFix");
      // }
      // back top button js
      if (scrollToTop > 500) {
        $(".backtop").fadeIn(400);
      } else {
        $(".backtop").fadeOut(500);
      }
    });
    //backtop js
    $('.backtop ').on('click',function(){
      $('html,body').animate({
        scrollTop: 0
      },500);
    });
    //mobile menu
    $('.mobileMenu ul li').on('click', function(){
        $('.mobileMenu ul li > ul').slideToggle(300)
        $('.mobileMenu ul li a i').toggleClass('mobile_menu_arrow')
    });
    // hero slider
    var swiper = new Swiper(".hero_slider", {
      speed: 500,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
        pagination: {
          el: ".hero_arrow_dots",
          type: "fraction",
        },
        navigation: {
          nextEl: ".arrow_next",
          prevEl: ".arrow_prev",
        },
      });
      //arrival slider
      var swiper = new Swiper(".arrival_slider", {
        slidesPerView: 5,
        spaceBetween: 20,
        pagination: {
          el: ".arrivals_progressbar",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".arrivals_arrow_next",
          prevEl: ".arrivals_arrow_prev",
        },
        breakpoints: {
          300: {
              slidesPerView: 1,
          },
          375: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          479: {
              slidesPerView: 2,
          },
          575: {
              slidesPerView: 2,
          },
          767: {
              slidesPerView: 3,
          },
          991: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          1199: {
              slidesPerView: 5,
              spaceBetween: 15,
          },
          1400: {
              slidesPerView: 5,
          },
      },
      });
      //category cart slider
      var swiper = new Swiper(".category_slider", {
        slidesPerView: 6,
        spaceBetween: 20,
        pagination: {
          el: ".category_progressbar",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".category_arrow_next",
          prevEl: ".category_arrow_prev",
        },
        breakpoints: {
          300: {
              slidesPerView: 2,
          },
          400: {
              slidesPerView: 3,
          },
          479: {
              slidesPerView: 3,
          },
          575: {
              slidesPerView: 4,
          },
          767: {
              slidesPerView: 5,
          },
          991: {
              slidesPerView: 6,
          },
          1400: {
              slidesPerView: 8,
          },
      },
      });
      //feature slider
      var swiper = new Swiper(".feature_slider", {
        slidesPerView: 3,
        spaceBetween: 15,
        pagination: {
          el: ".feature_progressbar",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".feature_arrow_next",
          prevEl: ".feature_arrow_prev",
        },
        breakpoints: {
          300: {
              slidesPerView: 1,
          },
          375: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          767: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1400: {
              slidesPerView: 3,
          },
      },
      });
      //about partner section slider
      var partnarSwiper = new Swiper(".partnarSwiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            300: {
                slidesPerView: 2,
            },
            375: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
    // team member slider
    var teamSwiper = new Swiper(".teamSwiper", {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 16,
      navigation: {
          nextEl: ".team_arrow_next",
          prevEl: ".team_arrow_prev",
      },
      breakpoints: {
          300: {
              slidesPerView: 1.5,
          },
          375: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          767: {
              slidesPerView: 3,
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
      },
  });
});