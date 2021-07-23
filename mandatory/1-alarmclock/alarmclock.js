//Acesssing Elements In The DOM
let timeRemaining = document.getElementById('timeRemaining');
let alarmSet = document.getElementById('alarmSet');
let setButton = document.getElementById('set');
let stopButton = document.getElementById('stop');

function setAlarm() {
  setButton.addEventListener('click', (e) => {
    e.preventDefault();
    let timeValue = alarmSet.value;
    timeRemaining.innerText = `Time Remaining: 00:${timeValue}`;

    if (timeValue > 0) {
      let timeFuntion = () => {
        nIntervId = setInterval(() => {
          console.log("Minus One")
        }, 1000);
      }

      timeFuntion();
    }
  });
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
