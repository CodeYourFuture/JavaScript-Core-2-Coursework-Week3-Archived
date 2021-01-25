// Write your code here

//Getting all the elements
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

//console.log(img); checking the nodelist is there

let index = 0; // make sure the index starts at 0

let interval = setInterval(run, 3000); // this makes the pics slide every 3 seconds

function run () {
    index++;

    changeImage();
}


// A function to change the image 
function changeImage() {
    if(index > img.length - 1) {
        index = 0;
    } else if(index < 0){
        index = img.length -1;
    }
    
// translates the image times 500px as this is the width of the pics.
    imgs.style.transform = `translateX(${-index * 500}px)`;
}


//function to reset the interval after click next or previous
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 3000);
}

// adding event listners to the buttons

rightBtn.addEventListener('click', () => { 
    index++;

    changeImage();
    resetInterval();
})

leftBtn.addEventListener('click', () => { 
    index--;

    changeImage();
    resetInterval();
})

