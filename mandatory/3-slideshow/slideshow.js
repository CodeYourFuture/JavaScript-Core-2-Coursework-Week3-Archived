// Write your code here
// Selecting Elements and defining variables
let slides = document.getElementsByClassName('slide');
let visible = document.getElementsByClassName('slide-visible');
let hidden = document.getElementsByClassName('slide-hidden')
let forward = document.getElementById('forwardBtn');
let back = document.getElementById('backBtn');
let slideCounter = 0;
const totalSlides = slides.length;

// Event listeners
forward.addEventListener('click', nextSlide);
back.addEventListener('click', previousSlide);

// A function to hide every image apart from the one displayed
function slideUpdater () {
    for (let slide of slides) {
        slide.classList.remove('slide-visible');
        slide.classList.add('slide-hidden'); 
    }
    slides[slideCounter].classList.add('slide-visible');
}

// A function to move the slide to the next image
function nextSlide() {
    if (slideCounter === totalSlides - 1 ) {
        slideCounter = 0;
    } else {
        slideCounter++;
    }
    slideUpdater();
}

// A function to move the slide to the previous image
function previousSlide() {
    if (slideCounter === 0) {
        slideCounter = totalSlides -1;
    } else {
        slideCounter--;
    }
    slideUpdater();
}
