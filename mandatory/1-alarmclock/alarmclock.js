const timeLimit = 20;
let timePassed = 0;
let timeLeft = timeLimit;
let timerInterval = null;

const timesUp = () => {
  clearInterval(timerInterval);
  playAlarm();
}


const setAlarm = () => {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = timeLimit - timePassed;
    document.getElementById('timeRemaining').innerHTML = `Time Remaining: ${formatTime(timeLeft)}`;
    if (timeLeft === 0) {
      timesUp();
    }
  }, 1000);
}

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if(seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
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
