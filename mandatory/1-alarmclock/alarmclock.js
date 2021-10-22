let intervalId = null;
let backgroundChangingId = null;
let isPaused= false ;
let color = "plum";


function setAlarm() {
  let inputValue = document.getElementById("alarmSet").value;
  // setInterval has an id ,beacuse I want to clear the interval functionality. so I need to get access to that id
  intervalId = setInterval(() => {
    if(!isPaused){
      updateAlarm(inputValue);
      inputValue--;
      if (inputValue < 0) {
        // if time is less than zero then kill the interval 
        clearInterval(intervalId);
        playAlarm();
      }
    }
  }, 1000);
}

// this function set the backgroundcolor for body also 
// will toggle the color 
function changeColor() {
  document.body.style.backgroundColor = color;
  color = color === "plum" ? "white" : "plum";
}

// calculates time and binds it to DOM
function updateAlarm(value) {
  const title = document.getElementById("timeRemaining");
  let seconds = value % 60;
  let minutes = Math.floor(value / 60);
  let minZero = "";
  let secondZero = "";
  if (minutes < 10) {
    minZero = 0;
  }
  if (seconds < 10) {
    secondZero = 0;
  }
  title.innerText = `Time Remaining: ${minZero}${minutes}:${secondZero}${seconds}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
  });

  document.getElementById("pause").addEventListener("click", () => {
    pauseAlarm();

  });
}

// runs when timer is reached zero
function playAlarm() {
  audio.play();
  backgroundChangingId = setInterval(changeColor, 500);
}

// is a callback for stop button. and 
// stops the alarm , stops the backgroundChanging ,
// sets the backgroundColor to the default color
function stopAlarm() {
  audio.pause();
  clearInterval(backgroundChangingId);
  document.body.style.backgroundColor = "plum";
}

// inorder to my count down stop and restart,I need to tell my interval function
// when to start.I can set a flag that if my flag is true ,count it down,else no action.
function pauseAlarm(){
  isPaused = !isPaused 
}

window.onload = setup;
