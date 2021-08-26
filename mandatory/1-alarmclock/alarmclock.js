let intervalId;
function setAlarm() {
  const timeRemaining = document.getElementById("timeRemaining");
  const alarmSetInput = document.getElementById("alarmSet");
  const setAlarmBtn = document.getElementById("set");
  const pauseAlarmBtn = document.getElementById("pause");


  let count;
  

  
    count = alarmSetInput.value;
    if (count >0){
    intervalId = setInterval(function(){
      console.log(intervalId)
      let minutes = Math.floor(count / 60);
      let seconds = count % 60;
      
      timeRemaining.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
      if (count == 0){
        playAlarm();
        clearInterval(intervalId);
        document.body.style.backgroundColor = "orange";
      }

      count --;
      alarmSetInput.value = "";
    }, 1000);
    }else{
      alert("Please")
    }

  

  pauseAlarmBtn.addEventListener("click", function(){
    if(intervalId >= 0){
      clearInterval(intervalId);
    }else{
      intervalId;
    }
    
    
  });
};

let stopAlarmBtn = document.getElementById("stop");
stopAlarmBtn.addEventListener("click", function(){
  clearInterval(intervalId);
})

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
