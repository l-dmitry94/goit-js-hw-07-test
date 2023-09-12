import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
let instance = null;

const createGallery = () => {
    let items = '';
    galleryItems.forEach(galleryItem => {
        items += `
        <li class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img
                    class="gallery__image"
                    src="${galleryItem.preview}"
                    data-source="${galleryItem.original}"
                    alt="${galleryItem.description}"
                />
            </a>
        </li>
        `;
    })

    gallery.innerHTML = items;
}

createGallery();


const delegationGallery = event => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const urlImage = event.target.dataset.source;

    instance = basicLightbox.create(`
        <img src="${urlImage}" width="800" height="600">
    `)

    instance.show()
}

gallery.addEventListener("click", delegationGallery);

const closeModal = (event) => {
    if(event.key === "Escape" && instance) {
        instance.close();
    }
    else {
        document.removeEventListener("keydown", closeModal);
    }
}

document.addEventListener("keydown", closeModal)
