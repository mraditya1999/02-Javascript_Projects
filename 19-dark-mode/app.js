const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});

articlesContainer.innerHTML = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formattedDate = moment(date).format('MMM Do YY');

    return ` <article class="post">
    <h2>${title}</h2>
    <div class="post-info">
      <span>${formattedDate}</span>
      <span>${length} min read</span>
      <p>
      ${snippet}
      </p>
    </div>
  </article>`;
  })
  .join('');
