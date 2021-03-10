const london = [
    {
        location: "London Bridge",
        img: "https://images.unsplash.com/photo-1613505151299-3a1ab3dc4e44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80",
        description: " ",
    },
    {
        location: "London Eye",
        img: "https://images.unsplash.com/photo-1576323965255-ae983d12f8c4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvbmRvbiUyMGV5ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        description: " ",
    },
    {
        location: "Buckingham Palace",
        img: "https://images.unsplash.com/photo-1556821862-33ec0be5c2c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1Y2tpbmdoYW0lMjBwYWxhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        description: " ",
    },
    {
        location: "Big Ben",
        img: "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJpZyUyMGJlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        description: " ",
    }
]

// Selectors
const autoBack = document.querySelector(".auto-back");
const back = document.querySelector(".back");
const stop = document.querySelector(".stop");
const forward = document.querySelector(".forward");
const autoForward = document.querySelector(".auto-forward");
const img = document.querySelector("img");
const counter = document.querySelector(".counter");
const place = document.querySelector(".place")
let currentImage = 0;
img.src = london[currentImage].img;
place.innerHTML = london[currentImage].location;
counter.innerHTML = `Picture: ${currentImage + 1}`
let timeInterval;

// Events
back.addEventListener("click", goBack);
forward.addEventListener("click", goForward);
stop.addEventListener("click", hold);
autoBack.addEventListener("click", autoBackward);
autoForward.addEventListener("click", autoGoForward);

// Functions
function goBack() {
    if (currentImage == 0) {
        currentImage = london.length - 1;
    } else {
        currentImage--;
    }
    img.src = london[currentImage].img;
    place.innerHTML = london[currentImage].location;
    counter.innerHTML = `Picture: ${currentImage + 1}`
}

function goForward() {
    if (currentImage == london.length - 1) {
        currentImage = 0;
    } else {
        currentImage++;
    }
    img.src = london[currentImage].img;
    place.innerHTML = london[currentImage].location;
    counter.innerHTML = `Picture: ${currentImage + 1}`
}

function hold() {
    clearInterval(timeInterval);
}

function autoBackward() {
    hold();
    timeInterval = setInterval(goBack, 2000)
}

function autoGoForward() {
    hold();
    timeInterval = setInterval(goForward, 2000)
}
