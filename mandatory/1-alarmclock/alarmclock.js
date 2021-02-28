const body = document.querySelector("body");
let input = document.getElementById("alarmSet");
const timeRemaining = document.getElementById("timeRemaining");
const stopAlarm = document.getElementById("stop");

function setAlarm() {
  let inputValue = input.value;
  input.value = "";
  let time = setInterval(() => {
    if(inputValue > 0) {
      inputValue--;
      body.style.backgroundColor = "green";
    }

    if(inputValue === 0){
      clearInterval(time);
      playAlarm();
      body.style.backgroundColor = "red";
    }

    timeRemaining.textContent = `Time Remaining: 00:${inputValue} `

  }, 1000)
}

stopAlarm.addEventListener("click", () => {
  pauseAlarm();
  body.style.backgroundColor = "white";
  timeRemaining.textContent = `Time Remaining: 00:00`;
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
