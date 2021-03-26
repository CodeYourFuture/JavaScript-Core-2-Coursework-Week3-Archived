function slideShow() {
    let imgDiv = document.querySelector("img");
    let forwardButton = document.getElementById("forward");
    let BackButton = document.getElementById("back");
    let stopButton = document.getElementById("stop");
    let fastForwardButton = document.getElementById("auto-forward");
    let fastBackButton = document.getElementById("auto-back");
    let slideNum = document.getElementById("slide-number");

    let slide = 0;
    imgDiv.src = imgList[slide];
    imgDiv.src = imgList[slide];
    slideNum.innerText = `Photo Number: ${slide + 1}`;
  
    function forward() {
      if (slide < imgList.length - 1) {
        slide++;
        imgDiv.src = imgList[slide];
        slideNum.innerText = `Photo Number: ${slide + 1}`;
      } else {
        slide = 0;
        imgDiv.src = imgList[slide];
        slideNum.innerText = `Photo Number: ${slide + 1}`;
      }
    }
  
    function back() {
    
      if (slide < imgList.length && slide > 0) {
        slide--;
        imgDiv.src = imgList[slide];
        slideNum.innerText = `Photo Number: ${slide + 1}`;
      } else {
        slide = imgList.length - 1;
        imgDiv.src = imgList[slide];
        slideNum.innerText = `Photo Number: ${slide + 1}`;
      }
    }
   
    let interval = 0;
    forwardButton.addEventListener("click", forward);
    BackButton.addEventListener("click", back);
    fastForwardButton.addEventListener("click", () => {
      const inputTime = document.getElementById("input").value;
      let timer = inputTime;
      clearInterval(interval);
      interval = setInterval(forward, timer * 1000);
    });
    fastBackButton.addEventListener("click", () => {
      const inputTime = document.getElementById("input").value;
      let timer = inputTime;
      clearInterval(interval);
      interval = setInterval(back, timer * 1000);
    });
    stopButton.addEventListener("click", () => {
      clearInterval(interval);
    });
  }
  
  window.onload = slideShow;
  
  var imgList = [
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1533211116458-e4ff79ba61c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bWFuZ2F8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1578684683535-67e29c7b65e3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fGFuaW1lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1613724811140-c40cd779d3f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGFuaW1lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1559981421-3e0c0d712e3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1lfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGFuaW1lfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1604846123236-848ec0e84024?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFuaW1lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    
  ];
  