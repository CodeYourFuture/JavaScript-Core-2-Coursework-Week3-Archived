let arrayOfPictures = [
    'https://images.pexels.com/photos/420233/pexels-photo-420233.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80',
    'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    'https://images.pexels.com/photos/4588006/pexels-photo-4588006.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
];

let imgEl = document.querySelector('#imgSlide');
let nextEl = document.querySelector('#next');
let prevEl = document.querySelector('#prev');
let autoForwEl = document.querySelector('#autoForw');
let autoBackEL = document.querySelector('#autoBack');
let stopEl = document.querySelector('#stop');

imgEl.src = arrayOfPictures[0];
let num = 0;

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
};

nextEl.addEventListener('click', nextPic);
prevEl.addEventListener('click', prevPic);

let autoF;
let autoB;

stopEl.addEventListener('click', function () {
    clearInterval(autoF);
    clearInterval(autoB);
});

autoForwEl.addEventListener('click', function () {
    autoF = setInterval(nextPic, 2000);
});

autoBackEL.addEventListener('click', function () {
    autoB = setInterval(prevPic, 2000);
});