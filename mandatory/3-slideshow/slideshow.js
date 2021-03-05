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
    "https://images.unsplash.com/photo-1463554050456-f2ed7d3fec09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGZsb3dlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1505129013025-ecf8f0168373?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGZsb3dlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1476994230281-1448088947db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3dlcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
    "https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2Vyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
]

let body = document.querySelector("body");
let main = document.createElement("div");
let header = document.createElement("h1");
header.innerHTML = "Image Carousel";
let image = document.createElement("img");

image.alt = "Photo of the flowers";
let buttonDiv = document.createElement("div");
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

body.appendChild(main);
body.appendChild(buttonDiv)
main.appendChild(header);
main.appendChild(image);
buttonDiv.appendChild(autoBackBtn);
buttonDiv.appendChild(backBtn);
buttonDiv.appendChild(stopBtn);
buttonDiv.appendChild(forwardBtn);
buttonDiv.appendChild(autoForwardBtn);


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
// let timeScale = input.value;
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


    
    

