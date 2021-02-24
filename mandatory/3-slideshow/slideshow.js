// Write your code here

const images = [
    "https://cdn11.bigcommerce.com/s-tf2vn6/product_images/uploaded_images/pink-and-roses.jpg",
    "https://miro.medium.com/max/2560/1*aSVcqYXfcjpmIgBkBI4m3w.png",
    "https://dy1yydbfzm05w.cloudfront.net/media/folk/homepageblocks/image//h/p/hp-grid-01_2x_21.jpg",
    "https://www.growerdirect.com/uploads/thumbnails/flower%20varieties.jpg.7de9d680.jpg"
]

const carouselDiv = document.querySelector(".carousel");
const ctrlDiv = document.querySelector(".carousel-buttons");
const docFrag = document.createDocumentFragment();
const backButton = document.createElement("button");
const forwardButton = document.createElement("button");
const autoBackButton = document.createElement("button");
const autoForwardButton = document.createElement("button");
const stopButton = document.createElement("button");
const headerText = document.createElement("h1");


headerText.textContent = "Image Carousel";
backButton.textContent = "Back";
forwardButton.textContent = "Forward";
backButton.className = "controlButton";
forwardButton.className = "controlButton";
autoBackButton.textContent = "Auto Back";
autoBackButton.className = "controlButton";
autoForwardButton.textContent = "Auto Forward";
autoForwardButton.className = "controlButton";
stopButton.textContent = "Stop";
stopButton.className = "controlButton";

// ctrlDiv.appendChild(autoBackButton);
// ctrlDiv.appendChild(backButton);
// ctrlDiv.appendChild(stopButton)
// ctrlDiv.appendChild(forwardButton);
// ctrlDiv.appendChild(autoForwardButton);

document.body.prepend(headerText);
document.body.insertBefore(headerText, carouselDiv);
docFrag.appendChild(autoBackButton);
docFrag.appendChild(backButton);
docFrag.appendChild(stopButton)
docFrag.appendChild(forwardButton);
docFrag.appendChild(autoForwardButton);

ctrlDiv.appendChild(docFrag)

const defaultImg = document.createElement("img");
defaultImg.src = images[0];
defaultImg.alt = "flower";
carouselDiv.appendChild(defaultImg)

let counter = 0;
let stopInterval;

function forwardCarousel() {
    counter += 1;
    counter = counter % images.length;
    defaultImg.src = images[counter];
}

function backCarousel() {
    if (counter === 0) {
        counter = images.length;
    }
    counter -= 1;
    defaultImg.src = images[counter];
}

function autoBackCarousel() {
    clearInterval(stopInterval);
    stopInterval = setInterval(backCarousel, 2000);
}

function stopCarousel() {
    clearInterval(stopInterval);
}

function autoForwardCarousel() {
    clearInterval(stopInterval);
    stopInterval = setInterval(forwardCarousel, 2000);
}

forwardButton.addEventListener("click", forwardCarousel);

backButton.addEventListener("click", backCarousel);

autoBackButton.addEventListener("click", autoBackCarousel);

autoForwardButton.addEventListener("click", autoForwardCarousel);

stopButton.addEventListener("click", stopCarousel);