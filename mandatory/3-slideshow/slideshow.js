let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");
let img = document.getElementById("images")
let counter = 0;
nextBtn.addEventListener("click", e =>{
   if(counter<6){
    counter++;
    document.getElementById("images").src =`/mandatory/3-slideshow/Images/img${counter}.jpg`; 
  }
})
backBtn.addEventListener("click", e =>{
   if(counter>1){
    counter--;
    document.getElementById("images").src =`mandatory/3-slideshow/Images/img${counter}.jpg`; 
  }
})

//auto slideshow 
setInterval(function() {
index += 1
console.log(index)
}, 3000);


  