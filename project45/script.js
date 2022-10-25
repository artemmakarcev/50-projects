const openBtn = document.querySelector(".nav-btn.open-btn");
const closeBtn = document.querySelector(".nav-btn.close-btn");
const navs = document.querySelectorAll(".nav");

openBtn.addEventListener("click", eventOpenNav);
closeBtn.addEventListener("click", eventCloseNav);

function eventOpenNav() {
  navs.forEach((nav) => nav.classList.add("visible"));
}

function eventCloseNav() {
  navs.forEach((nav) => nav.classList.remove("visible"));
}
