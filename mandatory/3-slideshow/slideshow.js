// Write your code here

let allImages = [
        {
            link: "https://images.unsplash.com/photo-1570110471642-dba8ae2241d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHx0ZW5uaXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "dog lying beside ball toy",
        },
        {
            link: "https://unsplash.com/photos/kd476WxAsCw",
            title: "green tennis ball on brown soil during daytime",
        },
        {
            link: "https://images.unsplash.com/photo-1600300405814-76762ab164d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRlbm5pc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "tennis ball on chain link fence",
        },
        {
            link: "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlbm5pc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "View the photo by Todd Trapani",
        },
        {
            link: "https://images.unsplash.com/photo-1599586120566-886c39306895?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRlbm5pc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            title: "person holding yellow tennis ball on red and white net",
        },
    ];

let headingElement = document.getElementById("heading")
console.log("headingElement =", headingElement);

let imageElement = document.getElementById("image");
console.log("imageElement =", imageElement);
imageElement.src = "https://images.unsplash.com/photo-1570110471642-dba8ae2241d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg0fHx0ZW5uaXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    
let autoBack = document.getElementById("auto-back");
console.log("autoBack =", autoBack);

let back = document.getElementById("back");
console.log("back =", back);

let stop = document.getElementById("stop");
console.log("stop =", stop);

let autoForward = document.getElementById("auto-forward");
console.log("autoForward =", autoForward);

let forward = document.getElementById("forward");
console.log("forward =", forward);

function selectImage(element) {
    console.log("element =", element);
    imageElement.src = images();
}

const images = allImages;
console.log("images =", images);
console.log("images1 =", images[0].title);

function getImage() {
    for (img of images) {
        // console.log(`img = ${img}`);
        console.log(`img link = ${img.link}`);
        if (imageElement.src = img.link){};
        headingElement.innerText = img.title;
    }
}

addEventListener("click", getImage)