// Write your code here
const forwardBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const picture = document.getElementById("image");
const autoBack = document.getElementById("auto-back");
const autoNext = document.getElementById("auto-next");
const stopBtn = document.getElementById("stop");

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("image").src = picsArray[0];

    let currentSlide = 0;
    let timer = 5000;
    let newBack;
    let newNext;

    function forwardSlides() {
        if (currentSlide === picsArray.length - 1) {
            currentSlide = 0;
            picture.src = picsArray[0];
        } else {
            currentSlide++;
            picture.src = picsArray[currentSlide];
        }
    }

    function backwardSlides() {
        if (currentSlide <= 0) {
            picture.src = picsArray[picsArray.length - 1];
            currentSlide = picsArray.length - 1;
        }
    }

    nextBtn.addEventListener("click", forwardSlides);
    backBtn.addEventListener("click", backwardSlides);

    autoNext.addEventListener("click", () => {
        newNext = setInterval(forwardSlides, timer);
        clearInterval(() => {
            newNext;
        }, timer);
    });

    autoBack.addEventListener("click", () => {
        newBack = setInterval(backwardSlides, timer);
        clearInterval(() => {
            newBack;
        }, timer);
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(newNext);
        clearInterval(newBack);
    });
});