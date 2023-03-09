import { galleryItems } from "./gallery-items.js";

const listEl = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a rel="noopener noreferrer" class="gallery__link" href=${original}><img loading="lazy" class="gallery__image" src=${preview} alt=${description
        .split(" ")
        .join("_")}></a></li>`
  )
  .join("");
listEl.insertAdjacentHTML("afterbegin", markup);

new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
});
