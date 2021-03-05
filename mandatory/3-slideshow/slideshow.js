// Write your code here
// Selecting Elements and defining variables
let slides = document.getElementsByClassName('slide');
let forward = document.getElementById('forwardBtn');
let back = document.getElementById('backBtn');
let slideCounter = 0;
const totalSlides = slides.length;

// Selecting elements and defining variables for level 2 stop and autoplay buttons
let autoBack = document.querySelector('#auto-back');
let stopBtn =  document.querySelector('#stop');
let autoForward =  document.querySelector('#auto-forward');

// Event listeners
forward.addEventListener('click', nextSlide);
back.addEventListener('click', previousSlide);

// Additional event listeners
autoBack.addEventListener('click', autoReverse);
stopBtn.addEventListener('click', stopAutoSlide);
autoForward.addEventListener('click', autoPlay);


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

// A function to autoplay previous slides
let autoBk;
function autoReverse() {
   autoBk = setInterval(previousSlide, 2000);
}

// A function to autoplay forward
let auto;
function autoPlay() {
    auto = setInterval(nextSlide, 2000);
}

// A function to stop autoplay 
function stopAutoSlide() {
   clearInterval(autoBk);
   clearInterval(auto);
}