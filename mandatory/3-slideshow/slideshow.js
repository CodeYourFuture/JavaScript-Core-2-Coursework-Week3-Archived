let srcImages = "images/image1.jpg";
let imgElement = document.getElementsByTagName("img");
let indexOfImage = 1;
let backTimer;
let forwardTimer;
function loadPage() {
  imgElement[0].src = srcImages;
}
function forwardBtn() {
  if (indexOfImage >= 12) indexOfImage = 1;
  else indexOfImage++;
  srcImages = `images/image${indexOfImage}.jpg`;
  imgElement[0].src = srcImages;
}
function backBtn() {
  if (indexOfImage > 1) indexOfImage--;
  else indexOfImage = 12;
  srcImages = `images/image${indexOfImage}.jpg`;
  imgElement[0].src = srcImages;
}
function autoBack() {
  clearInterval(forwardTimer);
  backTimer = setInterval(backBtn, 1000);
}
function autoForward() {
  clearInterval(backTimer);
  forwardTimer = setInterval(forwardBtn, 1000);
}
function stopSlider() {
  clearInterval(backTimer);
  clearInterval(forwardTimer);
}
