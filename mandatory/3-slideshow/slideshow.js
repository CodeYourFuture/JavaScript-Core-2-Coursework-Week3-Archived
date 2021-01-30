// Write your code here
let nextBtn = document.getElementById('nextBtn');
let backBtn = document.getElementById('backBtn');
let pics = document.getElementById('images')

let counter = 0;

nextBtn.addEventListener('click', e =>{
   if(counter<5){
    counter++;
    document.getElementById('images').src = `/mandatory/3-slideshow/Images/img${counter}.jpeg`; 
  }
})

backBtn.addEventListener('click', e =>{
   if(counter>1){
    counter--;
    document.getElementById('images').src = `/mandatory/3-slideshow/Images/img${counter}.jpeg`; 
  }
})

//auto slideshow 
//setInterval functions
