function setAlarm() {
  let timeRemain = document.getElementById('timeRemaining');
  let setTime = document.getElementById('alarmSet').value;

  let timer = setInterval(timing,1000);

  function timing (){

    if(setTime < 0){
      playAlarm();
      let setAlarmColor = document.querySelector('body');
      setAlarmColor.style.backgroundColor = 'red';
      clearInterval(timer);
      
    }//if closing

    else {
      let minutes = Math.floor(setTime / 60);
      let seconds = setTime % 60;
      timeRemain.innerText = `Time Remaining: ${minutes}:${seconds}`;
      setTime -= 1;
      let setAlarmColor = document.querySelector('body');
      setAlarmColor.style.backgroundColor = 'green';
    }

  }//timing func closing
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
