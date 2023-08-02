const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let count = 0;

nextBtn.addEventListener('click', function () {
  count++;
  if (count === slides.length) count = 0;
  carousel();
});

prevBtn.addEventListener('click', function () {
  count--;
  if (count < 0) count = slides.length - 1;
  carousel();
});

function carousel() {
  // if (count < slides.length - 1) nextBtn.style.visibility = 'visible';
  // else nextBtn.style.visibility = 'hidden';

  // if (count > 0) prevBtn.style.visibility = 'visible';
  // else prevBtn.style.visibility = 'hidden';

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}
