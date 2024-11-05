import "../css/style.css";

// Global variables

const imageContainer = document.querySelectorAll(".image-container img")
const nextButton = document.querySelector(".next")
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
    for (let index = 0; index < (imagesArray.length - 1); index++) {
        let nextImage;
        let currentImage = document.querySelector(`.number[data-image-number="${index}"]`);
        let computedStyle = window.getComputedStyle(currentImage);
        if (computedStyle.display === "block" && imagesArray[index] !== (imagesArray.length - 2)){
            console.log("condition 1")
            console.log("index: " + index)
            console.log("ImgArrayLen - 1: " + (imagesArray.length - 1))
            let nextIndex = index + 1
            nextImage = document.querySelector(`.number[data-image-number="${nextIndex}"]`);
            currentImage.style.display = "none";
            nextImage.style.display = "block";
            break;
        }
        else if (computedStyle.display === "block" && imagesArray[index] === (imagesArray.length - 1)){
            console.log("condition 2")
            nextImage = document.querySelector(`.number[data-image-number="0"]`);
            currentImage.style.display = "none";
            nextImage.style.display = "block"
            break;
        }
    }
}

nextButton.addEventListener("click", nextImage)