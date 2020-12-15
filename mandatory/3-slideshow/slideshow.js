// Write your code here
let images = [
	"https://images.unsplash.com/photo-1592882542040-26ce2e12ee73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80",
	"https://images.unsplash.com/photo-1607641513240-f43c6917515a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80",
	"https://images.unsplash.com/photo-1590249351139-c6effec78d2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
	"https://images.unsplash.com/photo-1607550295261-851fa60d8ed2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
	"https://images.unsplash.com/photo-1607161744726-e96856cfcf4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
];



document.addEventListener('DOMContentLoaded', function () {
	document.querySelector("img").src = images[0];
	let counter = 0;
	let backTimer;
	let forwardTimer;
	let timeInterval = 5000;

	function assignImage() {
    	counter = counter < 0 ? images.length - 1 : counter % images.length;
		document.querySelector("img").src = images[counter];
	}

	let autoBack = document.querySelector("#autoBack")
	autoBack.addEventListener("click", () => {
		clearInterval(backTimer);
		clearInterval(forwardTimer);
		backTimer = setInterval(() => {
			counter--;
			assignImage();
		}, timeInterval);
	});

	let back = document.querySelector("#back")
	back.addEventListener("click", () => {
		clearInterval(backTimer);
		clearInterval(forwardTimer);
		counter--;
		assignImage();
	});

	let stop = document.querySelector("#stop")
	stop.addEventListener("click", () => {
		clearInterval(backTimer);
		clearInterval(forwardTimer);		
	});

	let forward = document.querySelector("#forward")
	forward.addEventListener("click", () => {
		clearInterval(backTimer);
		clearInterval(forwardTimer);
		counter++;
		assignImage();
	});

	let autoForward = document.querySelector("#autoForward")
	autoForward.addEventListener("click", () => {
		clearInterval(backTimer);
		clearInterval(forwardTimer);
		forwardTimer = setInterval(() => {
			counter++;
			assignImage();
		}, timeInterval);
	});

	let changeTime = document.querySelector("#uiButton")
	changeTime.addEventListener("click", () => {
		clearInterval(backTimer);
		clearInterval(forwardTimer);
		timeInterval = document.querySelector("#ui").value * 1000;
		console.log(timeInterval)
	});
});


