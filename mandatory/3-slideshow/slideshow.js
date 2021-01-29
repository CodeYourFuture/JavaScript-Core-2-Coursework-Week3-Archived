// Write your code here
function imgCarousel(arr) {
  let bodyDoc = document.getElementsByTagName("body")[0];
  let newDiv = document.createElement("div");
  bodyDoc.appendChild(newDiv);
  let headerOne = document.createElement("h1");
  headerOne.innerText = "My Image Carousel";
  newDiv.appendChild(headerOne);
  let image = document.createElement("img");
  //   image.src =
  //     "https://images.unsplash.com/photo-1577083165350-16c9f88b4a25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80";
  newDiv.appendChild(image);
  let imgPara = document.createElement("p");
  newDiv.appendChild(imgPara);
  let divBtn = document.querySelector(".btnDiv");
  newDiv.appendChild(divBtn);
  let backBtn = document.createElement("button");
  backBtn.innerText = "BACK";
  divBtn.appendChild(backBtn);
  
    backBtn.addEventListener("click", function () {
            for (let i = 0; i < arr.length; i++){ 
        image.src = arr[i]["imageLink"];
        imgPara.innerText = arr[i]["imageName"];
     }
      })
    // images.forEach(function (obj) {
    //   image.src = [obj]["imageLink"];
    //   image -= 1;

    //   imgPara.innerText = [obj]["imageName"];

    // });
    
//   };

  let frwdBtn = document.createElement("button");
  frwdBtn.innerText = "FORWARD";
  divBtn.appendChild(frwdBtn);
  frwdBtn.addEventListener("click", function () {
    for (let i = 0; i < arr.length; i++) {
      image.src = arr[i]["imageLink"];
      imgPara.innerText = arr[i]["imageName"];
    }
  });
  let autoBackBtn = document.createElement("button");
  autoBackBtn.innerText = "AUTOBACK";
  divBtn.appendChild(autoBackBtn);
  autoBackBtn.addEventListener("click", function () {
    for (let i = 0; i < arr.length; i--) {
      image.src = arr[i]["imageLink"];
      imgPara.innerText = arr[i]["imageName"];
    }
  });
  let autoFrwdBtn = document.createElement("button");
  autoFrwdBtn.innerText = "AUTOFORWARD";
  divBtn.appendChild(autoFrwdBtn);
  autoFrwdBtn.addEventListener("click", function () {
    for (let i = 0; i < arr.length; i++) {
      image.src = arr[i]["imageLink"];
      imgPara.innerText = arr[i]["imageName"];
    }
  });
}

let images = [
  {
    imageName: "Design 1",
    imageLink:
      "https://images.unsplash.com/photo-1577083165350-16c9f88b4a25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80",
  },
  {
    imageName: "Design 2",
    imageLink:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE4fHxkZXNpZ258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    imageName: "Design 3",
    imageLink:
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
  },
  {
    imageName: "Design 4",
    imageLink:
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

imgCarousel(images);
