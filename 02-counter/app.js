const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');
let counter = 0;

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (e.currentTarget.classList.contains('decrease')) counter--;
    else if (e.currentTarget.classList.contains('increase')) counter++;
    else counter = 0;

    if (counter < 0) value.style.color = 'red';
    else if (counter > 0) value.style.color = 'green';
    else value.style.color = '#222';

    value.textContent = counter;
  });
});
