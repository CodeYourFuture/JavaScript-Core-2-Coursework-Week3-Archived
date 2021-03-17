

function setAlarm() {
  let inputEl = document.getElementById("alarmSet");
  display(inputEl.value);
  
  }



function display(timeInput) {
 
  let tRemainEl = document.getElementById("timeRemaining");
  let stopEl = document.getElementById("stop");
  let time = timeInput * 60;

    document.getElementById("set").textContent = "Pause Alarm";
    
    testTimer = setInterval(() => {
  
    let tseconds = time % 60 < 10 ? '0' + time % 60 : time % 60;
    let tminutes = Math.floor(time / 60) < 10 ? '0' + Math.floor(time / 60) :
      Math.floor(time / 60);
      
    tRemainEl.textContent = `Time Remaining : ${tminutes}:${tseconds}`;
 
    if (time === 0) {
      playAlarm();
      clearInterval(testTimer);
    }
    time--;

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
