function setAlarm() {
  let alarmTime = document.getElementById('alarmSet');
  let setAlarmBtn = document.getElementById('set');
  let clock = document.getElementById('timeRemaining');

  setAlarmBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (alarmTime.value > 0 || !alarmTime.value < 0) {
      clock.innerText = `Time Remaining: ${alarmTime.value}`
      let downTime = alarmTime.value;

      for (i = 0; alarmTime.value >= i; i++) {
        if (i == alarmTime.value) {
          playAlarm()
        }

        else {
          setTimeout(() => {
            downTime--;
            clock.innerText = `Time Remaining: ${downTime}`
          }, 1000);
        }
      }
    }
  })
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
