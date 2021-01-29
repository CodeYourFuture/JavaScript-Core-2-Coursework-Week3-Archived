let inputAlarmSet = document.getElementById("alarmSet");
let timeRemaining = document.getElementById("timeRemaining");
let setButton = document.getElementById("set");
let time = inputAlarmSet.value;
var intervalId;

/* function setAlarm() {
  time = inputAlarmSet.value;
  timeRemaining.innerHTML = `time remaining ${time}`;
  intervalId = setInterval(decreaseTimeByOne, 1000);
}
function decreaseTimeByOne() {
  time--;
  timeRemaining.innerHTML = `time remaining ${time}`;
  if (time === 0) {
    playAlarm();
    clearInterval(intervalId);
  }
}
 */

var minutes;
var seconds;
var paddedMinutes;
var paddedSeconds;
function setAlarm() {
  time = inputAlarmSet.value;
  minutes = String(Math.floor(time / 60));
  paddedMinutes = minutes.padStart(2, "0");
  seconds = String(time % 60);
  paddedSeconds = seconds.padStart(2, "0");
  timeRemaining.innerHTML = `Time remaining: ${paddedMinutes}:${paddedSeconds}`;
  intervalId = setInterval(decreaseTimeByOne, 1000);
}
function decreaseTimeByOne(time) {
  //paddedMinutes--;
  paddedSeconds = paddedSeconds -= 1;
  timeRemaining.innerHTML = `Time remaining: ${paddedMinutes}:${paddedSeconds}`;
  if (time === 0) {
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
