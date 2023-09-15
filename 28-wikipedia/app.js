const url =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const ResultsContainerDOM = document.querySelector('.results');

formDOM.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = inputDOM.value;

  if (!value) {
    ResultsContainerDOM.innerHTML = `<div class="error">please enter valid search term</div>`;
    return;
  }

  fetchPages(value);
});

const fetchPages = async (searchValue) => {
  ResultsContainerDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(`${url}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;
    if (results.length < 1) {
      ResultsContainerDOM.innerHTML = `<div class="error">No matching results. please try again!</div>`;
      return;
    }
    renderResults(results);
  } catch (error) {
    ResultsContainerDOM.innerHTML = `<div class="error">There was an error...</div>`;
  }
};

const renderResults = (list) => {
  const cardList = list
    .map(({ title, pageid, snippet }) => {
      return `

    <a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
      <h4>${title}</h4>
      <p>${snippet}</p>
    </a>

    `;
    })
    .join('');

  ResultsContainerDOM.innerHTML = ` <div class="articles">
    ${cardList}
    </div>`;
};
