/*
# Level 1 Challenge

Make forward and back buttons to move _manually_ in that direction through a list of at least 4 images.
(e.g. When the user presses forward once, the display should move ONCE to the next image.)
You can use any images.
You can store the images within your app or you can use links to images hosted elsewhere ("hotlinking").

# Level 2 Challenge

Make auto-forward and auto-back buttons to _automatically_ move in that direction through the list of images.
*/// Write your code here

let flowers = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
];

let body = document.querySelector("body");
let main = document.createElement("div");
let header = document.createElement("h1");
header.innerHTML = "Image Carousel";
let image = document.createElement("img");

image.alt = "Photo of the flowers";
let buttonDiv = document.createElement("div");
buttonDiv.className = "buttons-container";
let backBtn = document.createElement("button");
backBtn.innerHTML = "Back";
let forwardBtn = document.createElement("button");
forwardBtn.innerHTML = "Forward";
let autoBackBtn = document.createElement("button");
autoBackBtn.innerHTML = "Auto Back";
let autoForwardBtn = document.createElement("button");
autoForwardBtn.innerHTML = "Auto Forward";
let stopBtn = document.createElement("button");
stopBtn.innerHTML = "Stop";



body.append(main, buttonDiv);
main.append(header, image,);
buttonDiv.append(autoBackBtn, backBtn, stopBtn, forwardBtn, autoForwardBtn);

let index = 1;
image.src = flowers[index];

forwardBtn.addEventListener("click", forward);
function forward() {
    index ++;
    if(index > flowers.length - 1) {
        index = 0;
    } 
    image.src = flowers[index];
};

backBtn.addEventListener("click", back);
function back() {
    index --;
    if(index < 0) {
        index = flowers.length - 1;
    } 
    image.src = flowers[index];
};

let interval = 0;
autoForwardBtn.addEventListener("click", () =>{
    interval = setInterval(forward, 1000);
});

autoBackBtn.addEventListener("click", () =>{
    interval = setInterval(back, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
})


    
    

