const sliders = document.querySelectorAll(".slider");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let indexActive = 0;

setActiveSlider();

rightBtn.addEventListener("click", () => {
  indexActive++;
  if (indexActive >= sliders.length) {
    indexActive = 0;
  }
  setActiveSlider();
});

leftBtn.addEventListener("click", () => {
  indexActive--;
  if (indexActive < 0) {
    indexActive = sliders.length - 1;
  }
  setActiveSlider();
});

function setActiveSlider() {
  sliders.forEach((slide) => {
    slide.classList.remove("active");
  });
  sliders[indexActive].classList.add("active");
  document.body.style.backgroundImage = sliders[indexActive].style.backgroundImage;
}
