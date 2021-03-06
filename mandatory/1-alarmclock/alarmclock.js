function flashing(col) {
  var tmpColCheck = document.getElementsByTagName("body")[0].style.background;
  if (tmpColCheck === "silver") {
    document.getElementsByTagName("body")[0].style.background = col;
  } else {
    document.getElementsByTagName("body")[0].style.background = "silver";
  }
}
let timeInterval;
let flashingInterval;
function setAlarm() {
  let inputElement = document.getElementById("alarmSet");
  let inputContent = inputElement.value;
  if (inputContent != "") {
    inputElement.value = "";
    let timeRemainingInput = document.getElementById("timeRemaining");
    timeRemainingInput.innerHTML = `Time Remaining 00:${inputContent}`;
    timeInterval = setInterval(function () {
      if (inputContent === 0) {
        playAlarm();
        inputContent--;
      } else if (inputContent > 0) {
        inputContent--;
        let twoDigitTime = inputContent.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        });
        timeRemainingInput.innerHTML = `Time Remaining 00:${twoDigitTime}`;
      } else if (inputContent <= 0) {
        flashingInterval = setInterval(function () {
          flashing("purple");
          flashing("blue");
          flashing("red");
        }, 1);
      }
    }, 1000);
  } else alert("Please enter the time!");
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

function pauseBtn() {
  clearInterval(timeInterval);
  clearInterval(flashingInterval);
}

window.onload = setup;
