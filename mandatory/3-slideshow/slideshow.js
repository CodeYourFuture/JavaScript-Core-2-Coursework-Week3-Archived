// Write your code here
let imgEl = document.querySelectorAll("img");
let btnEl = document.querySelectorAll("button");
let currentIndex = 0;
let lengthImagesEl=imgEl.length;
function showSlide() {
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

btnEl[0].addEventListener("click", previousSlide);

btnEl[1].addEventListener("click", nextSlide);
    


