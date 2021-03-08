const header = document.getElementById("timeRemaining");
let remainingSeconds;
let interval;

function setAlarm() {
  remainingSeconds = document.querySelector("#alarmSet").value;
  render();
  interval = setInterval(tick, 1000);
}

const render = () => {
  let minutes = Math.floor(remainingSeconds / 60);
  let seconds = remainingSeconds % 60;
  header.innerText = `Time remaining ${minutes}:${seconds}`;
};

const tick = () => {
  render();
  remainingSeconds--;
  if (remainingSeconds < 0) {
    playAlarm();
    clearInterval(interval);
    header.innerText = `Time remaining: 00:00`;
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
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
