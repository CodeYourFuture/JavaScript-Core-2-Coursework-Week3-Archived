const picsArray = [
  "https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1542978709-19c95dc3bc7e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

];

const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const picture = document.getElementById("image");
const autoBack = document.getElementById("auto-back");
const autoNext = document.getElementById("auto-next");
const stopBtn = document.getElementById("stop");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("image").src = picsArray[0];

  let currentSlide = 0;
  let timer = 5000;
  let newBack;
  let newNext;

  function forwardSlides() {
    if (currentSlide === picsArray.length - 1) {
      currentSlide = 0;
      picture.src = picsArray[0];
    } else {
      currentSlide++;
      picture.src = picsArray[currentSlide];
    }
  }

  function backwardSlides() {
    if (currentSlide <= 0) {
      picture.src = picsArray[picsArray.length - 1];
      currentSlide = picsArray.length - 1;
    } else {
      currentSlide--;
      picture.src = picsArray[currentSlide];
    }
  }

  nextBtn.addEventListener("click", forwardSlides);
  backBtn.addEventListener("click", backwardSlides);

  autoNext.addEventListener("click", () => {
    newNext = setInterval(forwardSlides, timer);
    clearInterval(()=> {
      newNext;
    },timer);
  });

  autoBack.addEventListener("click", () => {
    newBack = setInterval(backwardSlides, timer);
    clearInterval(()=> {
      newBack;
    },timer);
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(newNext);
    clearInterval(newBack);
  });
});

