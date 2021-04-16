// Write your code here

let images = [
    "https://images.unsplash.com/photo-1570110471642-dba8ae2241d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHx0ZW5uaXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1595057602304-8b54f16dc1b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    "https://images.unsplash.com/photo-1600300405814-76762ab164d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRlbm5pc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlbm5pc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1599586120566-886c39306895?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRlbm5pc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
    

let headingElement = document.getElementById("heading")
console.log("headingElement =", headingElement);

let imageElement = document.getElementById("image");
console.log("imageElement =", imageElement);
    
let autoBackBtn = document.getElementById("auto-back");
console.log("autoBackBtn =", autoBackBtn);

let backBtn = document.getElementById("back");
console.log("backBtn =", backBtn);

let stopBtn = document.getElementById("stop");
console.log("stopBtn =", stopBtn);

let autoForwardBtn = document.getElementById("auto-forward");
console.log("autoForwardBtn =", autoForwardBtn);

let forwardBtn = document.getElementById("forward");
console.log("forwardBtn =", forwardBtn);

//  Where images will start.
let imageCounter = 0;

//  Callback function for click event.
function forward() {
    console.log("images.length-1 =",images.length);
    if (imageCounter === images.length - 1) {
        imageElement.src = images[imageCounter];
    } else {
        imageCounter++; //  Incrementing the index by 1 on every iteration.
        imageElement.src = images[imageCounter];
    }
}

//  Callback function for click event.
function back() {
    if (imageCounter === images.length - 1) {    //  -1 Becasue Index starts at 0.
        imageElement.src = images[imageCounter];
    } else {
        imageCounter--; //  Decrementing the index by 1 on every iteration.
        imageElement.src = images[imageCounter];
    }
}

forwardBtn.addEventListener("click", forward);
backBtn.addEventListener("click", back);