// ****** SELECT ITEMS **********\
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded', readFromLocalStorage);

// ****** FUNCTIONS **********

// Add Items
function addItem(e) {
  e.preventDefault();

  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createListItem(id, value);

    showAlert('item added to the list', 'success');
    groceryContainer.classList.add('show-container');
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    showAlert('value changed', 'success');
    updateToLocalStorage(editID, value);
    setBackToDefault();
  } else {
    showAlert('Value cannot be empty', 'danger');
  }
}

// Edit Item
function editItem(e) {
  const groceryItem = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = groceryItem.dataset.id;
  submitBtn.textContent = 'edit';
}

// Delete Item
function deleteItem(e) {
  const groceryItem = e.currentTarget.parentElement.parentElement;
  const groceryItemID = groceryItem.dataset.id;
  groceryList.removeChild(groceryItem);
  if (groceryList.children.length === 0)
    groceryContainer.classList.remove('show-container');
  showAlert('Item removed', 'danger');
  removeFromLocalStorage(groceryItemID);
  setBackToDefault();
}

// Clear All Items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');
  if (items) {
    items.forEach(function (item) {
      groceryList.removeChild(item);
    });
  }
  groceryContainer.classList.remove('show-container');
  showAlert('empty list', 'danger');
  localStorage.removeItem('list');
  setBackToDefault();
}

// Set  Back To Default
function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}

// Show Alert
function showAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //   Remove Alert
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// ****** LOCAL STORAGE **********
function readFromLocalStorage() {
  let list = JSON.parse(localStorage.getItem('list'));
  if (list.length > 0) {
    list.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    groceryContainer.classList.add('show-container');
  }
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let list = getLocalStorage();
  list.push(grocery);
  localStorage.setItem('list', JSON.stringify(list));
}

function removeFromLocalStorage(id) {
  let list = getLocalStorage();
  list = list.filter(function (item) {
    return item.id !== id;
  });
  localStorage.setItem('list', JSON.stringify(list));
}

function updateToLocalStorage(id, value) {
  let list = getLocalStorage();
  list = list.map(function (item) {
    if (item.id === id) item.value = value;
    return item;
  });
  localStorage.setItem('list', JSON.stringify(list));
}

// ****** SETUP ITEMS **********
function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

function createListItem(id, value) {
  const element = document.createElement('article');
  element.classList.add('grocery-item');
  element.setAttribute('data-id', id);
  element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>`;
  groceryList.appendChild(element);
  // ****************************  edit & delete ************************************
  const editBtn = element.querySelector('.edit-btn');
  const deleteBtn = element.querySelector('.delete-btn');
  editBtn.addEventListener('click', editItem);
  deleteBtn.addEventListener('click', deleteItem);
  // ***************************  edit & delete *************************************
}
