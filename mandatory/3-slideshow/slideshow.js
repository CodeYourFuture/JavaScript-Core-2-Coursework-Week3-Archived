// Write your code here
let images = [
  "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=8",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1566633789773-e9c038cc0f8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
];

let image = document.getElementById("image");
// image.setAttribute("width", "80%");
// image.setAttribute("height", "350px");

let forwardBtn = document.getElementById("forward");
let backBtn = document.getElementById("back");

let index = 1;
let interval;


forwardBtn.addEventListener("click", ()=>{
    clearInterval(interval)
    image.setAttribute('src', images[index]);
    if (index == images.length-1){
        index = 0;
    }else{
        index++;
    }
})

backBtn.addEventListener("click", ()=>{
    clearInterval(interval);
    image.setAttribute("src", images[index]);
    index--;
    if (index <0){
        index = images.length-1;
    }

})


const autoForwardBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-back");
const stopBtn = document.getElementById("stop");

autoForwardBtn.addEventListener("click", ()=>{
    interval = setInterval(() => {
    image.setAttribute("src", images[index]);
    if (index == images.length - 1) {
        index = 0;
    } else {
        index++;
    }
    }, 2000);
});

autoBackBtn.addEventListener("click", () => {
  interval = setInterval(() => {
    image.setAttribute("src", images[index]);
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
  }, 2000);
});
 
stopBtn.addEventListener("click", ()=> {
    clearInterval(interval);
})

