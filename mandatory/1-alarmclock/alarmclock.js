function setAlarm() {
  const timer = document.getElementById("timeRemaining");
  let alarmInput = document.getElementById("alarmSet").value;
  
  let counter = setInterval(() => {
    const minutes = Math.floor(alarmInput / 60).toString().padStart(2, "0");
    const seconds = (alarmInput % 60).toString().padStart(2, "0");
    timer.innerText = `Time Remaining: ${minutes}:${seconds}`;
    if(alarmInput === 0) {
      clearInterval(counter)
      playAlarm();
    } else {
      alarmInput--;
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
