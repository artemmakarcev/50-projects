const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;
for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  fetch(`${unsplashURL}${getRandomSize()}`).then((data) => {
    img.src = `${data.url}`;
  });
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 20) + 150;
}
