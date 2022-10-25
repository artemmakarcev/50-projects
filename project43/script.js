const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.getElementById("send");
const panel = document.getElementById("panel");
let selectedRating = "Undefind";

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

/* ratings.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    ratings.forEach((rating) => {
      rating.parentNode.classList.remove("active");
    });
    rating.parentNode.classList.add("active");
    selectedRating = event.target.innerHTML
  });
}); */

// Сделано через всплывание. Подходит если элементов много и установка слушателей 
// на каждый нагружает систему. В данном случае для примера
ratingsContainer.addEventListener("click", eventRating);

function eventRating(event) {
  removeActive();
  if (event.target.classList.contains("rating")) {
    event.target.classList.add("active");
    selectedRating = event.target.innerHTML;
  } else if (event.target.parentNode.classList.contains("rating")) {
    event.target.parentNode.classList.add("active");
    selectedRating = event.target.parentNode.innerHTML;
  }
}

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
