import data from './data.js';

const img = document.querySelector('.img');
const text = document.querySelector('.text');
const job = document.querySelector('.title');
const name = document.querySelector('.slide h4');

const container = document.querySelector('.slide-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

container.innerHTML = data
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = 'next';
    if (slideIndex === 0) position = 'active';
    if (slideIndex === data.length - 1) position = 'last';

    return `  <article class="slide ${position}">
    <img src=${img} class="img" alt=${name}>
    <h4>${name}</h4>
    <p class="title">${job}</p>
    <p class="text">${text}</p>
    <div class="quote-icon"><i class="fas fa-quote-right"></i></div>
  </article>`;
  })
  .join('');

const startSlider = (type) => {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling;

  if (!next) {
    next = container.firstElementChild;
  }

  active.classList.remove(['active']);
  last.classList.remove(['last']);
  next.classList.remove(['next']);

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;
    if (!next) next = container.lastElementChild;
    next.classList.add('last');
    next.classList.remove(['next']);
    return;
  }

  active.classList.add(['last']);
  last.classList.add(['next']);
  next.classList.add(['active']);
};

prevBtn.addEventListener('click', () => {
  startSlider('prev');
});

nextBtn.addEventListener('click', () => {
  startSlider();
});
