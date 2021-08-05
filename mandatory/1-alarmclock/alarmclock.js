function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  let timeInputValue = document.getElementById("alarmSet").value;

  function convertTime() {
    const timesInMinutes = Math.floor(timeInputValue / 60);
    const timesInSeconds = timeInputValue % 60;
    if (timeInputValue === 0) {
      playAlarm();
      clearInterval(clear);
      //stopTimeCount();
      timeRemaining.innerText = "Time Remaining: 00:00";
    } else {
      timeInputValue--;
    }
    timeRemaining.innerText = `Time Remaining: ${timesInMinutes}:${timesInSeconds}`;
  }

  let clear = setInterval(convertTime, 1000);
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
