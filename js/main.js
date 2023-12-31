const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo";
};

const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo-light";
};

const openMenu = (event) => { //функция открывания меню
  menu.classList.add("is-open");  // вешает класс is-оpen
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow = "hidden"; // запрещаем прокрутку сайта под меню
  lightModeOn();
};

const closeMenu = (event) => { //функция закрывания меню
  menu.classList.remove("is-open");  // убирает класс is-оpen
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow = ""; // возвращает прокрутку сайта под меню
  lightModeOff();
};

window.addEventListener("scroll", () => {
this.scrollY > 1 ? lightModeOn() : lightModeOff();
});

mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu(); 
});

const swiperSteps = new Swiper (".steps-slider",{
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: ".slider-buttons-prev-steps",
    prevEl: ".slider-buttons-next-steps",
    },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      centeredSlides:true,
      slidesOffsetBefore:-100,
      slidesOffsetAfter:100,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
    },
    },
  },
);

const swiper = new Swiper('.features-slider', {
  speed: 400,
  slidesPerView: 1,
    navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
        centeredSlides:true,
        slidesOffsetBefore:-100,
        slidesOffsetAfter:100,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 5,
      },
    },
  });
   
  

  

  