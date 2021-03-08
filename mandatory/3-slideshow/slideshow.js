// Write your code here

let imgs = ["https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=HVqvfhtg", "https://www.mcgill.ca/oss/files/oss/styles/hd/public/cute-3281819_1920.jpg?itok=1tLaIhp2&timestamp=1569533232", "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", "https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg"];

let imgElem = document.getElementById('img');
let num = 0;

let time = 2000;
let slideForward;
let slideBack;

function slideshow (){
    let autobackBtn = document.getElementById('autoPrev');
    let autoforwardBtn = document.getElementById('autoNext');
    let prevBtn = document.getElementById('prev');
    let nextBtn = document.getElementById('next');
    let stopBtn = document.getElementById('stop');
    let enter = document.getElementById('enter');

    // manual next
    nextBtn.addEventListener('click', () => {
        if (num == imgs.length-1){
            num = -1;
        }
        imgElem.src = imgs[num+1];
        num++
    });

    // manual previous
    prevBtn.addEventListener('click', () => {
        if (num === 0){
            num = imgs.length;
        }
        imgElem.src = imgs[num-1];
        num--;
    });

    // user input time change
    enter.addEventListener('click', (event) => {
        let input = document.getElementById('input').value;
        event.preventDefault();

        time = input;

    })

    autoforwardBtn.addEventListener('click', () => {
        clearInterval(slideBack);
        slideForward = setInterval(function (){
            console.log(time);
            if (num == imgs.length-1 ){
                num = -1; 
            }
            let imgElem = document.getElementById('img');
            imgElem.src = imgs[num+1];
            num++
        }, time);
    })

    // auto backward
    autobackBtn.addEventListener('click', () => {
        clearInterval(slideForward);
        slideBack = setInterval(function (){
            if (num == 0){
                num = imgs.length;
            }
            let imgElem = document.getElementById('img');
            imgElem.src = imgs[num-1];
            console.log(`image showing ${num-1}`);
            num--
        }, time);
    })

    // stop button
    stopBtn.addEventListener('click', () => {
        clearInterval(slideForward);
        clearInterval(slideBack);
    })
}

slideshow (imgs);
