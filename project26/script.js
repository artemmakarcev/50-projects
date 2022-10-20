const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slidesLenght = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLenght - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  activeSlideIndex++;
  if (activeSlideIndex > slidesLenght - 1) activeSlideIndex = 0;
  changeSlide();
});
downBtn.addEventListener("click", () => {
  activeSlideIndex--;
  if (activeSlideIndex < 1) activeSlideIndex = slidesLenght - 1;
  changeSlide();
});

function changeSlide() {
  const sliderHeight = sliderContainer.clientHeight;
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
