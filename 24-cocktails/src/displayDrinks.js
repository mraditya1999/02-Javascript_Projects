import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');
  const loading = get('.loading');

  if (!drinks) {
    hideLoading();
    loading.classList.add('hide-loading');
    title.textContent = `Sorry, No Drinks Matched Your Search`;
    section.innerHTML = null;
    return;
  }

  title.textContent = '';
  section.innerHTML = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: title, strDrinkThumb: img } = drink;
      return `  <a href="./drink.html">
    <article class="cocktail" data-id="${id}">
    <img src="${img}" alt="${title}">
    <h3>${title}</h3>
    </article>
    </a>`;
    })
    .join('');

  hideLoading();
  return section;
};

export default displayDrinks;
