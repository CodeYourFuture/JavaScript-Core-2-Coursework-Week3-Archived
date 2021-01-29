function setAlarm() {
  // let timeRemainCounter = document.getElementById("timeRemaining");
  // let inputText = document.getElementById("alarmSet");
  // let btnSet = document.getElementById("set");
  // let btnStop = document.getElementById("stop");
  // console.log(inputText.value);
  let timeRemainingValue = inputText.value;
  timeRemainingValue--;
  timeRemainCounter.innerHTML = `Time Remaining: 00:0${timeRemainingValue}`;
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
