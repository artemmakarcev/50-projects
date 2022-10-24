const magicBtn = document.getElementById("btn");
const box = document.getElementById("boxes");

let boxHeight = 100;
let boxWidth = 100;

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const element = document.createElement("div");
    element.classList.add("box");
    element.style.backgroundPosition = `${-j * boxHeight}px ${-i * boxWidth}px`;
    box.insertAdjacentElement("beforeend", element);
  }
}

magicBtn.addEventListener("click", () => {
  box.classList.toggle("big");
});
