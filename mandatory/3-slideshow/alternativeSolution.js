
// This is a great solution to the issue of both the autoForward 
// and autoBack buttons running at the same time, very clean ! 
// I was having big issues with using the clearInterval method on 
// the autoForwardBtn and autoBackBtn due to scoping issues. I 
// really like how you have defined your clearImage variable in the 
// global scope, so that when you call on it in your functions it 
// will work even when the setInterval method is run in a seperate 
// function !!! Nice Job.


const stopBtn = document.getElementById("stopBtn");
let clearImage;

function stop() {
  clearInterval(clearImage);
}
stopBtn.addEventListener("click", stop);

const autoBackBtn = document.getElementById("auto-backBtn");
autoBackBtn.addEventListener("click", () => {
  stop();
  clearImage = setInterval(back, 1000);
});

const autoForwardBtn = document.getElementById("auto-forwardBtn");
autoForwardBtn.addEventListener("click", () => {
  stop();
  clearImage = setInterval(forward, 1000);
});



