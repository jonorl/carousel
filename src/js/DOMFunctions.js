// Imports

import { imagesArray } from "./index";

// DOM functions

export function dotImage(event) {
  imagesArray.forEach((image) => {
    image.style.display = "none";
  });
  let dataAttribute = event.target.getAttribute("data-image-number");
  let currentImage = document.querySelector(
    `.number[data-image-number="${dataAttribute}"]`
  );
  currentImage.style.display = "block";
}

export function nextImage() {
  for (let index = 0; index < imagesArray.length; index++) {
    let nextImage;
    let currentImage = document.querySelector(
      `.number[data-image-number="${index}"]`
    );
    let computedStyle = window
      .getComputedStyle(currentImage)
      .getPropertyValue("display");
    if (computedStyle === "block" && index !== imagesArray.length - 1) {
      let nextIndex = index + 1;
      nextImage = document.querySelector(
        `.number[data-image-number="${nextIndex}"]`
      );
      currentImage.style.display = "none";
      nextImage.style.display = "block";
      break;
    } else if (computedStyle === "block" && index === imagesArray.length - 1) {
      nextImage = document.querySelector(`.number[data-image-number="0"]`);
      currentImage.style.display = "none";
      nextImage.style.display = "block";
      break;
    }
  }
}

export function previousImage() {
  for (let index = 0; index < imagesArray.length; index++) {
    let nextImage;
    let currentImage = document.querySelector(
      `.number[data-image-number="${index}"]`
    );
    let computedStyle = window
      .getComputedStyle(currentImage)
      .getPropertyValue("display");
    if (computedStyle === "block" && index === 0) {
      nextImage = document.querySelector(
        `.number[data-image-number="${imagesArray.length - 1}"]`
      );
      currentImage.style.display = "none";
      nextImage.style.display = "block";
      break;
    } else if (computedStyle === "block" && index !== 0) {
      let nextIndex = index - 1;
      nextImage = document.querySelector(
        `.number[data-image-number="${nextIndex}"]`
      );
      currentImage.style.display = "none";
      nextImage.style.display = "block";
      break;
    }
  }
}
