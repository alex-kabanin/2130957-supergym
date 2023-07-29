import Swiper from '../../vendor/swiper.js';
const staffSwiper = document.querySelector('[data-staff__swiper]');
const reviewSwiper = document.querySelector('[data-reviews__swiper]');

const initTrainersSlider = () => {
  if (staffSwiper) {
    (() =>
      new Swiper('.staff__swiper', {
        loop: true,
        slidesPerView: 1,
        direction: 'horizontal',
        loopFillGroupWithBlank: true,
        watchSlidesProgress: true,
        observer: true,
        navigation: {
          nextEl: '.staff__button-next',
          prevEl: '.staff__button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1352: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      })
    )();
  }

  if (reviewSwiper) {
    (() =>
      new Swiper('.reviews__swiper', {
        loop: false,
        slidesPerView: 1,
        navigation: {
          nextEl: '.reviews__button-next',
          prevEl: '.reviews__button-prev',
        },
      })
    )();
  }
};

export {initTrainersSlider};
