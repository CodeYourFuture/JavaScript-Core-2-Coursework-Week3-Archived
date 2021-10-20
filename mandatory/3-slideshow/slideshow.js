// Write your code here
const imgContainerDiv = document.getElementById("imageContainer");
const imageURLs = [
  "https://cdn.mos.cms.futurecdn.net/aNDcqZtc64o82eeqfE5Fte.jpg",
  "https://cdn.vox-cdn.com/thumbor/nEmwnn3PJyXqoKcr37D3T1o8AiQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21991383/vpavic_4261_20201023_0058.jpg",
  "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHM1fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://live.staticflickr.com/65535/51469952393_229e4cba9e_h.jpg",
  "https://assets-prd.ignimgs.com/2021/06/11/jpeg-image-3-1623444114639.jpeg",
  "https://www.psu.com/wp/wp-content/uploads/2020/06/ps5-console-design-6.jpg"
];
let currentImageIndex = 0;
const nextButton = document.getElementById("nextBtn");
const previousButton = document.getElementById("previousBtn");
const autoButton = document.getElementById("autoBtn");

function initializeImg(imgURLArray){
    if(currentImageIndex > imgURLArray.length - 1){
        currentImageIndex = 0;
    }
    for (let i = 0; i < imgContainerDiv.childNodes.length; i++) {
      //start at the end
      imgContainerDiv.lastChild.remove();
    }
    const newImg = document.createElement("img");
    newImg.setAttribute("src", imgURLArray[currentImageIndex]);
    imgContainerDiv.appendChild(newImg);
}
initializeImg(imageURLs);

function nextImg(){
    currentImageIndex++;
    initializeImg(imageURLs);
}
function previousImg(){
    currentImageIndex--;
    initializeImg(imageURLs);
}
let autoEnabled = false;

function toggleAuto(){
    if(autoEnabled === true){
        autoEnabled = false;
    }else{
        autoEnabled = true;
        autoCycle();
    }
}
function autoCycle(){
    if(autoTimeInput.value !== null){
        setInterval(function () {
          if (autoEnabled === true) {
            nextImg();
          }
        }, 2000);
    }else{
        let autoTimeInput = document.getElementById("autoInput");
        setInterval(function () {
          if (autoEnabled === true) {       //unsure if this is working properly seems a little dodgy
            nextImg();
          }
        }, autoTimeInput.value * 1000);
    }
}
nextButton.addEventListener("click", nextImg);
previousButton.addEventListener("click", previousImg);
autoButton.addEventListener("click", toggleAuto);