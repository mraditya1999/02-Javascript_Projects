// helper function
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery {
  constructor(element) {
    // elements
    this.container = element;
    this.list = [...element.querySelectorAll('.img')];

    // Target elements
    this.modal = getElement('.modal');
    this.modalImg = getElement('.main-img');
    this.imageName = getElement('.image-name');
    this.modalImages = getElement('.modal-images');

    // btns
    this.closeBtn = getElement('.close-btn');
    this.prevBtn = getElement('.prev-btn');
    this.nextBtn = getElement('.next-btn');

    // bind events
    this.closeModal = this.closeModal.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.choseImage = this.choseImage.bind(this);

    // Event Listener
    this.container.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('img'))
          this.openModal(e.target, this.list);
      }.bind(this)
    );
  }

  // Add Methods On Prototype
  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
      .map(function (image) {
        return `<img src=${
          image.src
        } alt="${image.alt}" title="${image.title}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}" data-id="${image.dataset.id}">`;
      })
      .join('');
    this.modal.classList.add('open');
    this.closeBtn.addEventListener('click', this.closeModal);
    this.prevBtn.addEventListener('click', this.prevImage);
    this.nextBtn.addEventListener('click', this.nextImage);
    this.modalImages.addEventListener('click', this.choseImage);
  }

  closeModal() {
    this.modal.classList.remove('open');
    this.closeBtn.removeEventListener('click', this.closeModal);
    this.prevBtn.removeEventListener('click', this.prevImage);
    this.nextBtn.removeEventListener('click', this.nextImage);
    this.modalImages.removeEventListener('click', this.choseImage);
  }

  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
  }

  prevImage() {
    const selected = this.modalImages.querySelector('.selected');
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    this.setMainImage(prev);
  }

  nextImage() {
    const selected = this.modalImages.querySelector('.selected');
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove('selected');
    next.classList.add('selected');
    this.setMainImage(next);
  }

  choseImage(e) {
    if (e.target.classList.contains('modal-img')) {
      const selected = this.modalImages.querySelector('.selected');
      selected.classList.remove('selected');

      this.setMainImage(e.target);
      e.target.classList.add('selected');
    }
  }
}

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
