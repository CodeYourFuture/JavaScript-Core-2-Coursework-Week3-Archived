function setAlarm() {
  
  const setBtn = document.getElementById('set');
  // console.log('this is the set button', setBtn);
  
  const stopBtn = document.getElementById('stop');
  // console.log('this is the stop button', stopBtn);
  
  setBtn.addEventListener('click', getInputValue)
      function getInputValue(){
        const inputVal = document.getElementById('alarmSet').value;
        // Select the input element and get its value 
        // console.log('This is my input value',inputVal);
      
        
        const titleVal = document.getElementById('timeRemaining');
        titleVal.placeholder = '0:00';  //.toFixed(2) two decimal places.
        titleVal.textContent = `Time remaining: ${inputVal}`;
        // console.log('This is my titleVal', titleVal);
    }
  
  //---------set interval------------//
  // const alarm = setInterval(myTimer, 1000);


  // function myTimer() {
  //   const date = new Date();
  //   const time = date.toLocaleTimeString();    
  //   document.getElementsByTagName('input').innerHTML = time;
  //   console.log('This is the current time', time);
  // }
  // //---------stop interval------------//
  // function stop() {
  //   clearInterval(alarm);
  // }
}
setAlarm();

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
