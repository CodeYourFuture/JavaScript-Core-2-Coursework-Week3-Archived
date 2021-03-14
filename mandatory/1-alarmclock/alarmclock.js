let timer;
let clock = 0;

function startClock() {
  timer = setInterval(() => {
    let h1El = document.getElementById("timeRemaining");
    h1El.innerHTML = `Time Remaining: ${clock}`;
    if (clock <= 0) {
      playAlarm();
      clearInterval(timer);
    } else {
      clock--;
    }
  }, 1000);
}

function setAlarm() {
  let input = document.getElementById("alarmSet");
  clock = parseInt(input.value);
  if (!isNaN(clock)) {
    input.value = "";
    startClock();
  } else {
    alert("is not a number");
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
  let btn = document.getElementById("stop");
  if (btn.innerHTML === "Stop Alarm") {
    btn.innerHTML = "Continue";
    clearInterval(timer);
  } else {
    btn.innerHTML = "Stop Alarm";
    if (clock > 0) {
      startClock();
    }
  }
}

window.onload = setup;
