let interval;
const backgroundC=document.querySelector('.centre')
function setAlarm() {
  const time = document.getElementById("alarmSet");
  let convert = convertTime(time.value);
  const head = document.getElementById("timeRemaining");
  head.innerText = `Time Remaining: ${convert}`;
  interval = setInterval(evaluate, 1000);
}
function evaluate() {
  const time = document.getElementById("alarmSet");
  const head = document.getElementById("timeRemaining");
  if (time.value < 1) {

    setInterval(() => {
      const rndCol =
        "rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ")";
     
      backgroundC.style.backgroundColor = rndCol;
   },1000)
    clearInterval(interval);
    playAlarm();
  } else {
    --time.value;
    convert = convertTime(time.value);
    head.innerText = `Time Remaining: ${convert}`;
  }
}


function convertTime(timer) {
  let timestamp = timer;
  let minutes = Math.floor(timestamp / 60);
  let seconds = timestamp % 60;
  let formatted =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
  return formatted;
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
  clearInterval(interval)

  audio.pause();
}

window.onload = setup;
