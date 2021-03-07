function setAlarm() {
  let input = document.querySelector("#alarmSet").value;
  let timeRemanining = document.querySelector("#timeRemaining");
  let minutes = Math.floor(input / 60);
  let seconds = input % 60;
  timeRemanining.innerHTML = `Time Remaining: ${minutes.toLocaleString('en-GB', {minimumIntegerDigits: 2})}:${seconds.toLocaleString('en-GB', {minimumIntegerDigits: 2})}`;
  document.querySelector("#stop").addEventListener("click", function(){
    location.reload();
  })
  setInterval(function () {
    if (input === 0) {
      playAlarm();
    } else {
      input--;
      let minutes = Math.floor(input / 60);
      let seconds = input % 60;
      timeRemanining.innerHTML = `Time Remaining: ${minutes.toLocaleString('en-GB', {minimumIntegerDigits: 2})}:${seconds.toLocaleString('en-GB', {minimumIntegerDigits: 2})}`;
    }
  }, 1000);
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
