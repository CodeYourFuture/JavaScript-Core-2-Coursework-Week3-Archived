const cl = console.log

const setAlarmButton = document.getElementById("set");
const stopAlarmButton = document.getElementById("stop");
const userTimeInput = document.getElementById("alarmSet");
const h1ClockElement = document.getElementById("spanTimeRemaining");
const buttonDiv = document.getElementById("buttonDiv");


let pushTimeLeft = 0;
let numberOfResumesAdded = 0;


//This eventListener will trigger when the set alarm button is clicked
// It will run the setAlarm function and reset the backgroundColor
setAlarmButton.addEventListener("click", function(){
  setAlarm();
  document.body.style.backgroundColor = "white";
})


// This is the main function of the script. It takes in an optional 
//paramater (resumeTime) which will start the clock from the paused 
// time assuming the clock was paused whilst running. If not it starts
// clock from the user input. 
function setAlarm(resumeTime) {
  if(resumeTime === undefined){
    var timeValue = userTimeInput.value;
  } else {
    var timeValue = resumeTime;
  }

  var timer = setInterval(updateH1Element, 1000);
  timer; //cl("Outer time : " + timeValue);

  function updateH1Element() {
    cl("inner time : " + timeValue);
  
     if (timeValue>0){
      timeValue -= 1;
      var minutes = Math.floor(timeValue / 60);
      var seconds = timeValue - minutes * 60;
      let twentyFourHourFormat = `${minutes}:${seconds}`
      let lessThanTen = `${minutes}:0${seconds}`

      // These first two if statements make sure the clock still displays
      // properly when 9 seconds left -> 00.09
      if (seconds < 10){
        h1ClockElement.innerText = `${lessThanTen}`;
      } else {
        h1ClockElement.innerText = `${twentyFourHourFormat}`;
      }

     // This last else statement will run when there are 0 seconds left
     // after the current countdown. It will stop the timer from 
     // running in the background and change backgroundColor  
     } else {
      window.clearInterval(timer);
      playAlarm()
      document.body.style.backgroundColor = "#dc3545";
     } 
   
   // This variable will allow me to use the timeValue globally  
   pushTimeLeft = timeValue;  
  
  }

// When the stopButton is pushed, if there are 0 seconds left on the 
// counter then the stopButton will pause the audio. If the stopButton
// is pressed whilst there is time left on the countdown then it will 
// create a new button to allow the user to resume their original 
// timer. The button uses a counter (numberOfResumesAdded) to make 
// sure that only one "resume" button is added to the DOM. When 
// resume is clicked, it will pass the current countdown time back 
// to the 'setAlarm' function so it doesn't restart from userInput value
stopAlarmButton.addEventListener("click", function(){
    cl("stop clicked");
    cl(pushTimeLeft);

    if(pushTimeLeft === 0){
      pauseAlarm();
    } else if (pushTimeLeft > 0) {
      //cl(timeValue)
      window.clearInterval(timer);
      cl("else run")
      cl("Stop - clear interval : " + pushTimeLeft)
      var resumeButton = document.createElement("button");
      resumeButton.id = "resume";
      resumeButton.type = "button";
      resumeButton.textContent = "Resume Timer";
      
      if (numberOfResumesAdded < 1){
        numberOfResumesAdded += 1 ;
        buttonDiv.appendChild(resumeButton);
      }

      let resumeButtonID = document.getElementById("resume");
      //cl(resumeButtonID);
      resumeButtonID.addEventListener("click",function(){
        setAlarm(pushTimeLeft);
      })
    }
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
