// Write your code here
let images = [
    {
        src: 'images/01.jpg',
        alt: 'image 01',
    },
    {
        src: 'images/02.jpg',
        alt: 'image 02',
    },
    {
        src: 'images/03.jpg',
        alt: 'image 03',
    },
    {
        src: 'images/04.jpg',
        alt: 'image 04',
    },
];

let slides = document.getElementById('slides');
let backButton = document.getElementById('back');
let forwardButton = document.getElementById('forward');
let imgLength = images.length;
let counter = 0;

function forward () {
    goToSlide(images, counter + 1);
}

function back () {
    goToSlide(images, counter - 1);
}

function goToSlide (images, n) {
    let img = document.createElement('img');
    console.log('2' + counter);
    counter = (n+images.length)%images.length;
    console.log('2' + counter);
    img.setAttribute('src', images[n].src);
    img.setAttribute('alt', images[n].alt);
    slides.appendChild(img);
}

goToSlide(images, counter);

forwardButton.addEventListener('click', () => {
    forward();
})

backButton.addEventListener('click', () => {
    back();
})
