let timerSet = false;
function setAlarm() {
  let timeRemainingEl = document.getElementById("timeRemaining");
  let userInput = document.getElementById("alarmSet");
  let timeLeft = userInput.value;
  timerSet = true;

  function timer() {
    timeLeft--;
    if (timeLeft > 10) {
      timeRemainingEl.innerHTML = `Time Remaining: 00:${timeLeft}`;
    } else if (timeLeft < 10) {
      timeRemainingEl.innerHTML = `Time Remaining: 00:0${timeLeft}`;
    }
  }
  setInterval(() => {
    if (timeLeft > 0) {
      timer();
    } else if (timerSet === true && timeLeft === 0) {
      playAlarm();
      timerSet = false;
      userInput.value = "";
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
