



function setAlarm() {
var countdown = document.getElementById("stopwatch");
let inputField = document.getElementById('alarmSet').value;
let alarmSetButton = document.getElementById('set');

alarmSetButton.addEventListener('click', () =>
{
  countdown.textContent = inputField;
  countdown.inputField = parseFloat(countdown.inputField) - 1;
});
window.setInterval(alarmSetButton, 1000);
};


//   
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
