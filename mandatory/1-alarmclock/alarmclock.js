//function setAlarm() {}
function setAlarm() {
  let inputSetAlarm = document.getElementById('alarmSet').value;
  const timeRemaining = document.getElementById('timeRemaining');

  const intervalID = setInterval(()=>{

    if(inputSetAlarm === 0){
    playAlarm();
    clearInterval(intervalID);

    } else {
    inputSetAlarm--;
    const minutes = Math.floor(inputSetAlarm / 60).toLocaleString('en-GB', {
      minimumIntegerDigits: 2});
    const seconds = (inputSetAlarm % 60).toLocaleString('en-GB', {
      minimumIntegerDigits: 2}) ;
    timeRemaining.innerText = `Time Remaining: ${minutes}:${seconds}`;
    }
  }, 1000);

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
