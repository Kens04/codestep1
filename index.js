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

let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});