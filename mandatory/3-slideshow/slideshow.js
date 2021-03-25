// Write your code here
let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");
let image4 = document.getElementById("img4");
let image5 = document.getElementById("img5");
let image6 = document.getElementById("img6");
let image7 = document.getElementById("img7");
let image8 = document.getElementById("img8");

let backBtn = document.getElementById("back");
let fwdBtn = document.getElementById("fwd");
let autoFwd = document.getElementById("autoFwd");
let autoBck = document.getElementById("autoBack");
let stopBtn = document.getElementById("stop");

let imgArray = [image1, image2, image3, image4, image5, image6, image7, image8];

window.addEventListener("load", ()=>{
    imgArray[0].style.display = "block";
});

let counter = 0;

function slideShowFwd (){
    // console.log(counter);
    if (counter < (imgArray.length -1)){
    imgArray[counter].style.display = "none";
    counter ++;
    imgArray[counter].style.display = "block";
    }else {
        counter = 0;
        imgArray[imgArray.length -1].style.display = "none";
        imgArray[counter].style.display = "block";
    }
}

fwdBtn.addEventListener("click", slideShowFwd);

function slideShowBck (){
    // console.log(counter);
     if (counter > 0){
    imgArray[counter].style.display = "none";
    counter --;
    imgArray[counter].style.display = "block";
    }else {
        counter = imgArray.length -1;
        imgArray[0].style.display = "none";
        imgArray[counter].style.display = "block";
    }
}

backBtn.addEventListener("click", slideShowBck);

function autoForward(){
    setInterval(slideShowFwd ,1000);
}

autoFwd.addEventListener("click", autoForward);

function autoBack(){
    setInterval(slideShowBck ,1000);
}

function stopAuto (){
    console.log(counter);
    clearInterval(autoForward);
    clearInterval(autoBack);
}

autoBck.addEventListener("click", autoBack);

stopBtn.addEventListener("click", stopAuto);
