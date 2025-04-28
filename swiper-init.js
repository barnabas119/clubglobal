// Wait for the DOM to be ready, then initialize Swiper
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mySwiper', {
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    fadeEffect: {
      crossFade: true,
    },
  });
});