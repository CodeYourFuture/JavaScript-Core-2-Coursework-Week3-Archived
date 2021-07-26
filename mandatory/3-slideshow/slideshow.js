//HTML Elements
let slideImage = document.getElementById('slideImage');
let forwardButton = document.getElementById('forward');
let backwardButton = document.getElementById('backward');
let autoBackButton = document.getElementById('autoBackward');
let autoForButton = document.getElementById('autoForward');

// Array of image paths
let imageArray = [
    "./image1.jpg",
    "./image2.jpg",
    "./image3.jpg"
];

//Index setter
let i = 0;

//Initiliazing the image when page loads
window.addEventListener('DOMContentLoaded', (e) => {
    slideImage.setAttribute('src', imageArray[0]);
});

//Manual Forward And Backward
forwardButton.addEventListener('click', (e) => {
    if (i < imageArray.length - 1) {
        i++;
        slideImage.setAttribute('src', imageArray[i]);
    }

    else if (i >= imageArray.length - 1) {
        i = 0;
        slideImage.setAttribute('src', imageArray[i]);
    }
});

backwardButton.addEventListener('click', (e) => {
    if (i <= 0) {
        i = imageArray.length - 1;
        slideImage.setAttribute('src', imageArray[i]);
    }

    else if (i <= imageArray.length - 1) {
        i--;
        slideImage.setAttribute('src', imageArray[i]);
    }
});

//Auto Forward And Backward
autoForButton.addEventListener('click', (e) => {
    let changeImage = setInterval(() => {
        if (i <= imageArray.length - 1) {
            slideImage.setAttribute('src', imageArray[i]);
            i++;
        }
    
        else if (i > imageArray.length - 1) {
            i = 0;
        }
    }, 1000);
});


autoBackButton.addEventListener('click', (e) => {
    let changeImage = setInterval(() => {
        if (i <= 0) {
            i = slideImage.length - 1;
            slideImage.setAttribute('src', imageArray[i]);

            console.log(i)
        }

        else if (i <= imageArray.length - 1) {
            slideImage.setAttribute('src', imageArray[i]);
            i--;

            console.log(i)
        }
    }, 1000);
});
