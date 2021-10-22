var currentTimer = 0;
var intervalHandle;

function setAlarm() {
  let enteredNum = document.getElementById('alarmSet').value;
  console.log(enteredNum);
  if (enteredNum.includes(":")) {
    currentTimer = Math.floor(Number(enteredNum.split(":")[0]) * 60) + Number(enteredNum.split(":")[1]);
  } else if (!isNaN(Number(enteredNum))) {
    currentTimer = enteredNum;
  }
  if (currentTimer > 0) {
    setTimeRemaining();

    intervalHandle = setInterval(() => {
      currentTimer--;
      setTimeRemaining();
      if (currentTimer <= 0) {
        playAlarm();
        clearInterval(intervalHandle);
      }
    }, 1000);
  }
}

function setTimeRemaining(time = currentTimer) {
  document.querySelector("#timeRemaining").innerText = `Time Remaining: ${("0" + Math.floor(time / 60)).slice(-2)}:${("0" + (time % 60)).slice(-2)}`;
}


document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalHandle);
})

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
