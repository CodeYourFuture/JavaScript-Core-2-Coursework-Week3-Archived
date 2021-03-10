let alarmInterval, flashInterval;
let body = document.querySelector("body");
function setAlarm() {
  let inputField = document.querySelector("#alarmSet");
  let alarmTime = parseInt(inputField.value);
  let timeLeftText = document.querySelector("#timeRemaining");
  if (alarmTime) {
    alarmInterval = setInterval(function () {
      timeLeftText.innerHTML = `Time remaining: ${formatTime(alarmTime)}`;
      alarmTime--;
      if (alarmTime == -1) {
        clearInterval(alarmInterval);
        playAlarm();
        let body = document.querySelector("body");
        flashInterval = setInterval(function () {
          var backgroundColour = body.style.backgroundColor;
          body.style.backgroundColor =
            backgroundColour === "red" ? "white" : "red";
        }, 200);
      }
    }, 1000);

    inputField.value = "";
  }
}

function formatTime(time) {
  let finalTime;
  if (time > 59) {
    let hours = Math.round(time / 60);
    let minutes = time % 60;
    return `${hours}:${minutes}`;
  } else if (time < 10) {
    return `00:0${time}`;
  } else {
    return `00:${time}`;
  }
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
  clearInterval(alarmInterval);
  clearInterval(flashInterval);
}

window.onload = setup;
