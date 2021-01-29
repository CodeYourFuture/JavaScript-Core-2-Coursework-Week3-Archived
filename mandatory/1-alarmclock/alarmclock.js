function setAlarm() {
  let setAlarmBtn = document.getElementById("set");
  let h1 = document.getElementById("timeRemaining");
  let stopBtn = document.getElementById("stop");
 
   setAlarmBtn.addEventListener("click", function () {
    let input = document.getElementById("alarmSet");
    let minutes;
    let seconds = 
    h1.innerHTML = input.value
    // function timeEverySecond () {
    // }

  //   setInterval(timeEverySecond, 1000);
  //   h1.innerHTML = `Time Remaining: ${input.value * 10}`;
  //  })
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
