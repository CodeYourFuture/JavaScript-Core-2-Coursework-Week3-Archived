function setAlarm() {
  let inputEl = document.getElementById("alarmSet");
  let h1El = document.getElementById("timeRemaining");
  h1El.innerHTML = `Time Remaining: 00:${inputEl.value}`;
  let count = inputEl.value;
  let alarm = setInterval(function () {
    h1El.innerHTML = `Time Remaining: 00:${count}`;
    count -= 1;
    if (count < 0) {
      clearInterval(alarm);
      playAlarm();
    }
  }, 1000);
}
let setBtn = document.getElementById("set");
setBtn.addEventListener("click", setAlarm);

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
