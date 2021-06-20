
const mixerProducts = mixitup('.shop-filter__item-wrapper', {
  selectors: {
    control: '.btn'
  }
});
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper('.shop-filter__item-swiper',{
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});