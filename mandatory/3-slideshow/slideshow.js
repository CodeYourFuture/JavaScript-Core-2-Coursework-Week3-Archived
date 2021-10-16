// Write your code here
 let imgSlider = document.getElementById("imgSlider");

 var i = 0;

function backward() {
  for(let i = slides.length; i > 0; i--) {
    return 
  }
}


function forward() {
  for (let i = 0; i < slides.length ; i++) {
    return setImg();
  }
}



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
 
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds

let slides = [
  "https://images.unsplash.com/photo-1459682687441-7761439a709d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGFuaW1hbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1507666405895-422eee7d517f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGFuaW1hbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1506126944674-00c6c192e0a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGFuaW1hbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1559157693-c34156e0f8c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1470107355970-2ace9f20ab15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1597776941486-054bf5529210?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGFuaW1hbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1516749744210-1981409bd921?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxhbmltYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];



// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
 
  
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
  

  
//   slides[slideIndex - 1].style.display = "block";
  
//   }

// document.getElementById("next").addEventListener("click", function(){
//     slideIndex++;
//      for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//      }
      
  
//   if (slideIndex > slides.length){
//       slideIndex = 0;
//   }
//   slides[slideIndex].style.display = "block";
// })

