//Задача 1

let lightBtn = document.querySelector(".theme-button-light");
let darkBtn = document.querySelector(".theme-button-dark");

let sansSerif = document.querySelector(".font-button-sans-serif");
let serif = document.querySelector(".font-button-serif");

lightBtn.onclick = function () {
  document.querySelector("body").classList.remove("dark");
  lightBtn.classList.add("active");
  darkBtn.classList.remove("active");
};

darkBtn.onclick = function () {
  document.querySelector("body").classList.add("dark");
  darkBtn.classList.add("active");
  lightBtn.classList.remove("active");
};

serif.onclick = function () {
  document.querySelector("body").classList.add("serif");
  serif.classList.add("active");
  sansSerif.classList.remove("active");
};

sansSerif.onclick = function () {
  document.querySelector("body").classList.remove("serif");
  sansSerif.classList.add("active");
  serif.classList.remove("active");
};

//Задача 2

let articles = document.querySelectorAll(".blog-article");

for (let article of articles) {
  let btn = article.querySelector(".more");
  btn.onclick = function () {
    article.classList.remove("short");
  };
}

//Задача 3

let cards = document.querySelector(".cards");
let gridBtn = document.querySelector(".card-view-button-grid");
let listBtn = document.querySelector(".card-view-button-list");

let btns = document.querySelectorAll(".card-view-item button");

// gridBtn.onclick = function () {
//   cards.classList.remove("list");
//   gridBtn.classList.add("active");
//   listBtn.classList.remove("active");
// };

// listBtn.onclick = function () {
//   cards.classList.add("list");
//   listBtn.classList.add("active");
//   gridBtn.classList.remove("active");
// };

for (let btn of btns) {
  btn.onclick = function () {
    cards.classList.toggle("list");
    gridBtn.classList.toggle("active");
    listBtn.classList.toggle("active");
  };
}

//Задача 4

let mainPhoto = document.querySelector(".active-photo");
let photoCollection = document.querySelectorAll(".preview-list a");

for (let photo of photoCollection) {
  photo.onclick = function (evt) {
    evt.preventDefault();
    mainPhoto.src = photo.href;

    let currentActive = document.querySelector(".active-item");
    currentActive.classList.remove("active-item");
    photo.classList.add("active-item");
  };
}
