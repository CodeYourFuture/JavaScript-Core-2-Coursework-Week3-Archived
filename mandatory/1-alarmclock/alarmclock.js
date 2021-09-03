let pauseButton = document.createElement("button"); //pause button created
pauseButton.id = "pauseBtn";
pauseButton.innerText = "Pause Alarm"; // the text of the pause button
pauseButton.style.marginLeft = "5px";
let lastButton = document.getElementById("stop"); //targetting the last button in the div
lastButton.parentNode.insertBefore(pauseButton, lastButton.nextSibling); //appended the pause button

function setAlarm() {
  let alarmSetInputValue = document.getElementById("alarmSet").value;

  let timeRemaining = document.getElementById("timeRemaining");

  let timeCountdown = setInterval(() => {
    const hours = Math.floor(alarmSetInputValue / 3600)
      .toString()
      .padStart(2, 0);
    const minutes = Math.floor((alarmSetInputValue % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (alarmSetInputValue % 60).toString().padStart(2, "0");
    timeRemaining.innerHTML = `Time Remaining: ${hours}:${minutes}:${seconds}`;

    if (alarmSetInputValue === 0) {
      clearInterval(timeCountdown);
      playAlarm();
    } else {
      alarmSetInputValue--;
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
