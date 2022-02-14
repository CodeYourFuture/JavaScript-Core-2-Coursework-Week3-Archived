function setAlarm() {
const getTime = document.getElementById("alarmSet");
 let myvalue = getTime.value;

 const getRemaning = document.getElementById("timeRemaining");
 getRemaning.innerText = ` Time Remaining : ${getTime.value}`;

  const intervalValue =  setInterval(()=>{
    myvalue --;
    //console.log(myvalue);
    getRemaning.innerText = ` Time Remaining : ${myvalue}`;
    if( myvalue === 0){
      playAlarm();
    clearInterval(intervalValue);
    }
  
  },1000)


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
