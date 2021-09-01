// Write your code here

// I worked this with Ahmed Jalal
let images = [
 {
  src: "./images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg",
  alt: "image1"
 },
 {
  src: "./images/johann-siemens-EPy0gBJzzZU-unsplash.jpg",
  alt: "image2"
 },
 {
  src: "./images/joshua-earle-wFWQmOyfkkM-unsplash.jpg",
  alt: "image3"
 },
 {
  src: "./images/laurel-balyeat-ExarETx4xNA-unsplash.jpg",
  alt: "image4"
 },
 {
  src: "./images/paul-gilmore-ysA6qL8j-OI-unsplash.jpg",
  alt: "image5"
 },
 {
  src: "./images/simon-berger-aZjw7xI3QAA-unsplash.jpg",
  alt: "image6"
 },
];

//

const imageEl = document.querySelector("#images img");
imageEl.src = images[0].src;
imageEl.alt = images[0].alt;
let count =0;
let intervalId;
//function pickFromArray (image)
function forwardGenerator(){
 if (count < images.length - 1){
  count = count + 1;
  imageEl.src = images[count].src;
  imageEl.alt = images[count].alt;
  //console.log(count)
 }else{
  alert("The end ;)")
  clearInterval(intervalId);
 }
}
function autoForwardGenerator(){
 intervalId = setInterval(function(){
  forwardGenerator();
 },1000)
}

function stopSlide(){
 clearInterval(intervalId);
}

function backGenerator(){
 if (count > 0){
  count = count - 1;
  imageEl.src = images[count].src;
  imageEl.alt = images[count].alt;
  //console.log(count)
 }else{
  alert("The start ;)");
  clearInterval(intervalId);
 }
}

function autoBackGenerator(){
 intervalId = setInterval(function(){
  backGenerator()
 },1000)
}