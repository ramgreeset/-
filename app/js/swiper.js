new Swiper('.swiper-container', {

  parallax: true,



    // Навигация
    // Булеты, текущее положение,прогрессбар
    pagination: {
      el: '.swiper-pagination',
    // // Буллеты. Возможность переключасть слайдер по булитам
    //   clickable:true,
    // // Динамические буллеты. Центральный булет увеличивается в размере
    //   dynamicBullets: true,
    // // Кастомные булеты. Нумерация булетов
    //   renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    //   },

      // Фракция. Нумерация булетов по типу 1/3
      // type: 'fraction',
      // // Кастомный вывод фракций
      // renderFraction: function (currentClass, totalClass) {
      //   return 'Фото <span class="' + currentClass + '"></span>' +
      //   ' из ' +
      //   '<span class="' + totalClass + '"></span>';
      // },

      // Прогрессбар
      // type: 'progressbar',

    },

        // Вертикальный слайдер
        direction: 'horizontal',

    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   // Возможность перетаскивать скролл
    //   draggable: true
    // },

    // Включение/отключение свайпа на ПК
    // simulateTouch: true,

    // Чувствительность свайпа
    // touchRatio: 1,

    // Угол срабатывания свайпа
    // touchAngle: 45,

    // Курсор свайпа
    // grabCursor: true,

    // Переключение при клике на слайд
    // slideToClickedSlide: true,

    // Автовысота
    // autoHeight: true,

    // Колличество слайдов для показа
    // slidesPerView: 2,

    // Отключение функционала если слайдов меньше чем нужно
    // watchOverflow:true,

    // Отступ между слайдами
    // spaceBetween:30,

    // Колличество пролистываемых слайдов
    // slidesPerGroup: 2,

    // Активный слайд по центру
    // centeredSlides:true,

    // Стартовый слайд
    // initialSlide: 0,

    // Мультирядность
    // slidesPerColumn: 2,

    // Бесконечный слайдер
    loop:true,

    // Колличество дубриующих слайдов
    // loopedSlides:3,

    // Свободный режим
    // freeMode: true,

    // Автопрокрутка
    autoplay: {
      // Пауза между прокруткой
      delay: 3000,
      // Закончить на последнем слайде
      // stopOnLastSlide: true,
      // Отключить после ручного переключения
      disableOnInteraction: false,
    },

    // Скорость
    // speed:3000,

    // Эффекты переключения слайдов
    // Листание
    // effect:'slide',

    // // Наложение слайдов друг на друга/прозрачность
    // effect:'fade',
    // fadeEffect: {
    //   // Параллельная смена прозрачности
    //   // crossFade: true,
    // }

    // Переворот
    // effect:'flip',
    // flipEffect: {
    //   // Тень
    //   slideShadows:true,
    //   // Показ только активного слайда
    //   limitRotation:true,
    // }

    // // Куб
    // effect:'cube',
    // cubeEffect: {
    //   // Настройки тени
    //   slideShadows: true,
    //   shadow: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94,
    // }

    // Поток/лента слайдов
    // effect:'coverflow',

    // coverflowEffect: {
    //   // Угол
    //   rotate: 20,
    //   // Наложение
    //   stretch: 50,
    //   // Тень
    //   sliderShadows: true,
    // }

    // breakpoints: {

    //   320:{
    //     slidesPerView:1,
    //   },

    //   480: {
    //     slidesPerView:2,
    //   },

    //   992:{
    //     slidesPerView:3,
    //   }

    // },

     
    // // LazyLoad
    // // Отключить предзагрузку картинок
    // preloadImages: false,
    // lazy: {
    //   // Подгружать на старте переключения слайдера
    //   loadOnTransitionStart: false,
    //   // Подгружать предыдущую и следующую картинку
    //   loadPrevNext: false,
    // },
    // // Слежка за видимыми слайдами
    // watchSlidesProgress: true,
    // watchSlidesVisibility: true,

    // Передача управления
    // controller: {
    //   control:myTextSlider,
    // },

    // Обновить свайпер при изменении элементов слайдера
    // observe: true,

    // Обновить свайпер при изменении родительский элементов слайдера
    // observeParents: true,

    // Обновить свайпер при изменении дочерних элементов слайдера
    // observeSlideChildren: true,

});
