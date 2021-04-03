// Write your code here

var next = document.getElementById('fwdbtn');
//  next.addEventListener('click', );
var back = document.getElementById('bckbtn');

var i = 0; //starting point
var images = []; //empty array to add to
var time = 2000;

images[0] = 'image1.jpeg';
images[1] = 'image2.jpeg';
images[2] = 'image3.jpeg';
images[3] = 'image4.jpeg';
images[4] = 'image5.jpeg';

//next.addEventListener('click', nextbtn())

// function clicked(){
//   //alert('hannin')
//   console.log('hannin'); //trying to see if my button works, it does
//how to connect the buttons to the next img?

function slideshow() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  //setTimeout('slideshow()', time);
}
//struggling with the reversal of the slide show
// function slideshowBack() {
//   document.slide.src = images[i];

//   if (i <= images.length + 1) {
//     i--;
//   } else {
//     i = 0;
//   }
//   //setTimeout('slideshow()', time);
// }
// window.onload = slideshow;

