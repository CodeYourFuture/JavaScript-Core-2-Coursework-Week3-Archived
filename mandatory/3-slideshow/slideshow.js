// Write your code here
let imageEl= document.getElementById("image");
let image=1;

function forward(){
    if (image>15){
    image=1;
    imageEl.src=`example-screenshots/${image}.jpg`;
    }
    else {
    image++;
    imageEl.src=`example-screenshots/${image}.jpg`;
    }
}

function backward(){
    if (image<2){
    image=16;
    imageEl.src=`example-screenshots/${image}.jpg`;
    }
    else {
    image--;
    imageEl.src=`example-screenshots/${image}.jpg`;
    }
}



function autoForward(){
    afTimer = setInterval(function(){
    if (image>15){
    image=1;
    imageEl.src=`example-screenshots/${image}.jpg`;
    }
    else {
    image++;
    imageEl.src=`example-screenshots/${image}.jpg`;
    }
}, 2500);
}

function autoBackward(){
    abTimer = setInterval(function(){
    if (image<2){
    image=16;
    imageEl.src=`example-screenshots/${image}.jpg`;
    }
    else {
    image--;
    imageEl.src=`example-screenshots/${image}.jpg`;
    }
}, 2500);
}

function stop(){
clearInterval(afTimer);
clearInterval(abTimer);
}




document.getElementById("Forward").addEventListener("click",forward);
document.getElementById("AutoForward").addEventListener("click",autoForward);
document.getElementById("Backward").addEventListener("click",backward);
document.getElementById("Stop").addEventListener("click",stop);
document.getElementById("AutoBack").addEventListener("click",autoBackward);
