
let currentImageIndex = 0;
const images = ["person1.png", "person2.png", "person3.png", "person4.png"];

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageElement = document.getElementById("slideshowImage");
    imageElement.src = images[currentImageIndex];
}

