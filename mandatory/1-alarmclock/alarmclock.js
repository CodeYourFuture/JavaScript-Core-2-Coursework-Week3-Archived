let set = document.getElementById("alarmSet");
let display = document.getElementById("timeRemaining");
let startTime;

function setAlarm() {
  
  var interval = setInterval(()=> {
    if(set.value >= 0){
      let time = set.value--;
      let minutes = Math.floor(time/60);
      let seconds = time - minutes * 60;
      seconds = seconds < 10 ? "0" + seconds:seconds;
      minutes = minutes < 10 ? "0" + minutes:minutes;
      display.innerHTML =  `Time Remaining: ${minutes}:${seconds}`;
    } 
  },1000
  )
  var timeOut = (parseInt(startTime) + 1) *1000;
  setTimeout(function () {
    clearInterval(interval)
    playAlarm();
  }, (timeOut));  
}


    


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    startTime = set.value;
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
