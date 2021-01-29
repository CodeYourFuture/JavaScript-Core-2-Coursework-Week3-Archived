let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");
let img = document.getElementById("images");
let counter = 0;
nextBtn.addEventListener("click", (e) => {
  if (counter < 6) {
    counter++;
    document.getElementById(
      "images"
    ).src = `/mandatory/3-slideshow/Images/img${counter}.jpg`;
  }
});
backBtn.addEventListener("click", (e) => {
  if (counter > 1) {
    counter--;
    document.getElementById(
      "images"
    ).src = `/mandatory/3-slideshow/Images/img${counter}.jpg`;
  }
});


//auto slideshow
 function autoSlideShow(){
   var index = 0;
   var interval = setInterval(function () {
     index += 1;
     //console.log(index);
     document.getElementById(
       "images"
       ).src = `/mandatory/3-slideshow/Images/img${index}.jpg`;
      }, 3000);
      
      setTimeout(function () {
        clearInterval(interval)
      }, 18000);
  
 };

 window.onload=autoSlideShow;

