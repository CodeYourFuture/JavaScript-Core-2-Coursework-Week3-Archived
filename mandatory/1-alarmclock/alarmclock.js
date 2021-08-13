function setAlarm() {
	let timeInSec = document.querySelector("#alarmSet").value;
	let min, sec;

	if (timeInSec > 60) {
		min = Math.floor(timeInSec / 60);
		sec = timeInSec - 60 * min;
		// function withZero(n) {
		// 	return "0" + n;
		// }
		// if (min <= 9) { min = withZero(min) };
		// if (sec <= 9) { sec = withZero(sec) };
	} else {
		min = 0;
		sec = timeInSec;
	// 	function withZero(n) {
    //   return "0" + n;
    // }
	// 	if (sec <= 9) { sec = withZero(sec) };
	}

	console.log(`${min} min and ${sec} sec`);

	let timeRemaining = document.querySelector("#timeRemaining");
	

	let timer = setInterval(function(){
		if (sec < 10) {
			sec = '0' + sec;
		} 
		if (min < 10) {
			min = '0' + min;
		}
		timeRemaining.textContent = `Time Remaining: ${min}:${sec}`;
		sec = sec - 1;
		
		if (timeRemaining.textContent === `Time Remaining: 00:00`) {
			clearInterval(timer);
		}
	}, 1000)
	
	
	
}

let time = document.querySelector("#alarmSet");



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
