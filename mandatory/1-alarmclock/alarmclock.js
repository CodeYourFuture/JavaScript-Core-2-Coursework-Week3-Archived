function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const alarmSet = document.getElementById("alarmSet");
  const setAlarmBtn = document.getElementById("set");
  const stopAlarmBtn = document.getElementById("stop");
  const pauseAlarmBtn = document.getElementById("pause");


  let count;
  let intervalId;
  setAlarmBtn.addEventListener("click", function(){
    count = alarmSet.value;

    intervalId = setInterval(function(){
      let minutes = Math.floor(count / 60);
      let seconds = count % 60;
      
      timeRemaining.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
      if (count == 0){
        audio.play();
        clearInterval(intervalId);
        document.body.style.backgroundColor = "orange";
      }

      count --;
      alarmSet.value = "";
    }, 1000);
  });

  pauseAlarmBtn.addEventListener("click", function(){
    clearInterval(intervalId);
  });
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
