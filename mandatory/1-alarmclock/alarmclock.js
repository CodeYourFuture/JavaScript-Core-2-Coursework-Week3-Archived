let alarmTimer = 0;

let alarmInterval = 0;

function getStringTime(secondsInput) {
  let minutes = Math.trunc(secondsInput / 60);   // converting seconds to minutes.
  let seconds = secondsInput % 60;   //remainder(%) of the seconds.
  return ` ${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function myTimer() {
  alarmTimer--;
// console.log(alarmTimer);
if (alarmTimer === 0) {
  playAlarm();
  clearInterval(alarmInterval);
  }
const titleVal = document.getElementById('timeRemaining');
// titleVal.placeholder = '0:00';  //.toFixed(2) two decimal places.
titleVal.textContent = `Time remaining: ${getStringTime(alarmTimer)}`;
// const date = new Date();
// inputVal.innerHTML.getTime();
// console.log('This is the current time', time);
}

function setAlarm() {
  
  // const setBtn = document.getElementById('set');
  // // console.log('this is the set button', setBtn);
  
  // const stopBtn = document.getElementById('stop');
  // // console.log('this is the stop button', stopBtn);
 
  
    const inputVal = document.getElementById('alarmSet').value;
    // Select the input element and get its value 
    // console.log('This is my input value',inputVal);
    alarmTimer = parseInt(inputVal * 60);
    const titleVal = document.getElementById('timeRemaining');
    // titleVal.placeholder = '0:00';  //.toFixed(2) two decimal places.
    titleVal.textContent = `Time remaining: ${getStringTime(alarmTimer)}`;
        
    // console.log('This is my titleVal', titleVal);
    //---------set interval------------//
  alarmInterval = setInterval(myTimer, 1000);
  console.log(alarmInterval);                
}

//---------stop interval------------//
// function pauseAlarm() {
//   clearInterval(alarmInterval);
//   console.log('stopping alarm');
// }




//---------------------//

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
