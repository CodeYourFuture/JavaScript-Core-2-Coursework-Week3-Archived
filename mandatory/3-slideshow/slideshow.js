// Images 

let imgList = [
    'solar1.jpg',
    'solar2.jpg',
    'solar3.jpg',
    'solar4.jpg',
];

// get elements

let imgEl = document.querySelector("img");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let stopBtn = document.getElementById("stop");
let autobackBtn = document.getElementById("autoback");
let autoforwardBtn = document.getElementById("autoforward");


let interval = 0; // starting point
let time = 4000; //change slide every 4sec

//next button

function moveNext(){
    document.slide.src = imgList[interval];
    if(interval < imgList.length - 1){
        interval++;
    }
};
nextBtn.addEventListener('click', moveNext);

//previous button

function moveBack() {
    document.slide.src = imgList[interval];
    if (interval < imgList.length) {
        interval--;
    }
};
prevBtn.addEventListener("click", moveBack);
