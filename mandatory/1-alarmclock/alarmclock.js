// 1) Get the value of input of set time to store it, get time remaining section and store it
// 2) Turn the input value in minute-second format
// 3) Create a setInterval function that updates time remaining each second, and also plays the alarm when time is up
function setAlarm() {
  let alarmSet = document.getElementById("alarmSet").value;

  setInterval(function () {
    const remainingMin = document.getElementById("minute");
    const remainingSec = document.getElementById("second");
    let minute =
      Math.floor(alarmSet / 60) >= 10
        ? Math.floor(alarmSet / 60)
        : `0${Math.floor(alarmSet / 60)}`;
    let second =
      alarmSet - minute * 60 >= 10
        ? alarmSet - minute * 60
        : `0${alarmSet - minute * 60}`;
    remainingMin.innerText = minute;
    remainingSec.innerText = second;
    if (alarmSet > 0) alarmSet -= 1;
    else if (alarmSet == 0) {
      playAlarm();
      alarmSet = null;
      document.body.style.backgroundColor = "red";
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
