// Write your code here
  let slider = document.getElementById("slider");
  let mySlides = document.querySelectorAll(".mySlides");
  let btnForward = document.querySelector("#forward");
  let btnBackward = document.querySelector("#backward");
  
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
   mySlides[slideIndex + 1].style.display = "block";
   slideIndex++;
 }

 //show backward

 function backward() {
    reset();
    mySlides[slideIndex - 1].style.display = "block";
    slideIndex --;
 }
 // forward click
 
 btnForward.addEventListener("click", function () {
   if (slideIndex === mySlides.length -1) {
     slideIndex = -1;
   }
   forward();
 });

 // backward click
 
btnBackward.addEventListener("click", function() {
    if(slideIndex === 0) {
      slideIndex = mySlides.length;
    }
    backward();
 })

 initialSlide();