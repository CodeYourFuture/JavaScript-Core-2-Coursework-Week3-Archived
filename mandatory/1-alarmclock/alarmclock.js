let timerInterval = null;
const inputTime = document.getElementById("alarmSet");
const timeRemain = document.getElementById("timeRemaining");

const setAlarm = () => {
  let timeCountDown = inputTime.value;
  timeRemain.innerHTML = `Time Remaining: 00:${inputTime.value}`;
  let timerInterval = setInterval(() => {
    timeRemain.innerHTML = `Time Remaining: 00:${timeCountDown}`;
    if (timeCountDown > 0) {
      timeCountDown -= 1;
    }
    if (timeCountDown === 0) {
      clearInterval(timerInterval);
      playAlarm();
    }
  }, 1000);
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
