const colors = ['green', 'red', 'rgb(133,122,200)', '#f15025'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

const generateRandomNumber = function () {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', function () {
  randomColor = generateRandomNumber();
  color.textContent = colors[randomColor];
  document.body.style.backgroundColor = colors[randomColor];
});
