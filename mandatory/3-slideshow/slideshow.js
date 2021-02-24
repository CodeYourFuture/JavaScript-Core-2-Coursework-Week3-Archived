// Write your code here
// array of pictures
const arrayOfPictures = [
    "https://images.pexels.com/photos/2555589/pexels-photo-2555589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/6931284/pexels-photo-6931284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/3483966/pexels-photo-3483966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/6341413/pexels-photo-6341413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

// html button selection linked in with html
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const image = document.getElementById("image");
const autoBack = document.getElementById("backAuto");
const autoNext = document.getElementById("nextAuto");
const stopBtn = document.getElementById("stop");

// state/Global variabes
let currentSlide = 0;
let newNext;
let newBack;
// slide forward function
function slidesForward() {
    if (currentSlide === arrayOfPictures.length - 1) {
        currentSlide = 0;
        image.src = arrayOfPictures[0];
    } else {
        currentSlide++;
        image.src = arrayOfPictures[currentSlide];
    }
}

// Slide Backward function/ if and else
function slidesBackward() {
    if (currentSlide <= 0) {
        image.src = arrayOfPictures[arrayOfPictures.length - 1];
        currentSlide = arrayOfPictures.length - 1;
    } else {
        currentSlide--;
        image.src = arrayOfPictures[currentSlide];
    }
}
// eventlistener for clicks auto next
autoNext.addEventListener("click", () => {
    clearInterval(newNext);
    clearInterval(newBack);
    newNext = setInterval(slidesForward, 4000);
});
// events listenr to go back
autoBack.addEventListener("click", () => {
    clearInterval(newBack);
    clearInterval(newNext);
    newBack = setInterval(slidesBackward, 4000);
});
// stop button works on the interval
stopBtn.addEventListener("click", () => {
    clearInterval(newBack);
    clearInterval(newNext);
});
// normal button back and next
nextBtn.addEventListener("click", slidesForward);
backBtn.addEventListener("click", slidesBackward);