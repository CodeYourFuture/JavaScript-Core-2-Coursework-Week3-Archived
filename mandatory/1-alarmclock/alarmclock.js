function setAlarm() {
  let num = document.getElementById('alarmSet').value;
  const timeRemaining = document.getElementById('timeRemaining');
  let finish = false;

  const displayTime = setInterval(() => {
    let min = Math.floor(num/60);
    let sec = num % 60;

    if (sec < 9 && min < 9) timeRemaining.innerHTML = `Time Remaining: 0${min}:0${sec}`;
    if (sec < 9 && min > 9) timeRemaining.innerHTML = `Time Remaining: ${min}:0${sec}`;
    if (sec > 9 && min < 9) timeRemaining.innerHTML = `Time Remaining: 0${min}:${sec}`;
    if (sec > 9 && min > 9) timeRemaining.innerHTML = `Time Remaining: ${min}:${sec}`;

    if (num === 0) {
      clearInterval(displayTime);
      playAlarm();
    }

    num--;
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
