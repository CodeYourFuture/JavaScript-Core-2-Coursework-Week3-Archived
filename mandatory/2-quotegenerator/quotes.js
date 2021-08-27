// DO NOT EDIT BELOW HERE

// A function which will return one item, at
// random, from the given array.
//
// Parameters
// ----------
// choices: an array of items to pick from.
//
// Returns
// -------
// One item of the given array.
//
// Examples of use
// ---------------
// pickFromArray([1,2,3,4])     //maybe returns 2
// pickFromArray(coloursArray)  //maybe returns "#F38630"
//
// You DO NOT need to understand how this function works.

// I decided to use this function as its exactly the way I would have done it, I thought about moving the return line
// inside display quote or making it equal to a variable but decided to keep it inside the function to minimise its scope and
// keep things modular, with each function doing one thing, I'd love for some feedback on alternatives though :)
pickFromArray = (choices) => {
  return choices[Math.floor(Math.random() * choices.length)];
};

// A list of quotes you can use in your app.
// Feel free to edit them, and to add your own favourites.

// I have edited each object to include a link to each authors wiki page
const quotes = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
    wiki: "https://en.wikipedia.org/wiki/Kevin_M._Kruse",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
    wiki: "https://en.wikipedia.org/wiki/Napoleon_Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
    wiki: "https://en.wikipedia.org/wiki/Albert_Einstein",
  },
  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
    wiki: "https://en.wikipedia.org/wiki/Robert_Frost",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
    wiki: "https://en.wikipedia.org/wiki/Florence_Nightingale",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
    wiki: "https://en.wikipedia.org/wiki/Wayne_Gretzky",
  },
  {
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
    wiki: "https://en.wikipedia.org/wiki/Michael_Jordan",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
    wiki: "https://en.wikipedia.org/wiki/Amelia_Earhart",
  },
  {
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
    wiki: "https://en.wikipedia.org/wiki/Babe_Ruth",
  },
  {
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
    wiki: "https://en.wikipedia.org/wiki/W._Clement_Stone",
  },
  {
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
    wiki: "https://en.wikipedia.org/wiki/Kevin_M._Kruse",
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon",
    wiki: "https://en.wikipedia.org/wiki/John_Lennon",
  },
  {
    quote: "We become what we think about.",
    author: "Earl Nightingale",
    wiki: "https://en.wikipedia.org/wiki/Earl_Nightingale",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    author: "Mark Twain",
    wiki: "https://en.wikipedia.org/wiki/Mark_Twain",
  },
  {
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
    wiki: "https://en.wikipedia.org/wiki/Chuck_Swindoll",
  },
  {
    quote:
      "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker",
    wiki: "https://en.wikipedia.org/wiki/Alice_Walker",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
    wiki: "https://en.wikipedia.org/wiki/Gautama_Buddha",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    wiki: "https://en.wikipedia.org/wiki/Chinese_proverbs",
  },
  {
    quote: "An unexamined life is not worth living.",
    author: "Socrates",
    wiki: "https://en.wikipedia.org/wiki/Socrates",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
    wiki: "https://en.wikipedia.org/wiki/Woody_Allen",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
    wiki: "https://en.wikipedia.org/wiki/Steve_Jobs",
  },
  {
    quote: "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi",
    wiki: "https://en.wikipedia.org/wiki/Vince_Lombardi",
  },
  {
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
    wiki: "https://en.wikipedia.org/wiki/Stephen_Covey",
  },
  {
    quote:
      "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
    wiki: "https://en.wikipedia.org/wiki/Pablo_Picasso",
  },
  {
    quote:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
    wiki: "https://en.wikipedia.org/wiki/Christopher_Columbus",
  },
  {
    quote:
      "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
    wiki: "https://en.wikipedia.org/wiki/Maya_Angelou",
  },
  {
    quote: "Either you run the day, or the day runs you.",
    author: "Jim Rohn",
    wiki: "https://en.wikipedia.org/wiki/Jim_Rohn",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
    wiki: "https://en.wikipedia.org/wiki/Henry_Ford",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
    wiki: "https://en.wikipedia.org/wiki/Mark_Twain",
  },
  {
    quote:
      "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe",
    wiki: "https://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
    wiki: "https://en.wikipedia.org/wiki/Johann_Wolfgang_von_Goethe",
  },
  {
    quote:
      "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
    author: "Zig Ziglar",
    wiki: "https://en.wikipedia.org/wiki/Zig_Ziglar",
  },
  {
    quote: "Life shrinks or expands in proportion to one’s courage.",
    author: "Anais Nin",
    wiki: "https://en.wikipedia.org/wiki/Ana%C3%AFs_Nin",
  },
  {
    quote:
      "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
    author: "Vincent Van Gogh",
    wiki: "https://en.wikipedia.org/wiki/Vincent_van_Gogh",
  },
  {
    quote:
      "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle",
    wiki: "https://en.wikipedia.org/wiki/Aristotle",
  },
  {
    quote:
      "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus",
    wiki: "https://en.wikipedia.org/wiki/Jesus",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    wiki: "https://en.wikipedia.org/wiki/Ralph_Waldo_Emerson",
  },
  {
    quote:
      "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    author: "Henry David Thoreau",
    wiki: "https://en.wikipedia.org/wiki/Henry_David_Thoreau",
  },
  {
    quote:
      "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
    author: "Erma Bombeck",
    wiki: "https://en.wikipedia.org/wiki/Erma_Bombeck",
  },
  {
    quote:
      "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    author: "Booker T. Washington",
    wiki: "https://en.wikipedia.org/wiki/Booker_T._Washington",
  },
  {
    quote:
      "Certain things catch your eye, but pursue only those that capture the heart.",
    author: " Ancient Indian Proverb",
    wiki: "https://en.wikipedia.org/wiki/Proverb",
  },
  {
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
    wiki: "https://en.wikipedia.org/wiki/Theodore_Roosevelt",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
    wiki: "https://en.wikipedia.org",
  },
  {
    quote:
      "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    author: "Plato",
    wiki: "https://en.wikipedia.org/wiki/Plato",
  },
  {
    quote:
      "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    author: "Maimonides",
    wiki: "https://en.wikipedia.org/wiki/Maimonides",
  },
  {
    quote: "Start where you are. Use what you have.  Do what you can.",
    author: "Arthur Ashe",
    wiki: "https://en.wikipedia.org/wiki/Arthur_Ashe",
  },
  {
    quote:
      "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    author: "John Lennon",
    wiki: "https://en.wikipedia.org/wiki/John_Lennon",
  },
  {
    quote: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
    wiki: "https://en.wikipedia.org/wiki/Japanese_proverbs",
  },
  {
    quote:
      "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    author: "Helen Keller",
    wiki: "https://en.wikipedia.org/wiki/Helen_Keller",
  },
  {
    quote: "Everything has beauty, but not everyone can see.",
    author: "Confucius",
    wiki: "https://en.wikipedia.org/wiki/Confucius",
  },
  {
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
    wiki: "https://en.wikipedia.org/wiki/Anne_Frank",
  },
  {
    quote: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
    wiki: "https://en.wikipedia.org/wiki/Laozi",
  },
  {
    quote:
      "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
    wiki: "https://en.wikipedia.org/wiki/Maya_Angelou",
  },
  {
    quote:
      "Happiness is not something readymade.  It comes from your own actions.",
    author: "Dalai Lama",
    wiki: "https://en.wikipedia.org/wiki/Maya_Angelou",
  },
  {
    quote:
      "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    author: "Sheryl Sandberg",
    wiki: "https://en.wikipedia.org/wiki/Sheryl_Sandberg",
  },
  {
    quote:
      "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    author: "Aristotle",
    wiki: "https://en.wikipedia.org/wiki/Aristotle",
  },
  {
    quote: "If the wind will not serve, take to the oars.",
    author: "Latin Proverb",
    wiki: "https://en.wikipedia.org/wiki/List_of_Latin_phrases",
  },
  {
    quote:
      "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
    author: "Unknown",
    wiki: "https://en.wikipedia.org",
  },
  {
    quote:
      "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie",
    wiki: "https://en.wikipedia.org/wiki/Marie_Curie",
  },
  {
    quote:
      "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown",
    wiki: "https://en.wikipedia.org/wiki/Les_Brown",
  },
  {
    quote:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine",
    wiki: "https://en.wikipedia.org",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
    wiki: "https://en.wikipedia.org/wiki/Booker_T._Washington",
  },
  {
    quote:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci",
    wiki: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
  },
  {
    quote:
      "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti",
    wiki: "https://en.wikipedia.org",
  },
  {
    quote:
      "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    author: "Erica Jong",
    wiki: "https://en.wikipedia.org/wiki/Erica_Jong",
  },
  {
    quote:
      "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan",
    wiki: "https://en.wikipedia.org/wiki/Bob_Dylan",
  },
  {
    quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
    wiki: "https://en.wikipedia.org/wiki/Benjamin_Franklin",
  },
  {
    quote:
      "In order to succeed, your desire for success should be greater than your fear of failure.",
    author: "Bill Cosby",
    wiki: "https://en.wikipedia.org/wiki/Bill_Cosby",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
    wiki: "https://en.wikipedia.org/wiki/Albert_Einstein",
  },
  {
    quote:
      "The person who says it cannot be done should not interrupt the person who is doing it.",
    author: "Chinese Proverb",
    wiki: "https://en.wikipedia.org/wiki/Chinese_proverbs",
  },
  {
    quote: "There are no traffic jams along the extra mile.",
    author: "Roger Staubach",
    wiki: "https://en.wikipedia.org/wiki/Roger_Staubach",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
    wiki: "https://en.wikipedia.org/wiki/George_Eliot",
  },
  {
    quote: "You become what you believe.",
    author: "Oprah Winfrey",
    wiki: "https://en.wikipedia.org/wiki/Oprah_Winfrey",
  },
  {
    quote: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
    wiki: "https://en.wikipedia.org/wiki/Vincent_van_Gogh",
  },
  {
    quote:
      "A truly rich man is one whose children run into his arms when his hands are empty.",
    author: "Unknown",
    wiki: "https://en.wikipedia.org",
  },
  {
    quote:
      "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    author: "Ann Landers",
    wiki: "https://en.wikipedia.org/wiki/Ask_Ann_Landers",
  },
  {
    quote:
      "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    author: "Abigail Van Buren",
    wiki: "https://en.wikipedia.org/wiki/Dear_Abby",
  },
  {
    quote:
      "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray",
    wiki: "https://en.wikipedia.org/wiki/Farrah_Gray",
  },
  {
    quote:
      "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    author: "Jesse Owens",
    wiki: "https://en.wikipedia.org/wiki/Jesse_Owens",
  },
  {
    quote: "Education costs money.  But then so does ignorance.",
    author: "Sir Claus Moser",
    wiki: "https://en.wikipedia.org/wiki/Claus_Moser,_Baron_Moser",
  },
  {
    quote:
      "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    author: "Rosa Parks",
    wiki: "https://en.wikipedia.org/wiki/Rosa_Parks",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    wiki: "https://en.wikipedia.org/wiki/Confucius",
  },
  {
    quote:
      "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author: "Oprah Winfrey",
    wiki: "https://en.wikipedia.org/wiki/Oprah_Winfrey",
  },
  {
    quote:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama",
    wiki: "https://en.wikipedia.org/wiki/Dalai_Lama",
  },
  {
    quote: "You can’t use up creativity.  The more you use, the more you have.",
    author: "Maya Angelou",
    wiki: "https://en.wikipedia.org/wiki/Maya_Angelou",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    wiki: "https://en.wikipedia.org/wiki/Norman_Vaughan",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr.",
    wiki: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.",
  },
  {
    quote: "Do what you can, where you are, with what you have.",
    author: "Teddy Roosevelt",
    wiki: "https://en.wikipedia.org/wiki/Theodore_Roosevelt",
  },
  {
    quote:
      "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    author: "Tony Robbins",
    wiki: "https://en.wikipedia.org/wiki/Tony_Robbins",
  },
  {
    quote: "Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem",
    wiki: "https://en.wikipedia.org/wiki/Gloria_Steinem",
  },
  {
    quote:
      "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    author: "Mae Jemison",
    wiki: "https://en.wikipedia.org/wiki/Mae_Jemison",
  },
  {
    quote:
      "You may be disappointed if you fail, but you are doomed if you don’t try.",
    author: "Beverly Sills",
    wiki: "https://en.wikipedia.org/wiki/Beverly_Sills",
  },
  {
    quote: "Remember no one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
    wiki: "https://en.wikipedia.org/wiki/Eleanor_Roosevelt",
  },
  {
    quote: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses",
    wiki: "https://en.wikipedia.org/wiki/Grandma_Moses",
  },
  {
    quote:
      "The question isn’t who is going to let me; it’s who is going to stop me.",
    author: "Ayn Rand",
    wiki: "https://en.wikipedia.org/wiki/Ayn_Rand",
  },
  {
    quote:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
    wiki: "https://en.wikipedia.org/wiki/Ayn_Rand",
  },
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
    wiki: "https://en.wikipedia.org/wiki/Abraham_Lincoln",
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
    wiki: "https://en.wikipedia.org/wiki/Norman_Vincent_Peale",
  },
  {
    quote:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
    wiki: "https://en.wikipedia.org/wiki/Benjamin_Franklin",
  },
  {
    quote: "Nothing is impossible, the word itself says, “I’m possible!”",
    author: "Audrey Hepburn",
    wiki: "https://en.wikipedia.org/wiki/Audrey_Hepburn",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    wiki: "https://en.wikipedia.org/wiki/Steve_Jobs",
  },
  {
    quote: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar",
    wiki: "https://en.wikipedia.org/wiki/Zig_Ziglar",
  },
];

