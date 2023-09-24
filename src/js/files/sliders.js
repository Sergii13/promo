/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/
// Стилі Swiper
// Базові стилі
//import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
import "swiper/css";

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".hero__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".hero__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      direction: "vertical",
      speed: 6000,
      loopedSlides: 4,
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 5,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          direction: "horizontal",
          spaceBetween: 15,
        },
        900: {
          direction: "vertical",
          spaceBetween: 20,
        },
      },

      on: {},
    });
  }
  if (document.querySelector(".google__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".google__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 6,
      spaceBetween: 8,
      speed: 800,
      navigation: {
        prevEl: ".google__prev",
        nextEl: ".google__next",
      },
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          // Ефекти
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          effect: 'fade',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          autoplay: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              delay: 3000,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              disableOnInteraction: false,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

      // Пагінація
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          pagination: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              el: '.swiper-pagination',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              clickable: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

      // Скроллбар
      /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          scrollbar: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              el: '.swiper-scrollbar',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              draggable: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

      // Кнопки "вліво/вправо"

      breakpoints: {
        320: {
          slidesPerView: "auto",
        },

        1044: {
          slidesPerView: 6,
        },
      },

      on: {},
    });
  }
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
