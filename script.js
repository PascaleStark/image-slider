"use stict";

const allSlides = document.querySelectorAll(".slider__slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const squaresBox = document.querySelector(".slider__squares-box");

let curSlide = 0;
const maxSlides = allSlides.length;

//Functions
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
  activSquare(curSlide);
};

//Previous slide
const previousSlide = function () {
  if (curSlide !== 0) {
    curSlide--;
  } else {
    curSlide = maxSlides - 1;
  }
  changeSlide(curSlide);
  activSquare(curSlide);
};

//Create squares
const createSquares = function () {
  allSlides.forEach((_, i) => {
    const html = `<div class="slider__square" data-nb="${i}">&nbsp;</div>`;
    console.log(html);

    squaresBox.insertAdjacentHTML("beforeend", html);
  });
};
createSquares();

//To activate the square, we create a function that accepts a slide as an argument, then adds the active class the element
const activSquare = function (slide) {
  document
    .querySelectorAll(".slider__square")
    .forEach((square) => square.classList.remove("slider__square--active"));
  document
    .querySelector(`.slider__square[data-nb="${slide}"]`)
    .classList.add("slider__square--active");
};
activSquare(0);

//Event Listeners
//Click buttons event listener
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

//keypress event listener
document.addEventListener("keydown", function (e) {
  //   console.log(e);
  if (e.keyCode === 39) nextSlide();
  if (e.keyCode === 37) previousSlide();
});

squaresBox.addEventListener("click", function (e) {
  if (e.target.classList.contains("slider__square")) {
    const slide = e.target.dataset.nb;
    changeSlide(slide);
    activSquare(slide);
  }
});

// if (htmlNode.dataset.nb === curSlide) {
//   console.log(htmlNode.dataset.nb);
// html.classList.add("slider__square--active");}
