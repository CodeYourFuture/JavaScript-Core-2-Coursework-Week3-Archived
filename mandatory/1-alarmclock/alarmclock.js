let timerValue = 0;
let colorSet = 0;
let iscount = 0;
let myInterval;

function setAlarm() {
  let inputNum = document.getElementById("alarmSet");
    // let onlyTime = timeRemain.innerText.substring(timeRemain.innerText.length-5);

    document.getElementById("stop").onclick = function() {
      iscount = 1;
      colorSet = 1;
  };
  document.getElementById("set").onclick = function() {
      iscount = 0;
      if (timerValue < 0)
        timerValue = inputNum.value;
  };
    let timeRemain = document.getElementById("timeRemaining");
  
    if (iscount === 0){
    
    timerValue = inputNum.value;
    
  }
  else
  {
    if (timerValue > 0)
      iscount = 0;
  }
    
  let minutes = Math.round(timerValue / 60,0);
    if (minutes<10)
      minutes = "0"+ minutes;
    let seconds = Math.round(timerValue % 60,0);
    if (seconds < 10)
      seconds = "0"+ seconds;
    let tempTimer = minutes+":"+seconds;

    timeRemain.innerText = "Time Remaining: "+ tempTimer;

    decreasAlarm(setTime)
  
}

function setTime(){
  let timeRemain = document.getElementById("timeRemaining");
  let inputNum = document.getElementById("alarmSet");
  

  let minutes = Math.floor(timerValue / 60, 0);
    if (minutes<10)
      minutes = "0"+ minutes;

    let seconds = Math.floor(timerValue % 60, 0);
    if (seconds < 10)
      seconds = "0"+ seconds;
    let tempTimer = minutes+":"+seconds;

    timeRemain.innerText = "Time Remaining: "+ tempTimer;

if (timerValue == 0)
    {
       inputNum.value = "";
        playAlarm();
        colorSet = 0;
        iscount = 0;
        timerValue = 0;
        SetColor(SetColor);
     } 
}

function decreasAlarm(callback){
    clearInterval(myInterval);
    myInterval = setInterval(() => {
      if (iscount == 0){
        timerValue--;
        if (timerValue >= 0)
          {
            callback();
          }
        }
      }, 1000);

}

function SetColor(callback){
  clearInterval(myInterval);
  myInterval = setInterval(() => {
    let body = document.querySelector("body");
    if (colorSet == 0){
      let color = Math.floor(Math.random()*16777215).toString(16);
      body.style.backgroundColor = "#"+ color;//rgb(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256));
        // alert(color);
      callback();
    }
    else 
      body.style.backgroundColor = "white";
}, 500);
}

function ResetColor(){
  body.style.backgroundColor = "white";
}

function stopIt(){
    clearInterval(myInterval);
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
