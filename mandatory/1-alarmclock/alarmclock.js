function refresh(){
  location.reload();
}

function setAlarm() {
  let alarmTime = document.getElementById("alarmSet").value;
  let minutes = Math.floor(alarmTime / 60);
  let seconds = alarmTime % 60;
  document.getElementById("timeRemaining").innerHTML=`Time Remaining: ${minutes.toLocaleString(undefined,{minimumIntegerDigits: 2})}:${seconds.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
  
  setInterval(function(){

    if (alarmTime===0){
      playAlarm("alarmsound.mp3");
      document.getElementById("stop").addEventListener("click",refresh);
      
    }
    else {
        alarmTime--;
        if(alarmTime < 0){return undefined;}
        minutes = Math.floor(alarmTime / 60);
        seconds = alarmTime % 60;
        document.getElementById("timeRemaining").innerHTML=`Time Remaining: ${minutes.toLocaleString(undefined,{minimumIntegerDigits: 2})}:${seconds.toLocaleString(undefined,{minimumIntegerDigits: 2})}`;
}

  }
    ,1000);
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
