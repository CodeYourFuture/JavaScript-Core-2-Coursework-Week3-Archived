const alarmSetInput = document.getElementById("alarmSet");
alarmSetInput.style.placeholder = "enter valid time value";
const timeRemaining = document.getElementById("timeRemaining");
const setButton = document.getElementById("set");
let time = 5;
let timeInterval = 0;

function setAlarm() {
  time = alarmSetInput.value;

  timeInterval = setInterval(decreaseTime, 1000);
}

function decreaseTime() {
  let timeInMinute = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  let timeInSecond = (time % 60).toString().padStart(2, "0");
  timeRemaining.innerText = `Time Remaining: ${timeInMinute}: ${timeInSecond}`;

  if (time === 0) {
    clearInterval(timeInterval);
    playAlarm();
    document.body.style.backgroundColor = "red";
  }
  time--;
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
