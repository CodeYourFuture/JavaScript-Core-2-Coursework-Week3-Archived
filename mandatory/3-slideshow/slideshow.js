function setup() {
  const imgDiv = document.querySelector("img");
  const forwardBtn = document.getElementById("forward");
  const autoForwardBtn = document.getElementById("auto-forward");
  const autoBackBtn = document.getElementById("auto-back");
  const BackBtn = document.getElementById("back");
  const stopBtn = document.getElementById("stop");
  const slideNum = document.getElementById("slide-number");
  //   console.log(typeof parseInt(inputTime));
  let slide = 0;
  imgDiv.src = imgList[slide];
  imgDiv.src = imgList[slide];
  slideNum.innerText = `Photo Number: ${slide + 1}`;

  // Forward function
  function forward() {
    if (slide < imgList.length - 1) {
      ++slide;
      imgDiv.src = imgList[slide];
      slideNum.innerText = `Photo Number: ${slide + 1}`;
    } else {
      slide = 0;
      imgDiv.src = imgList[slide];
      slideNum.innerText = `Photo Number: ${slide + 1}`;
    }
  }

  // Back function
  function back() {
    // slide--;
    if (slide < imgList.length && slide > 0) {
      --slide;
      imgDiv.src = imgList[slide];
      slideNum.innerText = `Photo Number: ${slide + 1}`;
    } else {
      slide = imgList.length - 1;
      imgDiv.src = imgList[slide];
      slideNum.innerText = `Photo Number: ${slide + 1}`;
    }
  }
  // Event listeners
  let interval = 0;
  forwardBtn.addEventListener("click", forward);
  BackBtn.addEventListener("click", back);
  autoForwardBtn.addEventListener("click", () => {
    const inputTime = document.getElementById("input").value;
    let timer = inputTime;
    clearInterval(interval);
    interval = setInterval(forward, timer * 1000);
  });
  autoBackBtn.addEventListener("click", () => {
    const inputTime = document.getElementById("input").value;
    let timer = inputTime;
    clearInterval(interval);
    interval = setInterval(back, timer * 1000);
  });
  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
  });
}

window.onload = setup;

const imgList = [
  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fGRvZ3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjV8fGRvZ3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1534628526458-a8de087b1123?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1483392707171-cb3e4b1cb8b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA3fHxkb2d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1559096996-3b5e8f025ab3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU4fHxkb2d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1520848315518-b991dd16a625?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTUzfHxkb2d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1446730853965-62433e868929?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTY5fHxkb2d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1562176567-e393d29c098d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTgwfHxkb2d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];
