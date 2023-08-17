const url = `https://course-api.com/javascript-store-single-product`;
const productDOM = document.querySelector('.product');

const fetchProduct = async () => {
  productDOM.innerHTML = `<div class="loading"></div>`;

  //   getting single details from params
  const params = new URLSearchParams(window.location.search);
  //   getting only id param,not extra params
  const id = params.get('id');

  try {
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">There was a problem loading the product. Please try again later!!</p>`;
  }
};

const displayProduct = (product) => {
  const { name: title, company, price, colors, description } = product.fields;
  const { url: img } = product.fields.image[0];
  const formatPrice = price / 100;
  document.title = title.toUpperCase();

  const colorsList = colors
    .map(
      (color) =>
        `<span class="product-color" style="background: ${color};"></span>`
    )
    .join('');

  productDOM.innerHTML = `
  <div class="product-wrapper">
    <img src="${img}" alt="${title}" class="img">
    <div class="product-info">
        <h3>${title}</h3>
        <h5>${company}</h5>
        <span>$${formatPrice}</span>
        <div class="colors">
        ${colorsList}
        </div>
        <p>${description}</p>
        <button type="button" class="btn">add to cart</button>
    </div>
</div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
