console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

function task1() {
  let sections = document.getElementsByTagName("section");
  for(let i = 0; i < sections.length; i++) {
    sections[i].style.backgroundColor = "#ffffff";
  }
}

task1();


// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

function task2() {
  let imgs = document.getElementsByTagName("img");
  for(let i = 0; i < imgs.length; i++) {
    imgs[i].className += " content-title";
  }
}

task2();


// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

const dates = [
  {
    person: "grace-hopper",
    birth: "9 December 1906",
    death: "1 January 1992"
  },
  {
    person: "katherine-johnson",
    birth: "26 August 1918",
    death: "24 February 2020"
  },
  {
    person: "ada-lovelace",
    birth: "10 December 1815",
    death: "27 November 1852"
  }
];

function task3() {
  let sections = document.getElementsByTagName("section");

  for(let i = 0; i < sections.length; i++) {
    let newPara = document.createElement("p");

    birth = dates.filter( value =>
      value.person === sections[i].id).map(value => value.birth);

    death = dates.filter( value =>
      value.person === sections[i].id).map(value => value.death);

    newPara.innerText = `Born: ${birth}. Died: ${death}`;
    sections[i].appendChild(newPara);
  }
}

task3();