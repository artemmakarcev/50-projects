const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const userName = document.getElementById("user-name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML = `<img src="https://source.unsplash.com/random/350x200" alt="Random unsplash image" />`;
  title.innerHTML = `Lorem ipsum dolor sit amet`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, pariatur.`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg" alt="Random user" />`;
  userName.innerHTML = `John Doe`;
  date.innerHTML = `Oct 08, 2020`;

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg_text) => bg_text.classList.remove("animated-bg-text"));
}

setTimeout(() => getData(), 3000);
