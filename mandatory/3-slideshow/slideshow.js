// Write your code here
const pictures = [ {
    address : 'https://images.unsplash.com/photo-1628716572776-8a2e8efbad1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    alt : 'bridge'
},
{
    address : 'https://images.unsplash.com/photo-1628868190492-a0280af683ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    alt : 'surfing'
},
{
    address : 'https://images.unsplash.com/photo-1628871733491-8cbaf662aaf6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    alt : 'crossing'
},
{
    address : 'https://images.unsplash.com/photo-1623140509752-9f5ea1b3452a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    alt : 'wedding'
}
];
let index = 0;
let intervalId = 0;
function pickFromArray(choices) {

    if (index >= choices.length){
        index = 0;
    } else if ( index < 0){
       index =  choices.length -1;
    }
  return choices[index];
}


const header = document.getElementById('header');
const img = document.getElementById('img');
const back = document.getElementById('back');
const forward = document.getElementById('forward');
const autoback = document.getElementById('autoback');
const stop = document.getElementById('stop');
const autoforward = document.getElementById('autoforward');
img.src = 'https://images.unsplash.com/photo-1628871733491-8cbaf662aaf6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

autoback.addEventListener('click', ()=> {
    let time = document.getElementById('setTime').value;
    console.log(time);
    if (time === ''){
        time = 1000;
    }
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        const pic = pickFromArray(pictures);
        index--;
        img.src = pic.address;
        img.alt = pic.alt;
    }, time);
});
autoforward.addEventListener('click', ()=> {
    let time = document.getElementById('setTime').value;
    if (time === ''){
        time = 1000;
    }
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        const pic = pickFromArray(pictures);
        index++;
        img.src = pic.address;
        img.alt = pic.alt;
    }, time);
});

stop.addEventListener('click', ()=>{
    clearInterval(intervalId)

});

forward.addEventListener('click', ()=> {
    const pic = pickFromArray(pictures);
    index++;
    img.src = pic.address;
    img.alt = pic.alt;
});

back.addEventListener('click', ()=> {
    const pic = pickFromArray(pictures);
    index--;
    img.src = pic.address;
    img.alt = pic.alt;
});