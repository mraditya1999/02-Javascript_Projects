import get from './getElement.js';
import removeActive from './removeActive.js';

const userImg = get('.user-img');
const userTitle = get('.user-title');
const userValue = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = async (person) => {
  userImg.src = person.image;
  userValue.textContent = `${person.name}`;
  userTitle.textContent = `My name is`;
  removeActive(btns);
  btns[0].classList.add('active');

  btns.map((btn) => {
    btn.addEventListener('click', (e) => {
      const label = btn.dataset.label;
      userTitle.textContent = `My ${label} is`;
      userValue.textContent = person[label];
      removeActive(btns);
      btn.classList.add('active');
    });
  });
};

export default displayUser;
