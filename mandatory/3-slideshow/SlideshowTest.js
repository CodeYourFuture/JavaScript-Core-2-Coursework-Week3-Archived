let kittens = [
  "https://images.unsplash.com/photo-1559235038-1b0fadf76f78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
  "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
];

//store img elem
let kittenImg = document.querySelector("img");
let fwdBtn = document.querySelector("#forward");
let backBtn = document.querySelector("#back");
let autoFwdBtn = document.querySelector("#autoFwd");
let autoBackBtn = document.querySelector("#autoBack");



autoFwdBtn.addEventListener('click', function() {
    var j = 0;
  var interval = setInterval(function () {
    if (j <= 3) {
      console.log(j++);
    } else {
      clearInterval(interval);
    }
  }, 1000);
})

// var time = 1;

// var interval = setInterval(function() { 
//    if (time <= 3) { 
//       alert(time);
//       time++;
//    }
//    else { 
//       clearInterval(interval);
//    }
// }, 5000);