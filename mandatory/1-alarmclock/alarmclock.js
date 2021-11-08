
let headingEl = document.getElementById("timeRemaining");
let inputBox = document.getElementById("alarmSet");

//this is alarm button->
let setBtn = document.getElementById("set");
setBtn.addEventListener("click", setAlarm);

//this is stop-alarm button ->
let stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", pauseAlarm);

function setAlarm() {
  let timeLeft = (inputBox.value * 1000);
  //this displays initial time left ->
 headingEl.innerHTML = `Time Remaining: ${String(Math.floor(timeLeft/(1000*60))).padStart(2, 0)}:${String((timeLeft/1000)%60).padStart(2, 0)}`;
  
 //this is timer countdown ->
  let x = setInterval(()=>{
    inputBox.value = "";
    timeLeft -= 1000;
    headingEl.innerHTML = `Time Remaining: ${String(Math.floor(timeLeft/(1000*60))).padStart(2, 0)}:${String((timeLeft/1000)%60).padStart(2, 0)}`;
    
    //countdown stops when time is 0 and alarm goes off ->
    if (timeLeft <= 0){
      clearInterval(x);
      playAlarm();
      headingEl.innerHTML = `Time Remaining: 00:00`;
    }
  }, 1000);

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
