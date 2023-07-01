import Swiper from "swiper/bundle";

var swiper = new Swiper(".advantages-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
      
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  },
});



var swiper = new Swiper(".directions-js", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 10
    }
  },
});