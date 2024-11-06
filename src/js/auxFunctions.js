// Global variables

export let dotButtons;

// Auxiliary functions

export function indexImages(arr) {
  arr.forEach((image, index) => {
    image.setAttribute(`data-image-number`, index);
  });
}

export function createDots(arr) {
  arr.forEach((image, index) => {
    const dot = document.createElement("div");
    dot.setAttribute(`data-image-number`, index);
    dot.setAttribute("class", "dot");
    const dotImageSelectors = document.querySelector(".dotImageSelectors");
    dotImageSelectors.appendChild(dot);
    dotButtons = document.querySelectorAll(".dot");
  });
}
