console.log("Testing JS file loaded!");
// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

function changeBackgroundColour() {
  let sectionNewColor = document.getElementsByTagName("section");
  for (let i = 0; i < sectionNewColor.length; i++) {
    sectionNewColor[i].style.backgroundColor = "lightblue";
  }
}
changeBackgroundColour();

// Task 2
// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

function imagePosition() {
let imageElement = document.getElementsByTagName("img");
//   //let headTag = document.getElementsByTagName("head")
//   //headTag.style.cssText = "text-align:center"
  Array.from(imageElement).forEach((element) => {
      element.style.display = "block";
      element.style.margin = "auto";
  });
    //element.classList.add("center");
    //element.querySelectorAll("center").cssText += "display: block; margin-left: auto; margin-right: auto";
 
 //console.log(imageElement)
}
imagePosition();
// document.getElementByTag("head").innerHTML = "<style>.center{display:block; margin-left; auto;margin-right:auto; width:50}</style>"

// document
//   .querySelectorAll("img")
//   .forEach(
//     (el) =>
//       (el.style.cssText +=
//         "display: block; margin-left: auto; margin-right: auto")
//   );

// document
//   .querySelectorAll("img")
//   .forEach(
//     (el) =>
//       (el.style.cssText +=
//         "display: block; margin-left: auto; margin-right: auto")
//   );

// function newImagePosition() {
//   let divContainer = document.createElement("div");
//   let imageElements = document.getElementByTag("img");
//   let bodyContainer = document.getElementByTag("body");
//   divContainer.appendChild(imageElements);
//   bodyContainer.appendChild(divContainer);
//   divContainer.classList.add("center");
//   document.getElementsByClass("center").cssText = "text-align:center";
//   //document.getElementsByClass("img").cssText = "text-align:center";
// }

// newImagePosition();

//         .center {
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   width: 50%;
//

//   element.innerHTML = "<head> <style> img{text-align:centre}</style></head>"
//     })
//     console.log(imagePosition)
// }
// imagePosition()

// function ChangeImagePosition() {
//     let imageNewPosition = document.getElementsByTagName("img");
//     for (let i = 0; i < imageNewPosition.length; i++) {
//       imageNewPosition[i].style = "width:100%; text-align:center";
//           imageNewPosition[i].setAttribute("align", "center");

//     }
// }.setAttribute("align", "center");
//ChangeImagePosition();

// function centreImageEls() {
//     let styleTag = document.createElement("style");
//     document.getElementById("style").innerHTML =
//       "img{text-align:center;}";
//     styleTag.innerHTML
// ;
//     document.getElementById("demo").innerHTML = "Paragraph changed!"

// }

// function imagePositionCentred() {
//     let imageTag = document.getElementsByTagName("img");

//     imageTag.forEach(element => {
//         element.classList.add("center");
//     })
//     // let divTag = document.createElement("div");
//     // imageTag.className = "newPositionCentre";
//     console.log(imageTag);
// }

// imagePositionCentred();
// function centerImages() {
//     let headContainer = document.getElementsByTagName("head");
//     let styleTag = document.createElement("style")

//     // let imageEls= document.getElementsByTagName("img");
//     // imageElements.className = "Images";
//     // console.log(imageEls)
//     document.getElementsByTagName("style").innerHTML= "<style>img{text-align:center}</style>";

// //    document.getElementById(img).style.textAlign = "center";
// //    document.getElementById("demo").style.textAlign = "center";
// //     imageElements.style.textAlign="center";
// //    console.log(imageElements)
//     headContainer.appendChild(styleTag);

//     // imageElements.setAttribute("style, text-align:center")
// }
// centerImages()

// var a = document.createElement("a");
// a.setAttribute("style", "font-size: 20px; cursor: pointer; text-align:center;");
// a.innerHTML = "Align ME TO CENTER!";
/**
 display: flex;
  justify-content: center;
  align-items: center;
 */

// Hint: look at the CSS to see if there are any classes already written which you can use.




// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
const femalePioneers = [
    {
        DOB: 1997,
        DOD: 2055,
    },
    {
        DOB: 1997,
        DOD: 2081,
    },
    {
        DOB: 1997,
        DOD: 2011,
    },
];

function heroines() {
 let sections = document.getElementsByTagName("section");
Array.from(sections).forEach((sections, index) => {
    let p = document.createElement("p")
    p.innerText = `Date of Birth: ${femalePioneers[index].DOB} Died in ${femalePioneers[index].DOD}`;
    sections.append(p);
    console.log(p);
})
 console.log(sections);
   
};

heroines()
// // an array 
// function updateParagraph() {
//     let sectionContainer = document.getElementsByTagName("section");

//     Array.from(sectionContainer).forEach((element,index) => {
//         let newParagraph = document.createElement("p");
//        //newParagraph.innerText = array[index]
//         //
        
//         element.appendChild(newParagraph)
//     })
//      //section.paragrah.index[0]. 
//     //let testNode = document.createTextNode("This is a test");
//     //newParagraph.appendChild(testNode);


// }

// updateParagraph()


// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
// var element = document.getElementById("div1");
// element.appendChild(para);