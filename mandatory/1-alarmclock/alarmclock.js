let isAlarmSet = false;

function setBtnEventListener() {
  let heading = document.getElementById("timeRemaining");
  let timer;
  let input = document.getElementById("alarmSet");
  if(input.value !== "" && !isAlarmSet) {
    console.log("Alarm has been set!");
    isAlarmSet = true;
    timer = input.value;
    input.value = "";
  }
  let intervalId = setInterval(function() {
    if(timer >= 0) {
      let minutes = Math.floor(timer / 60);
      let seconds = timer % 60;
      timer--;
      console.log("Timer decremented!");
      heading.innerHTML = `Time Remaining: ${minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`;
    }
    if(timer === -1) {
      playAlarm();
      clearInterval(intervalId);
      isAlarmSet = false;
    }
  }, 1000);
}

function setAlarm() {
  let setBtn = document.getElementById("set");
  setBtn.addEventListener("click", setBtnEventListener);
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
