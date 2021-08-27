setAlarm = () => {
  let alarmTime = document.getElementById("alarmSet");

  let timeRemaining = document.getElementById("timeRemaining");
  let minutes = parseInt(alarmTime.value / 60);
  let seconds = parseInt(alarmTime.value % 60);

  let countDown = setInterval(() => {
    let minutesString = minutes.toString().padStart(2, 0);
    let secondsString = seconds.toString().padStart(2, 0);

    if (seconds === 0 && minutes > 0) {
      seconds = 60;
      minutes--;
    }

    timeRemaining.innerText = `Time Remaining: ${minutesString} : ${secondsString}`;
    seconds--;
    alarmTime.value = 0;

    if (seconds < 0) {
      playAlarm();
      clearInterval(countDown);
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
