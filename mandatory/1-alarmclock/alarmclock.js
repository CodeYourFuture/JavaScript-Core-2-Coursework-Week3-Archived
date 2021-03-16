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

function changeColor() {
  let arrayOfColors = ['red', 'orange', 'white', 'brown', 'green', 'blue', 'purple', 'gray'];
  let i = 0;
  let bodyEl = document.querySelector('body');
  bodyEl.style.backgroundColor = arrayOfColors[i];
  i = (i + 1) % arrayOfColors.length;
}

let changeCol;

function countDown() {
  let backGroundEl = document.querySelector('body').style.backgroundColor;
  let timerEl = document.querySelector('#timeRemaining');
  inputEl--;
  timeLeftAfterPausing = inputEl;
  if (timeLeftAfterPausing === 0) {
    changeCol = setInterval(changeColor, 50);
    playAlarm('alarmsound.mp3');
    clearInterval(refreshTimer);

  };
  timerEl.innerText = `Time Remaining: ${convertSeconds(timeLeftAfterPausing)}`;
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
    refreshTimer = setInterval(countDown, 1000);
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
  });
};

function playAlarm() {
  audio.play();
};

function pauseAlarm() {
  audio.pause();
};

window.onload = setup;
