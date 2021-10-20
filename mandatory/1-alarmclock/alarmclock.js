let timerHasBeenSet = false
function setAlarm() {
  const userInput = document.getElementById("alarmSet");
  const timeRemaining = document.getElementById("timeRemaining");
  timerHasBeenSet = true;
  let timeLeft = userInput.value;
  function timer() {
    timeLeft--;
    timeRemaining.innerHTML = `Time Remaining: ${timeLeft}`;
  }
  setInterval(() => {
    if (timeLeft > 0) {
      timer();
    }else if(timeLeft <= 0 && timerHasBeenSet === true){
      //play the alarm then
      //set the hasBeenSet to false
      playAlarm();
      timerHasBeenSet = false;
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
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
