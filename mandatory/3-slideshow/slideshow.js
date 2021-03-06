//Array of Images:
let CatImages = [
"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
"https://images.unsplash.com/photo-1577824816013-baa2fbd2fe88?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=975&q=80",
"https://images.unsplash.com/photo-1570018143689-da56c03691cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
"https://images.unsplash.com/photo-1570018144929-a2e84642b98d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1016&q=80",
]
//Setting up HTML structure:
let body = document.querySelector("body");
let mainSection = document.createElement("div");
body.appendChild(mainSection);

let heading1 = document.createElement("h1");
heading1.innerHTML = "Image Carasolev - Level 1";
mainSection.appendChild(heading1);

let image1 = document.createElement("img");
mainSection.appendChild(image1);

let divForButton1 = document.createElement("div");
mainSection.appendChild(divForButton1);

let forwardButton = document.createElement("button");
forwardButton.innerHTML = "Next";
divForButton1.appendChild(forwardButton);

let backwardButton = document.createElement("button");
backwardButton.innerHTML = "Previous";
divForButton1.appendChild(backwardButton);

let autoForwardButton = document.createElement("button");
autoForwardButton.innerHTML = "Automatically display next image";
divForButton1.appendChild(autoForwardButton);

let autoBackwardButton = document.createElement("button");
autoBackwardButton.innerHTML = "Automatically display previous images";
divForButton1.appendChild(autoBackwardButton);

let stopButton = document.createElement("button");
stopButton.innerHTML = "Stop";
divForButton1.appendChild(stopButton);

let indexOfImages = 1;
image1.src = catImages[indexOfImages];

backwardButton.addEventListener("click", previous)
function previous() {
    indexOfImages--;
    if (indexOfImages < 0) {
        indexOfImages = catImages.length - 1;
    }
}
forwardButton.addEventListener("click", next)
function next() {
    indexOfImages++
    if (indexOfImages > catImages.length) {
        indexOfImages = catImages[0];
    }
}
let timeInterval = 0
autoBackwardButton.addEventListener("click", autoPrevious)
function autoPrevious() {
    timeInterval = setInterval(previous, 2000);
}

autoForwardButton.addEventListener("click", autoNext)
function autoNext() {
    timeInterval = setInterval(next, 2000);
}

stopButton.addEventListener("click", stopAuto)
function stopAuto() {
    clearInterval(timeInterval);
}


