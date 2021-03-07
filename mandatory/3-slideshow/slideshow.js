// Write your code here

let imgs = ["https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=HVqvfhtg", "https://www.mcgill.ca/oss/files/oss/styles/hd/public/cute-3281819_1920.jpg?itok=1tLaIhp2&timestamp=1569533232", "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/cat_16x9.jpg?itok=ymk9NjS9", "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"];

let imgElem = document.getElementById('img');
let num = 0;

let time = 2000;
let slideForward;
let slideBack;

function slideshow (){
    let backBtn = document.getElementById('prev');
    let stopBtn = document.getElementById('stop');
    let forwardBtn = document.getElementById('next');
    let enter = document.getElementById('enter');

    forwardBtn.addEventListener('click', () => {
        clearInterval(slideBack);
        slideForward = setInterval(function (){
            let imgElem = document.getElementById('img');
            imgElem.src = imgs[num];
            console.log(num)
            if (num == imgs.length-1 ){
                num = -1; 
                console.log(num) 
            }
            num++
        }, time);
    })

    backBtn.addEventListener('click', () => {
        clearInterval(slideForward);
        slideBack = setInterval(function (){
            let imgElem = document.getElementById('img');
            imgElem.src = imgs[num];
            console.log(num)
            if (num < 0 ){
                num = imgs.length-1;
                console.log(num)
            }
            num++
        }, time);
    })

    stopBtn.addEventListener('click', () => {
        clearInterval(slideForward);
        clearInterval(slideBack);
    })
}

slideshow (imgs);
