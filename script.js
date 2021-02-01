"use stict";

const allSlides = document.querySelectorAll(".slider__slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlides = allSlides.length;

const changeSlide = function (slide) {
  allSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );
};

changeSlide(0);

const nextSlide = function () {
  if (curSlide < maxSlides - 1) {
    curSlide++;
  } else {
    if (curSlide === maxSlides - 1) curSlide = 0;
  }
  changeSlide(curSlide);
};

const previousSlide = function () {
  if (curSlide !== 0) {
    curSlide--;
  } else {
    curSlide = maxSlides - 1;
  }
  changeSlide(curSlide);
};

btnLeft.addEventListener("click", nextSlide);
btnRight.addEventListener("click", previousSlide);

//Previous slide
// btnRight.addEventListener("click", function () {
//   if (curSlide < maxSlides - 1) curSlide--;
//   allSlides.forEach(function (slide, i) {
//     slide.style.transform = `translateX(${(i - curSlide) * 100}%)`;
//   });
// });
