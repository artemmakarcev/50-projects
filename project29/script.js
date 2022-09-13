const img = document.querySelector('.loveMe');
const displayLikes = document.querySelector('small>#times');

let clickTime = 0;
let likes = 0;

img.addEventListener('click', (event) => {
  event.preventDefault();
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(event);
      addLikes();
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (event) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = event.clientX;
  const y = event.clientY;

  const leftOffset = event.target.offsetLeft;
  const topOffset = event.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  img.appendChild(heart);

  heart.addEventListener('animationend', ()=>{
    heart.remove()
  })
};

function addLikes() {
  displayLikes.innerHTML = ++likes;
}
