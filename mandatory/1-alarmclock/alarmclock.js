let input = document.getElementById("alarmSet");
let timeRemaining = document.getElementById("timeRemaining");
var randomColor = Math.floor(Math.random()*16777215).toString(16);

function setAlarm() {
  if (input.value > 0) {
    input.value = input.value - 1;
    let time = input.value;
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds:seconds;
    minutes = minutes < 10 ? '0' + minutes:minutes;
    timeRemaining.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
  } else if (timeRemaining.innerHTML === 'Time Remaining: ' + '00:' + '00') {
      audio.play();
      document.body.style.backgroundColor = '#' + randomColor;
    }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    let countdown = setInterval(setAlarm, 1000);
    setAlarm();

  document.getElementById("stop").addEventListener("click", () => { 
    clearInterval(countdown, 10);
    pauseAlarm();
  });
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
