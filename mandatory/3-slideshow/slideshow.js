const imgs = [
    'https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1520092352425-9699926a9b0b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
]

const img = document.querySelector('#img');
const forward = document.querySelector('#forward');
const back = document.querySelector('#back');
const autoForward = document.querySelector('#auto-forward');
const autoBack = document.querySelector('#auto-back');
const stop = document.querySelector('#stop');
let counter = 0;
let isStop = false;

function next() {
    counter++;
    if (counter === imgs.length) counter = 0;
    img.src = imgs[counter];
}

function previous() {
    counter--;
    if (counter === -1) counter = imgs.length-1;
    img.src = imgs[counter];
}

const slideForward = function() {
    setInterval(next, 2000);
}

const slideBack = function() {
    setInterval(previous, 2000);
}

forward.addEventListener('click', next);

back.addEventListener('click', previous);

autoForward.addEventListener('click', () => {
    // isStop = false;
    // if (!isStop) {
    //     slideForward;
    // } else clearInterval(slideForward);
    slideForward;
})

autoBack.addEventListener('click', () => {
    isStop = false;
    if (!isStop) {
        slideBack;
    } else clearInterval(slideBack);
})

stop.addEventListener('click', () => {
    isStop = true;
})