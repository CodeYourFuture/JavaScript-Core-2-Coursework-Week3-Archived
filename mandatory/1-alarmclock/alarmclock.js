//Declaring variables
let setAlarmBtn, stopAlarmBtn, pauseAlarmBtn, input, counter;

//Assigning ids to variables
setAlarmBtn = document.getElementById("set");
stopAlarmBtn = document.getElementById("stop");
pauseAlarmBtn = document.getElementById("pause");
input = document.getElementById("alarmSet");
counter = document.getElementById("timeRemaining");

//Start alarm function
function setAlarm() {
  let hours, minutes;
  if(input.value >= 60){
    hours = Math.floor(input.value / 60);
    minutes = input.value - hours * 60;
    if(minutes < 10){
      counter.innerText = `Time Remaining: ${hours}:0${minutes}`
    } else {
      counter.innerText = `Time Remaining: ${hours}:${minutes}`
    }
  } else {
    minutes = input.value
    if(minutes < 10){
      counter.innerText = `Time Remaining: 00:0${minutes}`;
    } else {
      counter.innerText = `Time Remaining: 00:${minutes}`;
    }
  }
  if(input.value > 0){
    input.value--;
  } else {
    playAlarm();
    setInterval(changeColor, 1000);
    document.body.style.backgroundColor = "#ffffff";
  }
}

//This function handles the countdown
let countDown= function() {
  setInterval(setAlarm, 1000);
}

//This function sets the background colour to red when it is called 
function changeColor(){
    document.body.style.backgroundColor = "red";
}

//This function sets the background colour to white when it is called 
function plainBackground(){
  document.body.style.backgroundColor = "#ffffff";
}

//Listening for events
setAlarmBtn.addEventListener("click", countDown);
stopAlarmBtn.addEventListener("click", function(){
  clearInterval(countDown);
});
pauseAlarmBtn.addEventListener("click", function(){
  setInterval(function(){
    input.value++;
  }, 1000);
  
});
let test = "50px";
console.log(parseFloat(test))

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
