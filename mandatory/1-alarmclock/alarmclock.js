
 let mins;
 let secs = mins * 60;
let setButton = document.getElementById("set");
// let inputId = document.getElementById("alarmSet");
let timeRemaining = document.getElementById("timeRemaining");
let alarmTime;
let intervalId;
let secondsToMinSecs=seconds=>{
  let secs = seconds % 60;
  let mins = (seconds-secs)/60;
  return[mins,secs];
}
function setAlarm(){
  // alarmTime = inputId.value;
  let inputId = document.getElementById("alarmSet");
  alarmTime = inputId.value;
  [mins,secs]= secondsToMinSecs(alarmTime);
  timeRemaining.innerHTML = ` time remaining ${mins}.${secs}`;
  intervalId = setInterval(Decrement,1000);
}
   function Decrement(){
     alarmTime--;
     [mins,secs]= secondsToMinSecs(alarmTime);
     timeRemaining.innerHTML = ` time remaining ${mins}.${secs}`;
     if(alarmTime===0){
       playAlarm();
       clearInterval(intervalId);
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
