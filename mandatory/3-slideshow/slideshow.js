const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const picture = document.getElementById("image");

let currentSlide = 0;

const picsArray = [
  "https://source.unsplash.com/random",
  "https://images.unsplash.com/photo-1611783142950-f8e1b74d12fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
];

function imageRefresh(){
    if(currentSlide === picsArray.length - 1){
        currentSlide = 0;
       picture.src = picsArray[0]; 
    } else {
        currentSlide++;
        picture.src = picsArray[currentSlide];        
    }   
}

function imageRefresh2() {
  if (currentSlide <= 0 ) {
    picture.src = picsArray[picsArray.length - 1];
    currentSlide = picsArray.length - 1;
  } else {
    currentSlide--;
    picture.src = picsArray[currentSlide];
  }   
}

nextBtn.addEventListener("click", imageRefresh);
backBtn.addEventListener("click", imageRefresh2);