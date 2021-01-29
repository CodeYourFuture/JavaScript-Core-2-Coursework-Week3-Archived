/*This is an alarm clock which takes user input  */
let inputAlarmSet = document.getElementById("alarmSet");
inputAlarmSet.placeholder = "enter valid time value"; // added placeholder
let timeRemaining = document.getElementById("timeRemaining");
let setButton = document.getElementById("set");
let time = inputAlarmSet.value;

function setAlarm() {
  time = inputAlarmSet.value; // will update time when function is called
  if (time > 0) {
    // time is written in time format 00:00 using padStart() because this function only works with strings time is first converted to string
    timeRemaining.innerHTML = `Time remaining: ${String(
      Math.floor(time / 60)
    ).padStart(2, "0")}:${String(Math.floor(time % 60)).padStart(2, "0")}`;
    intervalId = setInterval(decreaseTimeByOne, 1000);
  }
}

// time decrement function

function decreaseTimeByOne() {
  time--;
  timeRemaining.innerHTML = `Time remaining: ${String(
    Math.floor(time / 60)
  ).padStart(2, "0")}:${String(Math.floor(time % 60)).padStart(2, "0")}`;

  // if statement when time reaches zero

  if (time === 0) {
    playAlarm();
    clearInterval(intervalId); // clear set interval using interval id;
    inputAlarmSet.value = ""; // clear input field after clearing interval
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
