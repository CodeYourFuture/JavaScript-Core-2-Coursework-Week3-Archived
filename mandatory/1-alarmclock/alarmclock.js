function setAlarm() {
  // this gets a value from the inputted number then resets the input box
  let timeValue = document.getElementsByTagName("input")[0].value;
  document.getElementsByTagName("input")[0].value = "";
  // this function formats the digits of the alarm
  function twoDigs(num) {
    return (num < 10 ? "0" : "") + num;
  }
  let colours = ["red", "orange", "green", "blue", "purple"];
  function colourChanger() {
    let colour = colours[Math.floor(Math.random() * 5)];
    document.body.style.background = colour;
  }

  // this function sets and decreases the 'time remaining' value
  function countDown() {
    let remaining = document.getElementById("timeRemaining");
    let seconds = timeValue % 60;
    let minutes = (timeValue - seconds) / 60;
    if (timeValue >= 0) {
      remaining.innerHTML = `Time Remaining: ${twoDigs(minutes)}:${twoDigs(
        seconds
      )}`;
    }
    if (timeValue === 0) {
      setInterval(colourChanger, 1000)
      playAlarm();
    }
    timeValue -= 1;
  }
  let intervalId;
  function stopStart() {
    if (!intervalId) {
      intervalId = setInterval(countDown, 1000);
      document.getElementById("pause").addEventListener("click", () => {
        clearInterval(intervalId);
        intervalId = null;
      });
      document.getElementById("continue").addEventListener("click", () => {
        intervalId = setInterval(countDown, 1000);
      });
    }
  }
  stopStart();
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
