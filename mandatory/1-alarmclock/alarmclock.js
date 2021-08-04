function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const timeInputValue = document.getElementById("alarmSet").value;
  const setAlarmBtn = document.getElementById("set");
  let stopAlarmBtn = document.getElementById("stop");

  let timeCount = timeInputValue,
    clear;

  convertTime();
  setAlarmBtn.addEventListener("click", setAlarmTime);
  stopAlarmBtn.addEventListener("click", stopTimeCount);

  function convertTime() {
    const timesInMinutes = Math.floor(timeCount / 60);
    const timesInSeconds = timeCount % 60;
    timeCount--;
    timeRemaining.innerText = `Time Remaining: ${timesInMinutes}:${timesInSeconds}`;
  }
  function setAlarmTime() {
    clear = setInterval(convertTime, 1000);
    if (timeCount < 0) {
      playAlarm();
      stopTimeCount();
      timeRemaining.innerText = "Time Remaining: 00:00";
    }
  }
  function stopTimeCount() {
    clearInterval(clear);
  }
}

//  When the `Set Alarm` button is clicked, get the value of the input field
// 2. When you have the input field value, set the title to the correct value
// 3. Work out how to update the `Time Remaining` title every second
// 4. When the remaining time left is 0, play the alarm sound
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
