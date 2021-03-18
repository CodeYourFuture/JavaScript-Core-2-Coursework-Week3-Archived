// Write your code here
let imgEl = document.querySelectorAll("img");
let backBtnEl = document.querySelector(".back-btn");
let forwardBtnEl = document.querySelector(".forward-btn");
let currentIndex = 0;
let lengthImagesEl=imgEl.length;
function showSlide(currentIndex) {
    return imgEl[currentIndex].classList.add("showing");
}

function nextSlide() {
    imgEl[currentIndex].style.display="none";
    currentIndex = (currentIndex + 1) % lengthImagesEl;
    return showSlide(currentIndex);

}

function previousSlide() {
    imgEl[currentIndex].style.display = "none";
    currentIndex = (currentIndex + lengthImagesEl - 1) % lengthImagesEl;
    return showSlide(currentIndex);
 }

backBtnEl.addEventListener("click", previousSlide);
 
forwardBtnEl.addEventListener("click", nextSlide);
    


