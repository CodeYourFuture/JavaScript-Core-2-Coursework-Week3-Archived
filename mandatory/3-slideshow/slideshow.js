// Write your code here
/* Movies Array*/
let movies = [
  {
    name: "Star Wars",
    photo:
      "   https://www.wallpaperflare.com/static/830/23/587/star-wars-episode-v-the-empire-strikes-back-star-wars-movies-minimalism-wallpaper-preview.jpg ",
  },
  {
    name: "The Matrix",
    photo:
      " https://64.media.tumblr.com/91f52250cafef33f9944af7161648107/tumblr_ndr4eao9Kl1r046dfo1_1280.jpg",
  },
  {
    name: " Pulp Fiction",
    photo:
      " https://weandthecolor.com/wp-content/uploads/2013/06/Pulp-Fiction-Kit-Minimalist-Poster-Illustration-by-Aliz%C3%A9e-Lafon.jpg",
  },
  {
    name: "Godfather",
    photo:
      "https://i.etsystatic.com/9265778/r/il/763411/575418056/il_1140xN.575418056_k1y2.jpg",
  },
  {
    name: "Lord Of The Rings",
    photo:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7fff7d9-172f-4800-b905-134ccf130e4d/d78la91-080239a7-679c-4c8c-bf61-77d8a29d38cb.jpg/v1/fill/w_1024,h_1449,q_75,strp/lord_of_the_rings_3___minimalist_poster_by_tchav_d78la91-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0OSIsInBhdGgiOiJcL2ZcL2U3ZmZmN2Q5LTE3MmYtNDgwMC1iOTA1LTEzNGNjZjEzMGU0ZFwvZDc4bGE5MS0wODAyMzlhNy02NzljLTRjOGMtYmY2MS03N2Q4YTI5ZDM4Y2IuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RGmJA7Dmdoxq7lA79Z9sOtQc6mwVqHs4L7lO8JBCGus",
  },
];
//Setting up variables and creating other elements
let image = document.createElement("img");
let imageDiv = document.getElementById("images");
imageDiv.appendChild(image);
let i = 0;
image.src = movies[i].photo;
image.className = "photo-properties";
/*Event Listeners*/
//Forward Button Functionality
function forwarding() {
  i++;
  if (i > movies.length) i = 0;
  image.src = movies[i].photo;
}
let forward = document.getElementById("forward");
forward.addEventListener("click", forwarding);
//Back Button Functionality
function goingBack() {
  i--;
  if (i < 0) i = movies.length - 1;
  image.src = movies[i].photo;
}
let backwards = document.getElementById("back");
backwards.addEventListener("click", goingBack);
//Auto Back
let autoReverse = document.getElementById("auto-back");
autoReverse.addEventListener("click", function () {
  setInterval(goingBack, 3000);
});

//Auto Forward Button Functionality
let autoForwardMode = document.getElementById("auto-forward");
autoForwardMode.addEventListener("click", function () {
  setInterval(forwarding, 3000);
});
