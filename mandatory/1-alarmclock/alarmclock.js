function setAlarm() {
  let h1 = document.getElementById("timeRemaining");
  let input = document.getElementById("alarmSet").value;

  let minutes = Math.floor(input / 60);  
  let seconds = input % 60;
  
  var timer = setInterval(function () {
  if(minutes > 0 && seconds === 0) {
minutes --;
seconds = 59;
  }
if (seconds === 0) {
  clearInterval(timer);
   playAlarm();
}
h1.innerHTML = `Time Remaining: ${minutes} : ${seconds}`;
seconds --;
  }, 1000);
};


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
