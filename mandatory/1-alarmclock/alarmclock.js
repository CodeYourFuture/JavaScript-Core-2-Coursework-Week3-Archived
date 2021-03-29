function setAlarm() {
  let alarmInput = document.getElementById("alarmSet");
  let remainingTime = document.getElementById("timeRemaining");

  let timer = setInterval(() => {
    if (alarmInput.value === 0){
      remainingTime.innerHTML = "Time Remaining: 00:00";
      alarmInput.value = "";
      playAlarm();
    } else if (alarmInput.value >= 0 < 10){
    remainingTime.innerHTML = `Time Remaining: 00:0${alarmInput.value}`;
    alarmInput.value -= 1;
    }else if (alarmInput.value >=10 <100){
      remainingTime.innerHTML = `Time Remaining: 00:${alarmInput.value}`;
      alarmInput.value -= 1;
    }else if(alarmInput.value >=100 < 1000){
      remainingTime.innerHTML = `Time Remaining: 0${alarmInput.value}:00`;
      alarmInput.value -= 1;
    }
    
  }, 1000);

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer);
    alarmInput.value = "";
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
