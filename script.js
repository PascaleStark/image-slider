"use stict";

const allSlides = document.querySelectorAll(".slider__slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

let curSlide = 0;
const maxSlides = allSlides.length;

//Slide change functionality - translate values
const changeSlide = function (slide) {
  allSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );
};

changeSlide(0);

//Next slide
const nextSlide = function () {
  if (curSlide < maxSlides - 1) {
    curSlide++;
  } else {
    if (curSlide === maxSlides - 1) curSlide = 0;
  }
  changeSlide(curSlide);
};

//Previous slide
const previousSlide = function () {
  if (curSlide !== 0) {
    curSlide--;
  } else {
    curSlide = maxSlides - 1;
  }
  changeSlide(curSlide);
};

//Click buttons event listener
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

//keypress event listener
document.addEventListener("keydown", function (e) {
  //   console.log(e);
  if (e.keyCode === 39) nextSlide();
  if (e.keyCode === 37) previousSlide();
});
