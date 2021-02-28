// Write your code here

const imgTargets = document.querySelector('.img');

//slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const btnAutoSlides = document.querySelector('.btn__auto--off--on')

let curSlide = 0;
const maxSlide = slides.length;


//helper function

// UI effect of changing slides 
const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
}
goToSlide(curSlide);

// Next slide f
const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++
    }
    goToSlide(curSlide);
}

//previous slide f
const previousSlide = function () {
    if (curSlide <= 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
}

const dataSetAutoSlides = function () {
    btnAutoSlides.dataset.state = btnAutoSlides.dataset.state === 'true'
        ? 'false' : 'true';

    btnAutoSlides.textContent = btnAutoSlides.textContent === `Auto OFF`
        ? `Auto ON` : `Auto OFF`
}


// Auto function and state variable: sliding
let sliding;
const autoSlides = function () {
    if (btnAutoSlides.dataset.state === 'true') {
        sliding = setInterval(nextSlide, 500);
        dataSetAutoSlides();
    } else {
        clearInterval(sliding)
        dataSetAutoSlides();
    }
}

// Added events
btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', previousSlide)
btnAutoSlides.addEventListener('click', autoSlides)
