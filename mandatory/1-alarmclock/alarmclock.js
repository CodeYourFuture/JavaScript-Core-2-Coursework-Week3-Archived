let timeRemaining = 0; // variable to store
function setAlarm() {
  let inputBox = document.getElementById("alarmSet");
  let valueIn = inputBox.value; // get the entered value from the input box

  inputBox.value = "";

  if (!valueIn) {
    alert("Please set the time.");
    inputBox.focus();
    return;
  } else if (valueIn / 3600 > 24) {
    alert(
      "Please enter a smaller number. Alarm cannot be set for more than 24 hours (1 day)."
    );
    inputBox.focus();
    return;
  } else {
    valueIn = parseInt(valueIn); // only integer values are entertained
  }

  display(valueIn); // display the remaining time
  if (valueIn > 0) {
    timeRemaining = valueIn;
  }
}

function display(value) {
  // get the element where set alarm time is displayed
  let displayTime = document.getElementById("timeRemaining");
  // change given input time value-in-seconds to hh:mm:ss format and...
  // ...display the calculated remaining time
  displayTime.textContent = `Time Remaining: ${secondsToTime(value)}`;
}

// This function turns the given time in seconds into time format
function secondsToTime(value) {
  let hours = 0; // number of hours
  let mins = 0; // number of minutes
  let secs = 0; // number of seconds

  hours = Math.floor(value / 3600);
  value = value - hours * 3600;
  mins = Math.floor(value / 60);
  value = value - mins * 60;
  secs = value;

  hours = numberToString(hours); // format the hours value
  mins = numberToString(mins); // format the hours value
  secs = numberToString(secs);
  // return the formatted time value
  return `${hours}:${mins}:${secs}`;
}

// function to change the number to a specific string format
function numberToString(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
}

// This is where the countdown action happens
setInterval(() => {
  let zeroValue;
  if (timeRemaining > 0) {
    display(--timeRemaining);
    zeroValue = timeRemaining;
  }
  if (zeroValue === 0) {
    playAlarm();
  }
}, 1000);

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
