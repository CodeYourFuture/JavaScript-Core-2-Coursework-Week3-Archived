function setAlarm() {
  const set = document.querySelector('#set');
  const stop = document.querySelector('#stop');
  const input = document.querySelector('#alarmSet');
  const timeRemanining = document.querySelector('#timeRemaining');
  let inputValue = input.value;
  let minutes = Math.floor(inputValue / 60);
  let seconds = inputValue % 60;
  seconds -=1;
  set.addEventListener('click', () => {
    timeRemanining.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
  })
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
