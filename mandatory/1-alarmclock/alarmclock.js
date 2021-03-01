let tmr;
let blink;
let myTimer;

function setAlarm() {
	clearInterval(myTimer);
	clearInterval(blink);
	document.querySelector("body").style.backgroundColor = "white";
	tmr = true;
	let input = document.querySelector("#alarmSet").value;
	let inputStr = `${String(Math.floor(input / 60)).padStart(2, '0')}:${String(input % 60).padStart(2, '0')}`;
	document.querySelector("#timeRemaining").innerHTML = `Time Remaining: ${inputStr}`;
	myTimer = setInterval(function () {
		if (tmr) {
			input--;
		}
		inputStr = `${String(Math.floor(input / 60)).padStart(2, '0')}:${String(input % 60).padStart(2, '0')}`;
		document.querySelector("#timeRemaining").innerHTML = `Time Remaining: ${inputStr}`;
		if (input === 0) {
			playAlarm();
			let ofs = 0;
			blink = setInterval(function(){
				document.querySelector("body").style.backgroundColor = 'rgba(255,0,0,'+Math.abs(Math.sin(ofs))+')';
				ofs += 0.01;
			}, 10);
			clearInterval(myTimer);
		}
	}, 1000) 
}
document.addEventListener('DOMContentLoaded', function () {
    let pauseBtn = document.querySelector("#pause")
	pauseBtn.addEventListener("click", () => {
		tmr = !tmr;
	});
});


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
