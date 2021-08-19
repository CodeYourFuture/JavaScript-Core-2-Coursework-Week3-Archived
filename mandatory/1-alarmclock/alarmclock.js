function setAlarm() {
  
  let isAlarmSet = document.getElementById("alarmSet").value;
  const isTimeRemaining = document.getElementById("timeRemaining")

  const isInterval = setInterval(() => {
    const minutes = Math.floor(isAlarmSet / 60).toString().padStart(2, '0')
    const seconds = (isAlarmSet % 60).toString().padStart(2, '0')
    isTimeRemaining.innerText = `Time Remaining: ${minutes}:${seconds}`
    if(isAlarmSet === 0){
      clearInterval(isInterval)
    } else {
      isAlarmSet -- 
      console.log(isAlarmSet)
    }

    const alarmSound = alarmPlaying(()=>{
      const playButton =document.getElementById("button")
    if(isAlarmSet === 0){
      alarmPlaying(audio.play)
    }

  })

    

  },1000)

  



    

  
 
  // const minutes = isAlarmSet / 60 
  // const hours = isAlarmSet + 4;
  // const timeDisplayed = `${hours} + ':' + ${minutes}`

  // isTimeRemaining.appendChild(timeDisplayed)
 









  



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
