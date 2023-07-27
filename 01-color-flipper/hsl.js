const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

const generateRandomNumber = (limit) => Math.floor(Math.random() * limit);

btn.addEventListener('click', () => {
  const hue = generateRandomNumber(360);
  const saturation = generateRandomNumber(100);
  const lightness = generateRandomNumber(100);

  const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  color.textContent = hslColor;
  document.body.style.backgroundColor = hslColor;
});
