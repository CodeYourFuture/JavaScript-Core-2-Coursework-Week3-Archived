let imgArray = [
  "https://images.unsplash.com/photo-1628763228607-ead5a5881057?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1628763228081-8f9669f142ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1575295204460-e651299ad79e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
  "https://images.unsplash.com/photo-1543083115-638c32cd3d58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1789&q=80",
];

let btnBack = document.querySelector('#btn-back')
let btnForward = document.querySelector("#btn-forward");
let btnAutoForward = document.querySelector('#btn-auto-forward')
let btnAutoBackward = document.querySelector("#btn-auto-backward");
let btnStop = document.querySelector('#btn-stop')

let img = document.querySelector('#img-slide');
let i = 0;

window.onload = function () {
	img.src = imgArray[0]
}

let previousSlide = function () {
  i -= 1;
  if (i === -1) {
    i = imgArray.length - 1;
  }
  img.src = imgArray[i];
};
btnBack.addEventListener("click", previousSlide);

let nextSlide = function () {
  i += 1;
  if (i === imgArray.length) {
    i = 0;
  }
  img.src = imgArray[i];
};
btnForward.addEventListener('click', nextSlide)

let autoSlide;
btnAutoForward.addEventListener('click', function() {
	autoSlide = setInterval(function() {
		nextSlide()
	}, 2000)
})

btnAutoBackward.addEventListener("click", function () {
  autoSlide = setInterval(function () {
    previousSlide();
  }, 2000);
});

btnStop.addEventListener('click', function() {
	clearInterval(autoSlide)
})