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
    for (let index = 0; index < (imagesArray.length); index++) {
        let nextImage;
        let currentImage = document.querySelector(`.number[data-image-number="${index}"]`);
        let computedStyle = window.getComputedStyle(currentImage).getPropertyValue("display");
        console.log("display: " + computedStyle)
        console.log("index: " + index +  " ImgArrayLen: " + (imagesArray.length))
        if (computedStyle === "block" && index !== (imagesArray.length - 1)){
            console.log("condition 1")
            let nextIndex = index + 1
            nextImage = document.querySelector(`.number[data-image-number="${nextIndex}"]`);
            currentImage.style.display = "none";
            nextImage.style.display = "block";
            break;
        }
        else if (computedStyle === "block" && index === (imagesArray.length - 1)){
            console.log("condition 2")
            nextImage = document.querySelector(`.number[data-image-number="0"]`);
            currentImage.style.display = "none";
            nextImage.style.display = "block"
            break;
        }
        else console.log("condition 3")
    }
}

nextButton.addEventListener("click", nextImage)