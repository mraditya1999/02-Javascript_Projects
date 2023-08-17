const url = 'https://icanhazdadjoke.com';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });

    if (!response.ok) {
      console.log(response);
      throw new Error('There was an error...');
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = error.message;
  }
};

fetchDadJoke();
btn.addEventListener('click', () => {
  fetchDadJoke();
});
