let timeLeft = document.querySelector("#time-left");
let startBtn = document.getElementById("start-timer");
const numberInputField = document.getElementById("number-input");
 
numberInputField.addEventListener("change", (e) => {
  timeLeft.innerHTML = e.target.value;
});
 
startBtn.addEventListener("click", () => {
  if (!numberInputField.value) {
    return alert("Enter valid number");
  }
  let timeLeftNow = numberInputField.value;
  setInterval(() => {
    if (timeLeftNow <= 0) {
      clearInterval((timeLeftNow = 0));
    }
    timeLeft.innerHTML = timeLeftNow;
    timeLeftNow--;
  }, 1000);
});