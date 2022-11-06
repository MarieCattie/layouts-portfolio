let slides = document.querySelectorAll('.slider__slide');
let nextBtn = document.querySelector('.slide-next');
let prevBtn = document.querySelector('.slide-prev');

let currentSlide = 0;

window.onload = toggleSlide;
nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);



function toggleSlide() {
  clearSlides();
  setActiveSlide();
}
function setActiveSlide() {
  slides.forEach((slide, index) => {
    if(index === currentSlide) {
      slide.style.opacity = '1' 
    }
  })
}
function clearSlides() {
  slides.forEach(slide => {
    slide.style.opacity = '0' 
  })
}

function slideNext() {
  currentSlide = (currentSlide + 1) % slides.length;
  toggleSlide()
}
function slidePrev() {
  if(currentSlide !== 0) {
    currentSlide = (currentSlide - 1) % slides.length;
  }
  toggleSlide()
}