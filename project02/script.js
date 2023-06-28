const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");

let position = 0;

btnPrev.addEventListener("click", () => {
  position--;
  if (position < 1) {
    position = 1;
  }
  update();
});

btnNext.addEventListener("click", () => {
  position++;
  if (position > circles.length) {
    position = circles.length;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < position) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (position == 1) {
    prev.disabled = true;
  } else if (position === circles.length) {
    btnNext.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
