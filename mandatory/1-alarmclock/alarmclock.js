function timeConverter(num) {
  const minutes = Math.floor(num / 60);
  const seconds = num % 60;
  return `${minutes}:${seconds}`;
}

function flash() {
  // EXTRA
  let flashingInterval = setInterval(() => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
  }, 500);
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(flashingInterval);
    document.body.style.backgroundColor = "white";
  });
}

function setAlarm() {
  const durationLeft = document.getElementById("timeRemaining");
  let timeInput = document.getElementById("alarmSet").value;

  let countdownInterval = setInterval(() => {
    durationLeft.innerHTML = `Time Remaining: ${timeConverter(timeInput)}`;
    if (timeInput === 0) {
      clearInterval(countdownInterval);
      flash(); // EXTRA
      playAlarm();
    } else {
      timeInput -= 1;
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

// function timeConverter(num) {
//   const minutes = Math.floor(num / 60);
//   const seconds = num % 60;
//   return `${minutes}:${seconds}`;
// }

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
