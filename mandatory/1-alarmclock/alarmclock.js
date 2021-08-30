
function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  let inputValue = document.getElementById("alarmSet").value;
  

  timer = num => {
    const minutes = Math.floor(num / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (num % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  let intervalId = setInterval(() => {
    timeRemaining.innerHTML = `Time Remaining: ${timer(inputValue)}`;
    if (inputValue === 0) {
      clearInterval(intervalId);
      playAlarm();
      document.body.style.backgroundColor = "red";
      // inputValue = null;
    } inputValue --;
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