// Function to generate a random hex background colour. I decided not to use pickFromArray() function with an array of
// colours for this as in an earlier exercise I already coded this function and though it would be cool to reuse it here,
// it also generates a random colour from a possible 16,777,216 colours :)
pickRandomColour = () => {
  const hexCode = "0123456789ABCDEF";
  let colour = "#";

  for (let i = 0; i < 6; i++) {
    colour += hexCode[Math.floor(Math.random() * 16)];
  }

  return colour;
};

// I tried to avoid having global variables but found these necessary
let quote = pickFromArray(quotes);
let colour = pickRandomColour();
let autoPlay = false;
let autoPlayStatus = " OFF";

// Render a new quote. I experimented with creating CSS classes and applying them using
// javascript as the readme seemed quite open on how to approach styling and creating the html structure.
// Adding the wiki links added a lot more work in the end but it was pretty cool figuring it all out,
// but hopefully I haven't strayed too far from the core of the exercise with its addition.
displayQuote = (quote) => {
  let html = document.querySelector("html");
  html.classList.add("html");

  let body = document.querySelector("body");
  document.body.style.backgroundColor = colour;
  body.setAttribute("id", "body");
  body.classList.add("body");

  let quoteContainer = document.querySelector("#quote-container");
  quoteContainer.replaceChildren();
  quoteContainer.classList.add("quote-container");

  let q = document.createElement("q");
  quoteContainer.appendChild(q);
  q.innerText = quote.quote;
  q.classList.add("quote");

  let address = document.createElement("address");
  quoteContainer.appendChild(address);
  let a = document.createElement("a");
  address.appendChild(a);
  a.setAttribute("rel", "author");
  a.setAttribute("href", quote.wiki);
  a.setAttribute("target", "_blank");
  a.innerText = `- ${quote.author}`;
  a.classList.add("author");

  let buttonContainer = document.createElement("div");
  quoteContainer.appendChild(buttonContainer);

  let quoteButton = document.createElement("button");
  buttonContainer.appendChild(quoteButton);
  quoteButton.innerText = "New Quote";
  quoteButton.setAttribute("id", "new-quote");
  quoteButton.classList.add("button");

  // When autoPlay is active this prevents the `New Quote` button from overriding the auto setting.
  if (autoPlay) {
    quoteButton.disabled;
    quoteButton.style.opacity = 0.2;
  } else {
    quoteButton.addEventListener("click", () => {
      quote = pickFromArray(quotes);
      colour = pickRandomColour();
      displayQuote(quote);
    });
  }

  let form = document.createElement("form");
  quoteContainer.appendChild(form);
  form.classList.add("form");
  let checkLabel = document.createElement("label");
  form.appendChild(checkLabel);
  checkLabel.innerText = `auto-play: ${autoPlayStatus}`;
  let checkBox = document.createElement("input");
  form.appendChild(checkBox);
  checkBox.setAttribute("type", "checkBox");
  checkBox.setAttribute("id", "auto-play");

  checkBox.querySelector("#auto-play");
  checkBox.addEventListener("click", () => {
    toggleAutoPlay();
  });
};

displayQuote(quote);

// I added an alert just to bring users attention to the fact the authors names are interactable.
alert("CLICK THE AUTHORS NAME TO GAIN INSIGHT!");

// Toggles auto-play on and off setting an interval of 5 seconds.
toggleAutoPlay = () => {
  autoPlay = !autoPlay;

  if (autoPlay) {
    autoPlayStatus = " ON";
    displayQuote(quote);
    document.querySelector("#auto-play").checked = autoPlay;

    autoQuotes = setInterval(() => {
      quote = pickFromArray(quotes);
      colour = pickRandomColour();
      displayQuote(quote);
      document.querySelector("#auto-play").checked = autoPlay;
    }, 5000);
  } else {
    document.querySelector("#auto-play").checked = autoPlay;
    autoPlayStatus = " OFF";
    clearInterval(autoQuotes);
    displayQuote(quote);
  }
};
