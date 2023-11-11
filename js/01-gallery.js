import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
gallery.addEventListener("click", handleClick);

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
    </a>
    </li>
    `).join("")
}

function handleClick(event) {
    event.preventDefault()
    if (event.target === event.currentTarget) {
        return;
    }
    const source = event.target.dataset.source;
    const altName = event.target.alt;
    const instance = basicLightbox.create(`<img src="${source}" alt="${altName}">`);
    instance.show();
    const keydownHandler = esc => {
    if (esc.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', keydownHandler);
    }
    };

    document.addEventListener('keydown', keydownHandler);

}