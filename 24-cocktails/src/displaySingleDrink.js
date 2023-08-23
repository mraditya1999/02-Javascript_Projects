import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displaySingleDrink = (data) => {
  hideLoading();
  const drink = data.drinks[0];

  const {
    strDrinkThumb: img,
    strDrink: title,
    strInstructions: description,
  } = drink;

  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];

  const image = get('.drink-img');
  const name = get('.drink-name');
  const desc = get('.drink-desc');
  const ingredients = get('.drink-ingredients');

  document.title = title;
  image.src = img;
  name.textContent = title;
  desc.textContent = description;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join('');
};

export default displaySingleDrink;
