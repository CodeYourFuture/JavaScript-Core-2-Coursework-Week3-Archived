function setAlarm() {
  var input = document.getElementById("alarmSet").value;
  let myAlarm = input;

  let timeInterval = setInterval(() => {
    var timeDisplay = document.getElementById("timeRemaining");
    let min = Math.floor(myAlarm / 60);
    let sec = myAlarm - min * 60;

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (myAlarm === 0) {
      playAlarm();
      clearInterval(timeInterval);
      backgroundColor();
    }
    let message = min + ":" + sec;
    timeDisplay.innerText = `Time Remaining: ${message}`;
    myAlarm--;
  }, 1000);
}
var flashColour = 0;


function backgroundColor() {
  flashColour = setInterval(() => {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);
    let RGB = `rgb(${color1}, ${color2}, ${color3})`;
    document.getElementsByTagName("body")[0].style.backgroundColor = RGB;
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
