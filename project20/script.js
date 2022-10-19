const buttons = document.querySelectorAll(".ripple");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    const buttonTop = event.target.offsetTop;
    const buttonLeft = event.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    console.log(xInside, yInside);
    console.log(buttonTop, buttonLeft);
    console.log(x, y);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;
    button.appendChild(circle);
    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  });
});
