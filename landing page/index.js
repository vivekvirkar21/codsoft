
const images = ['background.jpg', 'background1.jpg', 'background2.jpg'];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('sliderImage').src = images[currentImageIndex];
}


