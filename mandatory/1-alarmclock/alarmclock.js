function setAlarm() {
  let timeRemaining = document.getElementById("timeRemaining");
  let alarmSet = document.getElementById("alarmSet").value;
  //let timeValue = document.getElementsByTagName("input");

  //console.log(timeValue);

  setInterval(() => {
    if (alarmSet > 0) {
      alarmSet--;
      let minutes = Math.floor(alarmSet / 60);
      let seconds = alarmSet % 60;
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      timeRemaining.innerText = `Time Remaining: ${minutes} : ${seconds}`;

      if (alarmSet === 0) {
        playAlarm();
      }
    }
  }, 1000);
  
}
function pauseAlarm(){
  clearInterval()
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
