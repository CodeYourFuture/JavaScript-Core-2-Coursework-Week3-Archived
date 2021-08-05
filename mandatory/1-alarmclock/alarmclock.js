function setAlarm() {
  const h1 = document.getElementById('timeRemaining');
  let input = document.getElementById('alarmSet').value;
  let intervalID= setInterval(() => {
    const hour =Math.floor(input/60).toString().padStart(2, "0");
    //FOR MORE INFO ABOUT padStart() >>> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    const sec = (input % 60).toString().padStart(2, "0");
    h1.innerText =`Time Remaining: ${hour}:${sec}`;
    if(input === 0) {
      clearInterval(intervalID);//stop timer 
      doFlash();///EXTRA
      playAlarm();
    } else {
    input--; 
    } 
  }, 1000);
}
///EXTRA
function doFlash(){
  const colors =['red','orange','green'];
  let index =0;
  //if stop alarm clicked stop flash else doflash
  const flashID= setInterval(() => {
    index++;
    document.body.style.backgroundColor = colors[index%colors.length];
  }, 100);
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(flashID);
    document.body.style.backgroundColor = 'white';

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