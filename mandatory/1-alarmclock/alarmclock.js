

function setAlarm() {    
    let setTimer = document.getElementById("alarmSet").value;
    let timeRemaining = document.getElementById("timeRemaining");
    displayTime(setTimer);
  
      const countDown = setInterval(() => {
        setTimer--;
        displayTime(setTimer);
            if(setTimer < 1){
              playAlarm();      
              clearInterval(countDown);               
            }
      }, 1000);   
   
   document.getElementById("alarmSet").value = "";  

}    
    
function displayTime(setTimer) {
  let minutes = Math.floor(setTimer / 60);
  let seconds = Math.floor(setTimer % 60);
  timeRemaining.innerHTML = `Time Remaining: ${
    minutes < 10 ? "0" : ""
  }${minutes}: ${seconds < 10 ? "0" : ""}${seconds}`;
}  

const colors = ["#FFFFFF", "#F06B4F", "#F2AE52", "#B0CD6D", "#A33120"];


  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function changedColor(){
    document.body.style.backgroundColor = randomColor();
  }


// add a pause button 

 let pauseButton = document.createElement("input");
 pauseButton.setAttribute("type", "button");
 pauseButton.setAttribute("value", "Pause");
 document.getElementById("buttonLists").appendChild(pauseButton);

 let resetButton = document.createElement("input");
 resetButton.setAttribute("type", "button");
 resetButton.setAttribute("value", "Reset");
 document.getElementById("buttonLists").appendChild(resetButton);

let paused = true;
 
pauseButton.addEventListener("click", function pauseCountDown() {
    if(paused) {
     // paused = true;
      clearInterval(countDown);

    }
 });
    
// document Style

document.body.style.backgroundColor = "purple";
document.body.style.color = "LavenderBlush";
document.querySelector("[type = button]").style.border = "none";
document.querySelector("[type = button]").style.borderRadius = "4px";



// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
