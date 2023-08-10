let filteredProducts = [...products];
const productsContainer = document.querySelector('.products-container');
const inputForm = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const companiesDOM = document.querySelector('.companies');

// Display Products
const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry,No products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<article class="product" data-id="${id}">
    <img src=${image} alt=${title} class="product-img img">
    <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product price">${price}</span>
    </footer>
  </article>`;
    })
    .join('');
};

// Form Eventlistener
inputForm.addEventListener('keyup', (e) => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// Filter Buttons
const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];

  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join('');

  const companyBtns = companiesDOM.querySelectorAll('.company-btn');

  companyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const company = e.currentTarget.dataset.id;

      filteredProducts = products.filter((product) => {
        if (company === 'all') return products;
        return product.company === company;
      });
      searchInput.value = '';
      displayProducts();
    });
  });
};

displayButtons();
displayProducts();
