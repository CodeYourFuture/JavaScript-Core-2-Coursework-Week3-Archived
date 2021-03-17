function setAlarm() {
  let alarmValue = document.getElementById("timeRemaining");
  let alarmValueInput = document.getElementById("alarmSet").value;
  if (document.getElementById("alarmSet").value === "") {
    alert("enter value")
  }else{
    counterInterval = setInterval(function() {
    alarmValue.textContent = alarmValueInput
    alarmValueInput--
    if (alarmValueInput === -1) {
      playAlarm();
      clearInterval(counterInterval)
    }
  }, 1000);
  }
  document.getElementById("alarmSet").value = ""
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
