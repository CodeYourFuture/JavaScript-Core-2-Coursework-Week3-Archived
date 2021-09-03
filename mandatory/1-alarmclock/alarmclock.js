function setAlarm() {
  let alarmInput = document.getElementById("alarmSet");
  let alarmInputValue = alarmInput.value;
  let setIntervalHolder;

  if (alarmInputValue > 0) {
    setIntervalHolder = setInterval(function () {
      let titleEl = document.getElementById("timeRemaining");
      let minutes = Math.floor(alarmInputValue / 60);
      let seconds = alarmInputValue % 60;
      titleEl.textContent = `Time Remaining: ${minutes}:${seconds}`;

      if (alarmInputValue === 0) {
        playAlarm();
        clearInterval(setIntervalHolder);
      }

      alarmInputValue--;
      alarmInput.value = "";
    }, 1000);
  } else {
    alert("Please input a valid time");
  }
}

function pauseAlarmBtn() {
  let alarmInput = document.getElementById("alarmSet");
  let alarmInputValue = alarmInput.value;
  
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

  document.getElementById("pause").addEventListener("click", () => {
    pauseAlarmBtn();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
