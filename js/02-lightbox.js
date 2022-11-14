import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerImg = document.querySelector(".gallery");
const imgCreateInHtml = createImgGallery(galleryItems);
containerImg.insertAdjacentHTML("beforeend", imgCreateInHtml);
function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join("");
}
containerImg.addEventListener('click', onContainerImgClick);

function onContainerImgClick(event) {
    event.preventDefault();
}

    var lightbox = new SimpleLightbox('ul.gallery a', { captionsData: 'alt', captionsDelay: 250})

