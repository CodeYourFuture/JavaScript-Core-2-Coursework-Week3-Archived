function setAlarm() {
  let alarmSet = document.getElementById("alarmSet").value;
  const timeLeft = document.getElementById("timeRemaining");

  const isInterval = setInterval(() => {
    const minutes = Math.floor(alarmSet / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (alarmSet % 60).toString().padStart(2, "0");
    timeLeft.innerText = `Time Remaining: ${minutes}:${seconds}`;
    if (alarmSet === 0) {
      clearInterval(isInterval);
      playAlarm();
    } else {
      alarmSet--;
      console.log(alarmSet);
    }

    const alarmSound = alarmPlaying(() => {
      const playButton = document.getElementById("button");
      if (alarmSet === 0) {
        alarmPlaying(audio.play);
      }
    });
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
