function setAlarm() {
  let alarmInput = document.getElementById("alarmSet");
  let remainingTime = document.getElementById("timeRemaining");

  let timer = setInterval(() => {
    
    if (alarmInput.value > 0 && alarmInput.value< 10){
      console.log("Second", alarmInput.value);
    remainingTime.textContent = `Time Remaining: 00:0${alarmInput.value - 1}`;
    alarmInput.value -= 1;

    }else if (alarmInput.value >=10 && alarmInput.value<100){
      console.log("Third", alarmInput.value);
      remainingTime.textContent = `Time Remaining: 00:${alarmInput.value -1}`;
      alarmInput.value -= 1;

    }else if(alarmInput.value >=100 && alarmInput.value< 1000){
      console.log("Fourth", alarmInput.value);
      remainingTime.textContent = `Time Remaining: 0${alarmInput.value- 1}:0`;
      alarmInput.value -= 1;
    }
    else {
      playAlarm();
      remainingTime.textContent = "Time Remaining: 00:00";
    }
  }, 1000);


  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer);
    remainingTime.textContent = "Time Remaining: 00:00";
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
