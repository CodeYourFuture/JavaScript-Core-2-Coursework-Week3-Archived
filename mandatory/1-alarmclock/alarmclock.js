function setAlarm() {
  let alarmClock = document.getElementById("alarmSet");
  let alarmPlay = document.getElementById("timeRemaining");
   if (alarmClock.value > 0) {
     alarmClock.value--;
     let time = alarmClock.value;
     let minutes = Math.floor(time / 60);
     let seconds = time % 60;
     seconds = seconds < 10 ? "0" + seconds : seconds;
     minutes = minutes < 10 ? "0" + minutes : minutes;
     alarmPlay.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
   } else if (alarmPlay.innerHTML === "Time Remaining: " + "00:" + "00") {
     playAlarm();
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
}

window.onload = setup;
