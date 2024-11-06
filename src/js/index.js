// Imports

import "../css/style.css";
import { indexImages, createDots, dotButtons } from "./auxFunctions";
import { dotImage, nextImage, previousImage } from "./DOMFunctions";

// Global variables

const imageContainer = document.querySelectorAll(".image-container img");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".prev");
export let imagesArray = [];

// Gather all images and push into array

for (let image of imageContainer) {
  imagesArray.push(image);
}

indexImages(imagesArray);
createDots(imagesArray);

// Set a timer to move to the next image after 5 seconds and stop if clicking anywhere
let timeOut = setInterval(nextImage, 5000);
window.addEventListener("click", () => clearInterval(timeOut));

// Event listeners

nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);
dotButtons.forEach((dot) => {
  dot.addEventListener("click", (event) => {
    dotImage(event);
  });
});
