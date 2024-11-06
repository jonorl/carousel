import "../css/style.css";

// Global variables

const imageContainer = document.querySelectorAll(".image-container img")
const nextButton = document.querySelector(".next")
const previousButton = document.querySelector(".prev")
let imagesArray = []

// Event listeners

for (let image of imageContainer){
    imagesArray.push(image)
}

function indexImages(arr) {
    arr.forEach((image, index) => {    
        image.setAttribute(`data-image-number`, index)
    })
}

indexImages(imagesArray);

function nextImage (){
    for (let index = 0; index < imagesArray.length; index++) {
        let nextImage;
        let currentImage = document.querySelector(`.number[data-image-number="${index}"]`);
        let computedStyle = window.getComputedStyle(currentImage).getPropertyValue("display");
        if (computedStyle === "block" && index !== (imagesArray.length - 1)){
            let nextIndex = index + 1
            nextImage = document.querySelector(`.number[data-image-number="${nextIndex}"]`);
            currentImage.style.display = "none";
            nextImage.style.display = "block";
            break;
        }
        else if (computedStyle === "block" && index === (imagesArray.length - 1)){
            nextImage = document.querySelector(`.number[data-image-number="0"]`);
            currentImage.style.display = "none";
            nextImage.style.display = "block"
            break;
        }
    }
}

function previousImage(){
    for (let index = 0; index < imagesArray.length; index++) {
        let nextImage;
        let currentImage = document.querySelector(`.number[data-image-number="${index}"]`);
        let computedStyle = window.getComputedStyle(currentImage).getPropertyValue("display");
        if (computedStyle === "block" && index === 0){
            nextImage = document.querySelector(`.number[data-image-number="${(imagesArray.length - 1)}"]`);
            currentImage.style.display = "none";
            nextImage.style.display = "block"
            break;
        }
        else if (computedStyle === "block" && index !== 0){
            let nextIndex = index - 1
            nextImage = document.querySelector(`.number[data-image-number="${nextIndex}"]`);
            currentImage.style.display = "none";
            nextImage.style.display = "block";
            break;
        }
    }
}

nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);