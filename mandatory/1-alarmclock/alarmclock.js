// I had help with this exercise

let remainingSeconds; // you can't use this variable name on line 15, because on line 9 you are only getting it; it doesn't change it in the HTML, so the variable won't remember the value
let isButtonThere = false; // pause button is not visible until setAlarm() is called
let isPauseOn = false; // response on second click of pause button
let flashing;

function setAlarm() {
  // setting variables, getting input and making sentence
  let body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "pink";
  let timeRemaining = document.getElementById("timeRemaining");
  remainingSeconds = document.getElementById("alarmSet").value;
  let formattedTime = formatTimer(remainingSeconds);
  timeRemaining.textContent = `Time Remaining: ${formattedTime}`;
  // adding a set interval to decrease time, change colours and sentence
  let decreaseTimer = setInterval(function () {
    document.getElementById("alarmSet").value = " ";
    remainingSeconds--;
    formattedTime = formatTimer(remainingSeconds);
    timeRemaining.textContent = `Time Remaining: ${formattedTime}`;
    // determining what to do if it reaches zero
    if (remainingSeconds === 0) {
      clearInterval(decreaseTimer);
      playAlarm();
      let counter = 0;
      flashing = setInterval(function () {
        body.style.background =
          "rgba(255,0,255," + Math.abs(Math.sin(counter)) + ")";
        counter += 0.01;
      }, 1);
    }
  }, 1000);
  if (remainingSeconds <= 0) {
    return;
  }
  // adding a pause button with a restart aspect
  if (!isButtonThere) {
    let buttons = document.getElementById("buttons");
    let pauseButton = document.createElement("button");
    pauseButton.textContent = "Pause Alarm";
    buttons.appendChild(pauseButton);
    function pauseAlarm() {
      if (!isPauseOn) {
        clearInterval(decreaseTimer);
        pauseButton.textContent = "Resume Alarm";
        isPauseOn = true;
      } else {
        document.getElementById("alarmSet").value = remainingSeconds;
        pauseButton.textContent = "Pause Alarm";
        setAlarm();
        isPauseOn = false;
      }
    }
    pauseButton.addEventListener("click", pauseAlarm);
    isButtonThere = true;
  }
}
// formatting time [found on Google]
function formatTimer(seconds) {
  if (seconds <= 0) {
    return "00:00";
  }
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds - minutes * 60;
  let padLowSeconds = remainingSeconds < 10 ? "0" : "";
  let padLowMinutes = minutes < 10 ? "0" : "";
  return `${padLowMinutes}${minutes}:${padLowSeconds}${remainingSeconds}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function stopAlarm() {
  audio.pause();
  clearInterval(flashing);
}

window.onload = setup;
