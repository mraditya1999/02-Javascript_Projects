import get from './utils/getElement.js';
import fetchUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');

const start = async () => {
  const person = await fetchUser();
  displayUser(person);
};

window.addEventListener('DOMContentLoaded', start);
btn.addEventListener('click', start);
