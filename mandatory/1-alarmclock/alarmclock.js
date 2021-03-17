//---------------------//
//---------------------//

//---------------------//

function setAlarm() {
  
  const setBtn = document.getElementById('set');
  console.log('this is the set button', setBtn);
  
  const stopBtn = document.getElementById('stop');
  console.log('this is the stop button', stopBtn);

    // .addEventListener
  //---------set interval------------//
  const alarm = setInterval(myTimer, 1000);


  function myTimer() {
    const date = new Date();
    const time = date.toLocaleTimeString();    
    document.getElementsByTagName('input').innerHTML = time;
    console.log('This is the current time', time);
  }
  //---------stop interval------------//
  function stop() {
    clearInterval(alarm);
  }
}
setAlarm();

//---------------------//
function getInputValue(){
  // Selecting the input element and get its value 
  const inputVal = document.getElementsByTagName('input').value;
  
  // Displaying the value
  alert(inputVal);
}
// getInputValue();
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
