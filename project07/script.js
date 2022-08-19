console.log('It work!');

const container = document.querySelector('.container');
const leftBlock = document.querySelector('.left');
const rightBlock = document.querySelector('.right');

leftBlock.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
});
leftBlock.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});
rightBlock.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
});
rightBlock.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});

