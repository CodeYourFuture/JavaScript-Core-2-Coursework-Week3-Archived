
let photoNum = 1; //this makes photo index 0 inside the playSlide function

//this function displays the current photo
function playSlide(num){
let photos = document.getElementsByClassName("slide");
    if (num > photos.length){
        photoNum= 1;
    } 
    if (num < 1){
        photoNum= photos.length;
    }
    for (let i = 0; i < photos.length; i++){
        photos[i].style.display = "none";
    }
    photos[photoNum- 1].style.display = "block";
}

//calling the function on start up
playSlide(photoNum);

//function for forward button
function nextSlide(){
    playSlide(photoNum += 1);
}

//function for back button
function previousSlide(){
    playSlide(photoNum -= 1);
}

