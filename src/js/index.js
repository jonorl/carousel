import "../css/style.css";

// Global variables

const imageContainer = document.querySelectorAll(".image-container img")
const nextButton = document.querySelector(".next")
// Event listeners

nextButton.addEventListener("click", nextImage)


function nextImage() {

    for (let image of imageContainer){
        let token = false

        if (image.style.display === "none" && token === false) {
            image.style.display = "block";
            token = true;
        }
        else {
            image.style.display = "none";
            token = false;
            break;
        }
    };
}