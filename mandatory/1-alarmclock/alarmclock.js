let pageBody = getElementById("body")

function setAlarm() {
  let setAlarm = document.getElementById("alarmSet")
  let setAlarmTime = document.getElementById("alarmSet").value
  let remainTime = document.getElementById("timeRemaining")
  let alarmTimeSet = document.getElementById("set")
  let alarmTimeResume = document.getElementById("resume")
  let alarmTimeStop = document.getElementById("stop")

  let alarmSeconds = setAlarmTime % 60
  let alarmMinutes = Math.floor(setAlarmTime % 60)

  remainTime.textContent = `Time Remaining : ${alarmMinutes} : ${alarmSeconds}`

  let 
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
