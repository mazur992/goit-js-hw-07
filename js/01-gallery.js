import { galleryItems } from "./gallery-items.js";

const divEl = document.querySelector(".gallery");
const createTagUl = document.createElement("ul");
divEl.append(createTagUl);

const listEl = document.querySelector("ul");
listEl.classList.add("gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item><a class="gallery__link><img loading="lazy" class="gallery__image" data-src=${original} src=${preview} alt=${description}></a></li>`
  )
  .join("");
listEl.insertAdjacentHTML("afterbegin", markup);

listEl.addEventListener("click", largeImg);
function largeImg(event) {
  if (event.target.nodeName != "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src=${event.target.dataset.src} >
`);
  instance.show();
}
