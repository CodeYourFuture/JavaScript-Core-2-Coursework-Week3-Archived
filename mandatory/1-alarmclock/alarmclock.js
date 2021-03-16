function setAlarm() {
  let alarmInput = document.getElementById("alarmSet").value;
  let setAlarm = document.getElementById("timeRemaining");
  let stopAlarm = document.getElementById("stop");
  let clock = setInterval(timesUp, 1000);
  function timesUp() {
    if (alarmInput < 0) {
      playAlarm();
      clearInterval(clock);
      let i = 0 
      function changeColor(){
        let background = document.getElementsByTagName("div")[0];
        let color = ["crimson", "blue", "gray", "orange", "purple", "yellow", "pink"];
        background.style.backgroundColor = color[i];
        i = (i + 1) % color.length
      }
      setInterval(changeColor, 150)
    }
    else {
      let minutes = Math.floor(alarmInput / 60);
      let seconds = alarmInput % 60;
      setAlarm.innerHTML = `Time Remaining: ${minutes}: ${seconds}`;
      alarmInput -= 1;
    }
  }
  stopAlarm.addEventListener("click", stopButton);
    function stopButton(){
      if(alarmInput){
        clearTimeout(clock);
        
      }
  }
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
