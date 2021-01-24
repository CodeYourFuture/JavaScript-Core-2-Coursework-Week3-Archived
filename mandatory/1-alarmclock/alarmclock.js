//objects UI
const inputTime = document.getElementById('alarmSet');
const btnTimeSet = document.getElementById('set');
const btnTimeStop = document.getElementById('stop');
const alarmDisplay = document.getElementById('timeRemaining');
const body = document.getElementById('main');
//Variable made to global scope
let timer;
let flashesInterval;
const audio = new Audio("alarmsound.mp3");

//functions
function playAlarm() {
  audio.play();
  flashingBackground()
}

function stopAlarm() {
  clearInterval(timer);
  clearInterval(flashesInterval);
  audio.pause();
  alarmDisplay.textContent = `Time Remaining: 00: 00`;
  body.style.backgroundColor = 'white';
}

//let use closures 
function flashingBackground() {
  let noOfChanges = 11;
  function flashes() {
    body.style.backgroundColor = noOfChanges % 2 === 0 ? "red" : "white";
    if (noOfChanges === 0) clearInterval(flashesInterval)
    noOfChanges--
  };

  flashes()
  flashesInterval = setInterval(flashes, 1000);
  return flashesInterval
}

const clockCounting = function () {
  let time = inputTime.value;
  body.style.backgroundColor = 'white'; // reset because of the bug
  const tickTack = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //Time Update on UI
    alarmDisplay.textContent = `Time Remaining: ${min}: ${sec} `;
    if (time === 0) {
      clearInterval(timer)
      playAlarm();
      // TODO add here another function to start alarm and stop counting
    }

    //decrease by 1 second
    time--
  };
  tickTack()
  timer = setInterval(tickTack, 1000);
  return timer;
}

//adding events
btnTimeSet.addEventListener("click", () => {
  clockCounting();
  inputTime.value = 0;

});

btnTimeStop.addEventListener("click", () => {
  stopAlarm();

});
// window.onload = setup;
