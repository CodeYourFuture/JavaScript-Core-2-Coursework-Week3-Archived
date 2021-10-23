// Write your code here
  let slider = document.getElementById("slider");
  let mySlides = document.querySelectorAll(".mySlides");
  let btnForward = document.querySelector("#forward");
  let btnBackward = document.querySelector("#backward");
  let btnAutoForward = document.querySelector("#autoForward");
  let btnAutoBackward = document.querySelector("#autoBackward");
  let btnStop = document.querySelector("#stop");
  slideIndex = 0;

  function reset() {    
        mySlides.forEach(slide => {
          slide.style.display = "none";
        })
  }
// initialize slider

function initialSlide(){
    reset();
    mySlides[0].style.display = "block";
 }
 
 //show forward

 function forward() {
   reset();
    if (slideIndex === mySlides.length - 1) {
      slideIndex = -1;
    }
   slideIndex++;
   mySlides[slideIndex].style.display = "block";
   
 }

 //show backward

 function backward() {
    reset();
    if (slideIndex === 0) {
      slideIndex = mySlides.length;
    }
    slideIndex--;
    mySlides[slideIndex].style.display = "block";
    
 }
 // forward click
 
 btnForward.addEventListener("click", function () {
  
   forward();
 });

 // backward click
 
btnBackward.addEventListener("click", function() {
    
    backward();
 })


initialSlide();
 //auto forward click

 let intervalID;
 let intervalID2;

btnAutoForward.addEventListener("click", function() {  
  intervalID = setInterval(forward, 1000);
})

//auto backward click

btnAutoBackward.addEventListener("click", function() { 
 intervalID2 = setInterval(backward, 1000); 
})


// button stop

btnStop.addEventListener("click", function() {
  clearInterval(intervalID);
  clearInterval(intervalID2);
})