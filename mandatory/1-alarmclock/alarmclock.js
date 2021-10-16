

function setAlarm() {
  
  
    let setTimer = document.getElementById("alarmSet").value;

    let timeRemaining = document.getElementById("timeRemaining");

    displayTime(setTimer)


  
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
