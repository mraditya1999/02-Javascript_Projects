const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

const generateRandomNumber = function () {
  return Math.floor(Math.random() * 255);
};

btn.addEventListener('click', function () {
  let red = generateRandomNumber();
  let green = generateRandomNumber();
  let blue = generateRandomNumber();

  color.textContent = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
