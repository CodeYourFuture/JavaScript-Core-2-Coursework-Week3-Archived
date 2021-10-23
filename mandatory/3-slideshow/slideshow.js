
var  i =0; //start point 
let images = []; //images array 
let time = 3000; // time between switch

//Image List 
images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';

//change image 
function changeImg(){
    document.slide.src =images[i];
//check index length
    if (i< images.length-1){
i++ // adding 1 to index 
    }else {
        i=0;  //reset back to zero
    }
//run function every x seconds 
    setTimeout("changeImg()", time);
}
 //run function when page loads
window.onload =changeImg;

//let image = document.getElementById("image");