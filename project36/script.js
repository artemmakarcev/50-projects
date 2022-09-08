console.log('script work!');
const container = document.getElementById('container');
const colors = ['#007267', '#0000ee'];

const SQUARES = 500;
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);

  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseout', () => {
    removeColor(square);
  });
}

function setColor(element) {
  const color = getRundomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '';
  element.style.boxShadow = '0 0 2px #000';
}

function getRundomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
