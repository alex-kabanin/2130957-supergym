import {iosVhFix} from './utils/ios-vh-fix.js';
import {initModals} from './modules/modals/init-modals.js';
import {Form} from './modules/form-validate/form.js';
import './modules/video/video.js';
import './modules/tabs/tabs.js';
import './modules/faq/faq.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

    // eslint-disable-next-line no-undef,no-new
    new Swiper('.staff__swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: '.staff__button-next',
        prevEl: '.staff__button-prev',
      },
      breakpoints: {
        320: {
          width: 226,
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          width: 566,
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });

    // eslint-disable-next-line no-undef,no-new
    new Swiper('.reviews__swiper', {
      loop: false,
      slidesPerView: 1,
      navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
      },
    });

    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
