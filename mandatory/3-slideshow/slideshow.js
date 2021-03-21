// Write your code here
let arrayOfPictures = [
    'https://images.unsplash.com/photo-1474426466337-efb5a6b4fcf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
    'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1587861828656-551904f559c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1615554851544-e6249b92a492?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1614166613110-4630c91599b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
];

let imgEl = document.querySelector('#imgSlide');
let nextEl = document.querySelector('#next');
let prevEl = document.querySelector('#prev');
let autoForwEl = document.querySelector('#autoForw');
let autoBackEL = document.querySelector('#autoBack');
let stopEl = document.querySelector('#stop');

let forward;
let backward;


imgEl.src = arrayOfPictures[0];
let num = 0;

let autoF;
let autoB;

function nextPic() {
    if (num === arrayOfPictures.length - 1) {
        num = -1;
    }
    imgEl.src = arrayOfPictures[num + 1];
    num++;
};

function prevPic() {
    if (num === 0) {
        num = arrayOfPictures.length;
    }
    imgEl.src = arrayOfPictures[num - 1];
    num--;
}

nextEl.addEventListener('click', nextPic);
prevEl.addEventListener('click', prevPic);


stopEl.addEventListener('click', function () {
    clearInterval(autoF);
    clearInterval(autoB);
});

autoForwEl.addEventListener('click', function () {
    autoF = setInterval(nextPic, 2000);
});

autoBackEL.addEventListener('click', function () {
    autoB = setInterval(prevPic, 2000);
})
