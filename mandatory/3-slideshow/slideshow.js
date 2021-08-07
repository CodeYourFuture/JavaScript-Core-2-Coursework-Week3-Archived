let slider = document.getElementById("slider");
let images = document.querySelectorAll(".image img");
let imagesArray = Array.from(images);
let forwardBtn = document.getElementById("fowardBtnContainer");
let backwardBtn = document.getElementById("backwardBtnContainer");
let autoBackBtn = document.getElementById("autoBackBtn");
let autoFrontBtn = document.getElementById("autoFrontBtn");
let stopBtn = document.getElementById("stopBtn");

 let translateUnits = 0;
let addUnits = 1950;

function slideForward(){
        translateUnits += addUnits;
        if(translateUnits >= 5900){
            translateUnits = 0;
        } else {
            translateUnits = translateUnits;
        }
        
        slider.style.transform = `translate(-${translateUnits}px)`;
        slider.style.transition = "transform 1s linear";
        
}

function slideBackward(){
        translateUnits -= addUnits;
        if(translateUnits <= -1950){
            translateUnits = 5850;
        } else {
            translateUnits = translateUnits;
        }
        slider.style.transform = `translate(-${translateUnits}px)`;
        slider.style.transition = "transform 1s linear";
        console.log(translateUnits);
}

let autoForward = function(){
    setInterval(slideForward, 1500);
}

let autoBackward = function(){
    setInterval(slideBackward, 1500);
}


forwardBtn.addEventListener("click", slideForward);
backwardBtn.addEventListener("click", slideBackward);
autoBackBtn.addEventListener("click", function(){
    if(autoForward){
        clearInterval(autoForward);
        autoBackward();
    } else {
        autoBackward();
    }
});
autoFrontBtn.addEventListener("click", autoForward);
