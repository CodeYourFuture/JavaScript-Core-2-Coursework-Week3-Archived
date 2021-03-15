function setAlarm() {
  let tRemainEl = document.
    getElementById("timeRemaining");
  let inputEl = document.
    getElementById("alarmSet");
  // console.log(tRemainEl.TEXT_NODE);
  // console.log(tRemainEl.textContent);
  let displayedTime = inputEl.value;
  let timer;
  // find out how to run just one timer
  if (!timer) {
   timer = setInterval(() => {
    // console.log(`displayed time is ${displayedTime} on line 10`);
    displayedTime--;
    tRemainEl.textContent = `Time Remaining:${displayedTime}`;
    // console.log(`displayed time is ${displayedTime} on line 12`);
    if (displayedTime === 0) {
      var audio = new Audio("alarmsound.mp3");
      audio.play();
      clearInterval(timer);
    }
    // inputEl.value="";
   }, 1000);
  }
  
  
  let stopEl = document.getElementById("stop");
  stopEl.addEventListener("click", () => {
    clearInterval(timer);
    tRemainEl.textContent = "Time Remaining:00:00";
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
