function setAlarm() {
  function timeConverter(num) {
    const minutes = Math.floor(num / 60);
    const seconds = num % 60;
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
  }
  let intervalToSet = document.querySelector("#alarmSet");
  let intValue = intervalToSet.value;
  let heading = document.getElementById("timeRemaining");
  let intervalValue = timeConverter(intValue);
  heading.textContent = `Time Remaining: ${intervalValue}`;
  let timeRemaining = +intervalToSet.value;

  const interval = setInterval(() => {
    if (timeRemaining === 0) {
      playAlarm();
      clearInterval(interval);
    } else {
      timeRemaining--;
      heading.textContent = `Time Remaining: ${timeConverter(timeRemaining)}`;
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
  document.body.style.backgroundColor = "red";
}

function pauseAlarm() {
  audio.pause();
  document.body.style.backgroundColor = "white";
}

window.onload = setup;
