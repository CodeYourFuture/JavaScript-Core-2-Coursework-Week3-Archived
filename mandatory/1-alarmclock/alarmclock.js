function setAlarm() {}

let setAlarmBtn = document.getElementById("set");
let showButton = document.getElementById("imeRemaining");
// // adding value to the input after setting it up
// let input = document.getElementById("alarmSet").value;

// function setAlarm(){
if(set.value > 0){
  set.value;
  let input = document.getElementById("alarmSet").value;
let minutes = Math.floor(time/60);
let sec = time % 60;
sec = sec < 10 ? "0" + sec:sec;
minutes = minutes < 10 ? "0" + minutes:minutes;
display.innerHTML = `Time Remaining ${minutes}:${sec}`;
}
else if(display.innerHTML === "Time Remaining:" + "0:" + "0"){
  playAlarm();
}

// setAlarmBtn.addEventListener("click", function(){
//   // let input = document.getElementById("alarmSet");
//   // let minutes;

//   // let sec = h1.innerHTML = input.value;





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
