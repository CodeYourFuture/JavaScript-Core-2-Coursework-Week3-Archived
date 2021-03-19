const images = [
  { src: "chris-leipelt.jpg", alt: "" },
  { src: "damian-barczak.jpg", alt: "" },
  { src: "ali-karimi.jpg", alt: "" },
  { src: "elia-pellegrini.jpg", alt: "" },
];

function backward() {
  imageCount--;
  if (imageCount <= images.length && imageCount >= 0) {
    imgEl.src = images[imageCount].src;
  } else {
    imageCount++;
  }
}
function forward() {
  imageCount++;
  if (imageCount < images.length) {
    imgEl.src = images[imageCount].src;
  } else {
    imageCount--;
  }
}

let imgEl = document.querySelector("#images img");
imgEl.src = images[0].src;
let imageCount = 0;

document.querySelector("#BtnFwd button").addEventListener("click", forward);

document.querySelector("#BtnBck button").addEventListener("click", backward);
//Auto Back player
document
  .querySelector("#BtnAutoBck button")
  .addEventListener("click", function () {
    let play = setInterval(backward, 1000);
    // stop backward interval
    document
      .querySelector("#BtnStop button")
      .addEventListener("click", function () {
        clearInterval(play);
      });
  });
// Auto Forward
document
  .querySelector("#BtnAutoFwd button")
  .addEventListener("click", function () {
    let play = setInterval(forward, 1000);

    //stop forward interval
    document
      .querySelector("#BtnStop button")
      .addEventListener("click", function () {
        clearInterval(play);
      });
  });
