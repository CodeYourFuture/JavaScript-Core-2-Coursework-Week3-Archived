let timeLeftAfterPausing;
let inputEl;
function convertSeconds(sec) {
  let seconds = sec;
  let hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`;
};

let changeCol;

function changeColor() {
  let bodyEl = document.querySelector('body');
  let arrayOfColors = ['red', 'orange', 'white', 'brown', 'green', 'blue', 'purple', 'gray'];
  let color = Math.floor(Math.random() * arrayOfColors.length);
  bodyEl.style.backgroundColor = arrayOfColors[color];
}

function countDown() {
  let timerEl = document.querySelector('#timeRemaining');
  inputEl--;
  timeLeftAfterPausing = inputEl;
  timerEl.innerText = `Time Remaining: ${convertSeconds(timeLeftAfterPausing)}`;
  if (timeLeftAfterPausing === 0) {
    playAlarm('alarmsound.mp3');
    clearInterval(refreshTimer);
    changeCol = setInterval(changeColor, 1000);
  };
};

let refreshTimer;
let isPaused = false;

function pauseTimer() {
  if (!isPaused) {
    clearInterval(refreshTimer);
    isPaused = true;
    refreshTimer = undefined;
  }
  else {
    isPaused = false;
    refreshTimer = setInterval(countDown(countDown), 1000);
  }
};

function setAlarm() {
  inputEl = document.querySelector('#alarmSet').value;
  if (refreshTimer === undefined) {
    refreshTimer = setInterval(countDown, 1000);
  }
};

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    clearInterval(changeCol);
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
