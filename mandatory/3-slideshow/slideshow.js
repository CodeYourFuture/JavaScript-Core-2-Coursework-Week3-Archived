// Write your code here

imgUrl = [
  "https://images.unsplash.com/photo-1610461790474-7910730cd002?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1611507421480-69483a60666d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  "https://images.unsplash.com/photo-1615058338307-bb33ba96704d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
];

let img = document.createElement("img");
let index = 0;
img.src = imgUrl[index];

let btnGroup = document.createElement("div");

let btnsName = ["Auto Back", "Back", "Stop", "Forward", "Auto Forward"];
let autoBackTimer;
let autoForwardTimer;
btnsName.forEach((name) => {
  let btn = document.createElement("button");
  btn.innerHTML = name;
  btn.addEventListener("click", () => {
    if (name === btnsName[0]) {
      autoBackTimer = setInterval(() => {
        if (index === 0) {
          index = imgUrl.length - 1;
        } else {
          index--;
        }
        img.src = imgUrl[index];
      }, 2000);
    } else if (name === btnsName[1]) {
      if (index === 0) {
        index = imgUrl.length - 1;
      } else {
        index--;
      }
      img.src = imgUrl[index];
    } else if (name === btnsName[2]) {
      clearInterval(autoBackTimer);
      clearInterval(autoForwardTimer);
    } else if (name === btnsName[3]) {
      if (index === imgUrl.length - 1) {
        index = 0;
      } else {
        index++;
      }
      img.src = imgUrl[index];
    } else if (name === btnsName[4]) {
      autoForwardTimer = setInterval(() => {
        if (index === imgUrl.length - 1) {
          index = 0;
        } else {
          index++;
        }
        img.src = imgUrl[index];
      }, 2000);
    }
  });
  btnGroup.appendChild(btn);
});

//document.body.appendChild(img);
//document.body.appendChild(btnGroup);
document.body.append(img, btnGroup);

const parent = document.createElement("div");
const child = document.createElement("p");
const child1 = document.createElement("p");
// Appending Node Objects
parent.append(child); // Works fine
parent.append(child, child1); // Works fine
parent.appendChild(child); // Works fine
parent.appendChild(child,child1); // Throws error
// Appending DOMStrings
parent.append("Hello world"); // Works fine
parent.appendChild("Hello world"); // Throws error

