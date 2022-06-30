

      $(window).scroll(function(){
        $val = $(window).scrollTop();
        if($val > 10){
              $('.nav').addClass('active');
        }else{
           $('.nav').removeClass('active');  
        }
     });

     // counter animation
     $(window).scroll(startCounter);

     function startCounter()
     {
       let scrollY = (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight;
       let divPos = document.querySelector('#counter').offsetTop;

       if (scrollY > divPos) {
         $(window).off("scroll", startCounter);
         $('.counter').counterUp({
         delay: 10,
         time: 2000
         });
         $('.counter').addClass('animated fadeInDownBig');
         $('h3').addClass('animated fadeIn');
       }

     }

     
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 12,
        loop: true,
        speed: 15000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          enabled: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: false,
        },
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        breakpoints: {
        380: {
            slidesPerView: 1,
            spaceBetween: 24,
            resistanceRatio: 0.85,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 24,
            resistanceRatio: 0.85
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 28,
            resistanceRatio: 0.85
        },
        980: {
            slidesPerView: 6,
            spaceBetween: 28,
            resistanceRatio: 0.85
        },
      }
      });


      // donation
      var swiper = new Swiper(".donationSlider", {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 30000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          enabled: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: false,
        },
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        breakpoints: {
        380: {
            slidesPerView: 1,
            spaceBetween: 24,
            resistanceRatio: 0.85
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 24,
            resistanceRatio: 0.85
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 28,
            resistanceRatio: 0.85
        },
        980: {
            slidesPerView: 4,
            spaceBetween: 28,
            resistanceRatio: 0.85
        },
      }
      });

      // gallery slider

      var swiper = new Swiper(".gallerySlider", {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 30000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          enabled: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: false,
        },
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        breakpoints: {
        380: {
            slidesPerView: 1,
            spaceBetween: 24,
            resistanceRatio: 0.85
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 24,
            resistanceRatio: 0.85
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 28,
            resistanceRatio: 0.85
        },
        980: {
            slidesPerView: 4,
            spaceBetween: 28,
            resistanceRatio: 0.85
        },
      }
      });


      var swiper = new Swiper(".logoSlider", {
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          enabled: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: false,
        },
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      });
     


    //   gallery
