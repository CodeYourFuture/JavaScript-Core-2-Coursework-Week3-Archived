// Write your code here
const imgContainer = document.querySelector('.images');
const autoBackBtn = document.querySelector('.auto-backBtn');
const backBtn = document.querySelector('.backBtn');
const stopBtn = document.querySelector('.stopBtn');
const forwardBtn = document.querySelector('.forwardBtn');
const autoForwardBtn = document.querySelector('.auto-forwardBtn');

let count = 0;

// Slideshow manual forward
const forwardSlide = () => {
    imgContainer.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 1000, fill: 'forwards'})
    if(count === 10) {
        count = -1;
    }
    count++;

    imgContainer.style.backgroundImage = `url(/mandatory/3-slideshow/img/bg-${count}.jpg`;
}

// Slideshow manual back
const backSlide = () => {
    imgContainer.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 1000, fill: 'forwards'})
    if (count === 0) {
        count = 11;
    }
    count--;

    imgContainer.style.backgroundImage = `url(/mandatory/3-slideshow/img/bg-${count}.jpg`;
}

// Auto forward slideshow
let slideIndex = 0;
let stopSlide;

const forwardSlideShow = () => {
    clearInterval(stopSlide);
    imgContainer.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 1000, fill: 'forwards'})
    for(let i = 0; i < imgContainer.length; i++) {
        imgContainer[i].style.display = 'none';
    }
    
    if(slideIndex === 9) {
        slideIndex = -1;
    }
    slideIndex++;
    imgContainer.style.backgroundImage = `url(/mandatory/3-slideshow/img/bg-${slideIndex}.jpg`;
    stopSlide = setInterval(forwardSlideShow, 2000);
}

// Auto back slideshow

const backSlideShow = () => {
    clearInterval(stopSlide)
    imgContainer.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 1000, fill: 'forwards'})
    for(let i = 0; i < imgContainer.length; i++) {
        imgContainer[i].style.display = 'none';
    }
    
    if(slideIndex === 0) {
        slideIndex = 10;
    }
    slideIndex--;
    imgContainer.style.backgroundImage = `url(/mandatory/3-slideshow/img/bg-${slideIndex}.jpg`;
    stopSlide = setTimeout(backSlideShow, 2000);
}

// Stop slideshow

const stopSlideShow = () => {
    clearInterval(stopSlide);
}

// EventListeners = buttons
backBtn.addEventListener('click', backSlide);
forwardBtn.addEventListener('click', forwardSlide);
autoForwardBtn.addEventListener('click', forwardSlideShow);
autoBackBtn.addEventListener('click', backSlideShow);
stopBtn.addEventListener('click', stopSlideShow);