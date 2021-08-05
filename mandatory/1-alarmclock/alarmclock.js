function setAlarm() {
  const setAlarmEl = document.getElementById("alarmSet");
  const timeRemainingEl = document.getElementById("timeRemaining");
  let countdown = setAlarmEl.value;

  let countdownInterval = setInterval(() => {
    const minutes = Math.floor(countdown / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (countdown % 60).toString().padStart(2, "0");
    timeRemainingEl.innerHTML = `Time Remaining: ${minutes}:${seconds}`;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      playAlarm();
    } else {
      countdown--;
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
