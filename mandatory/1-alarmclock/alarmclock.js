function setAlarm() {
  let alarmSet = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");
  let stopButton = document.getElementById("stop");

  let timeRemainingText = timeRemaining.innerHTML.split(":")[0];
  let minutes = timeRemaining.innerHTML.split(":")[1].trim();
  let seconds = timeRemaining.innerHTML.split(":")[2].trim();

  alarmSet = parseInt(alarmSet);
  minutes = parseInt((alarmSet / 60).toFixed(2));
  console.log(minutes);
  seconds = parseInt(alarmSet - minutes * 60);
  
  function setTime() {
    if (seconds > 0) {
      seconds -= 1;
      seconds = seconds.toString().padStart(2, "0");
      minutes = minutes.toString().padStart(2, "0");
      timeRemaining.innerHTML = `${timeRemainingText}: ${minutes}:${seconds}`;
      setTimeout(setTime, 1000);
    } else if (minutes > 0) {
      minutes -= 1;
      seconds = 59;
      seconds = seconds.toString().padStart(2, "0");
      minutes = minutes.toString().padStart(2, "0");
      timeRemaining.innerHTML = `${timeRemainingText}: ${minutes}:${seconds}`;
      setTimeout(setTime, 1000);
    } else {
      playAlarm();
    }
    if(stopButton.disabled) {
      stopButton.disabled = false;
      pauseAlarm();
    }
  }

  setTime();

  //Stop the alarm
  stopButton.addEventListener("click", () => {
    clearTimeout(setTime);
    minutes = 00;
    seconds = 00;
    timeRemaining.innerHTML = `${timeRemainingText}: 00:00`;
    stopButton.disabled = true;
  });  
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
