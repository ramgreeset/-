new Swiper('.swiper-container', {

    // Стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
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
      type: 'fraction',
      // Кастомный вывод фракций
      renderFraction: function (currentClass, totalClass) {
        return 'Фото <span class="' + currentClass + '"></span>' +
        ' из ' +
        '<span class="' + totalClass + '"></span>';
      },

      // Прогрессбар
      // type: 'progressbar',

    },

    scrollbar: {
      el: '.swiper-scrollbar',
      // Возможность перетаскивать скролл
      draggable: true
    },

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
    // loop:true,

    // Колличество дубриующих слайдов
    // loopedSlides:3,

    // Свободный режим
    // freeMode: true,

    // Автопрокрутка
    // autoplay: {
    //   Пауза между прокруткой
    //   delay: 1000,
    //   Закончить на последнем слайде
    //   stopOnLastSlide: true,
    //   Отключить после ручного переключения
    //   disableOnInteraction: false,
    // },

    // Скорость
    speed:800,

     



});
