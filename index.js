var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      slidesPerView: 3.5,
      spaceBetween: 30
    }
  }
});

const hamburger = document.querySelector('.header');
hamburger.addEventListener('click', function() {
  this.classList.toggle('open');
});
