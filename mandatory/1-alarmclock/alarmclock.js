function setAlarm() {
  const input = document.getElementById("alarmSet").value;
  let myTimer = input;

  let timeInterval = setInterval(() => {
    const timeDisplay = document.getElementById("timeRemaining");
    let min = Math.floor(myTimer / 60);
    let sec = myTimer - min * 60;

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (myTimer === 0) {
      playAlarm();
      clearInterval(timeInterval);
      backgroundColor();
    }
    let message = min + ":" + sec;
    timeDisplay.innerText = `Time Remaining: ${message}`;
    myTimer--;
  }, 1000);
}
// Background color flash
var interval = 0;
function backgroundColor() {
  interval = setInterval(() => {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    let RGB = `rgb(${color1}, ${color2}, ${color3})`;
    document.getElementsByTagName("body")[0].style.backgroundColor = RGB;
  }, 1000);
}

function pauseFlash() {
  clearInterval(interval);
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
  document.getElementById("stopBgColor").addEventListener("click", () => {
    pauseFlash();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
