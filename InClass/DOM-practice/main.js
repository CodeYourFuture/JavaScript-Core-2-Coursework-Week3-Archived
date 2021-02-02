console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

function changeColor(){
    let sections = document.getElementsByTagName("section");
    for(let i=0; i< sections.length;i++){
        sections[i].style.backgroundColor = "white";
    }
}
changeColor();



// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.
// let h1Ele = document.querySelector("#h1");
//     h1.forEach(function(file){
//         let img = document.createElement("img");
//         img.src = `image/ghc/` + file + `.jpg`;
//         h1Ele.style.img = "center";
//     })
// ulId.style.img = "center";

var img = document.querySelectorAll("img");
for(let i=0;i<img.length;i++){
    img[i].style.marginLeft= "500px";
}





// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let sectFirst = document.getElementsByTagName("section")[0].children[4];
    let para = document.createElement("p");
para.innerHTML = "Born December 9,1906 - Died January 1,1992";
sectFirst.appendChild(para);

let sectSecond = document.getElementsByTagName("section")[1].children[3];
para = document.createElement("p");
para.innerHTML = "Born August 26,1918 - Died February 24,2020";
sectSecond.appendChild(para);

// para.textContent = "December 10,1815-November27, 1852";
// sect.appendChild(para);
// document.createTextNode();
let sectThird = document.getElementsByTagName("section")[2].children[5];
para = document.createElement("p");
para.innerHTML = "Born December 10,1815 - Died November 27, 1852";
sectThird.appendChild(para);

// let linkPara = document.querySelector("p");
// linkPara.appendChild(text);