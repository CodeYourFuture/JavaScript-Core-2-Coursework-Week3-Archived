// Write your code here
let images = [
    {
        src: "./Images/image-1.jpg",
        alt: "a green valley surrounded by white mountains"
    },
    {
        src: "./Images/image-2.jpg",
        alt: "a man on the top of a mountain at dawn time"
    },
    {
        src: "./Images/image-3.jpg",
        alt: "a white sand beach"
    },
    {
        src: "./Images/image-4.jpg",
        alt: "an old tree in a green field"
    }
]

let ourImage = document.querySelector(".our-image");

window.addEventListener("load", function () {                                  //Adding "load" event, so we get an image when the page is loaded
    ourImage.setAttribute('src', `${images[0].src}`);                          //If not added, there wont be a picture until a button is clicked
    ourImage.setAttribute('alt', `${images[0].alt}`);
})

let nextBtn = document.querySelector(".button-next");                          //Adding an event to the "Next" and "Previous" buttons
nextBtn.addEventListener("click", changeToImageNext);

let previousBtn = document.querySelector(".button-prev");
previousBtn.addEventListener("click", changeToImagePrev);

var photoIndex = 0;

function changeToImageNext() {
    if (photoIndex >= images.length - 1) photoIndex = -1;
    photoIndex++;
    getImg();
}

function changeToImagePrev() {
    if (photoIndex <= 0) photoIndex = images.length;
    photoIndex--;
    getImg();
}

function getImg() {
    ourImage.setAttribute('src', `${images[photoIndex].src}`);
    ourImage.setAttribute('alt', `${images[photoIndex].alt}`);
}

let autoPreviousBtn = document.querySelector(".button-auto-prev");             //Adding an event to the "Auto Previous" button
autoPreviousBtn.addEventListener("click", changeToAutoPrev);

let auto;

function changeToAutoPrev() {
    auto = setInterval(changeToImagePrev, 1500);                               //why is having "return" or no "return" does not make any difference
}

let autoNextBtn = document.querySelector(".button-auto-next");                 //Adding an event to the "Auto Next" button
autoNextBtn.addEventListener("click", changeToAutoNext);

function changeToAutoNext() {
    auto = setInterval(changeToImageNext, 1500);
}

let stopBtn = document.querySelector(".button-stop");                         //Adding an event to the "Stop" button
stopBtn.addEventListener("click", changeToStop);

function changeToStop() {
    clearInterval(auto)
}