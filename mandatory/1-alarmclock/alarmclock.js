let set = document.getElementById("alarmSet");
let display = document.getElementById("timeRemaining");

function setAlarm() {
  
  if (set.value > 0){
    set.value--;
    let time = set.value;
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds:seconds;
    minutes = minutes < 10 ? "0" + minutes:minutes;
    display.innerHTML =  `Time Remaining: ${minutes}:${seconds}`;
  }  else if (display.innerHTML === "Time Remaining: " + "00:" + "00"){
    playAlarm();
  }
}
  


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
