import "../css/style.css";

// Global variables

const imageContainer = document.querySelectorAll(".image-container img");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".prev");
let dotButtons;
let imagesArray = [];

// Gather all images and push into array

for (let image of imageContainer) {
  imagesArray.push(image);
}

indexImages(imagesArray);
createDots(imagesArray);

// Event listeners

nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);
dotButtons.forEach(dot => {
    dot.addEventListener("click", (event) =>{
        dotImage(event);
    })
});

// Auxiliary functions

function indexImages(arr) {
    arr.forEach((image, index) => {
      image.setAttribute(`data-image-number`, index);
    });
  }
  
  function createDots(arr){
      arr.forEach((image, index) => {
          const dot = document.createElement("div");
          dot.setAttribute(`data-image-number`, index);
          dot.setAttribute('class', 'dot')
          const dotImageSelectors = document.querySelector('.dotImageSelectors');
          dotImageSelectors.appendChild(dot);
          dotButtons = document.querySelectorAll(".dot");
  });
  }

// DOM functions

function dotImage(event){

    imagesArray.forEach(image => {
        image.style.display = "none";
    });
    let dataAttribute =  event.target.getAttribute("data-image-number");
    let currentImage = document.querySelector(`.number[data-image-number="${dataAttribute}"]`);
    currentImage.style.display = "block";
}

function nextImage() {
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

function previousImage() {
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
