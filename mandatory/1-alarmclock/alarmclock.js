// Selectors
const body = document.querySelector("body");
let input = document.getElementById("alarmSet");
const timeRemaining = document.getElementById("timeRemaining");
const stopAlarm = document.getElementById("stop");
const divElement = document.querySelectorAll(".centre div");
const btnPause = document.createElement("button");
btnPause.setAttribute("type", "button");
btnPause.setAttribute("id", "pause");
btnPause.textContent = "Pause";
divElement[1].appendChild(btnPause);
let timeInterval;
let inputValue;
let countDown = 0;

// Events
stopAlarm.addEventListener("click", stopAlarmFunc)
btnPause.addEventListener("click", pause);

// Functions
function setAlarm() {
  inputValue = input.value;

  if (!countDown && !inputValue) {
    alert("Please enter a valid number");
  }

  if (!countDown) {
    countDown = inputValue;
  }

  timeInterval = setInterval(() => {
    if (countDown <= 0) {
      clearInterval(timeInterval);
      playAlarm();
      body.style.backgroundColor = "red";
    }

    let minutes = Math.floor(countDown / 60);
    minutes = minutes > 9 ? minutes : "0" + minutes;
    let seconds = countDown % 60;
    seconds = seconds > 9 ? seconds : "0" + seconds;
    timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;
    countDown--;

  }, 1000)

  input.value = "";
}

function stopAlarmFunc() {
  pauseAlarm();
  countDown = 0;
  body.style.backgroundColor = "white";
  timeRemaining.textContent = `Time Remaining: 00:00`;
}

function pause() {
  clearInterval(timeInterval);
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