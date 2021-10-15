function setAlarm() {
  // this gets a value from the inputted number then resets the input box
  let timeValue = document.getElementsByTagName("input")[0].value;
  document.getElementsByTagName("input")[0].value = "";
  // this function formats the digits of the alarm
  function twoDigs(num) {
    return (num < 10 ? "0" : "") + num;
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
      document.body.style.background="red";
      playAlarm();

    }
    timeValue -= 1;
  }

  setInterval(countDown, 1000);
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
