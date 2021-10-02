// Class Creation the Cards
class Film {
  title;
  description;
  year;
  like;
  image;
  id;
  lid;

  constructor(a, b, c, d, e, f, g) {
    this.title = a;
    this.description = b;
    this.year = c;
    this.like = d;
    this.image = e;
    this.id = f;
    this.lid = g;
  }

  printInfo() {
    return `<div class="card">
          <div class="row g-0">
            <div class="col">
              <img src="${this.image}" class="img-fluid rounded-start" alt= ${this.title} ${this.year} / >
            </div>
            <div class="col">
              <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description}</p>
              </div>
              <div class="right">
              <p id="${this.id}" class="btn btn-primary"> <span>&#128077</span></p>
              <p id="${this.lid}">${this.like} Likes</p>
              </div>
            </div>
          </div>
        </div>`;
  }
}

//Array Creation the Cards

var film1 = new Film(
    "Dune",
    "An 2021 American epic space opera film directed by Denis Villeneuve.",
    "2021",
    0,
    "img/dune.jpg",
    0,
    5
  ),
  film2 = new Film(
    "Free Guy",
    "An American SF action comedy film directed by Shawn Levy.",
    "2021",
    0,
    "img/freeguy.jpg",
    1,
    6
  ),
  film3 = new Film(
    "Cry Macho",
    "An American neo-Western drama film directed and produced by Clint Eastwood.",
    "2021",
    0,
    "img/crymacho.jpg",
    2,
    7
  ),
  film4 = new Film(
    "Malignant",
    "An American horror film directed by James Wan from a screenplay by Akela Cooper.",
    "2021",
    0,
    "img/malignant.jpg",
    3,
    8
  ),
  film5 = new Film(
    "Old",
    "An American thriller film written, directed, and produced by M. Night Shyamalan.",
    "2021",
    0,
    "img/old.jpg",
    4,
    9
  ),
  film6 = new Film(
    "Finch",
    "An upcoming American post-apocalyptic SF drama film directed by Miguel Sapochnik.",
    "2021",
    0,
    "img/finch.jpg",
    5,
    10
  );

film = [film1, film2, film3, film4, film5, film6];

//Print the Cards in the Dokument

for (let val of film) {
  document.getElementById("filme").innerHTML += val.printInfo();
}

//Function Increase Likes (doesn`t work yet)

function likePlus(x) {
  film[x].like += 1;
  return document.getElementById(x+5) = film[x].like + " Likes";
}

//Print the Likes (doesn`t work yet)

for (let i = 0; i < film.lenght; i++) {
  let a = document.getElementById(i);
  a.addEventListener("click", likePlus(i), false);
}

//Sort the Cards (doesn`t work yet)

//By Likes
function sortFilm() {
let filmSort = film.sort(film.like);
for (let val of filmSort) {
  document.getElementById("filme").innerHTML += val.printInfo();
}
}

let s = document.getElementById("sortlikes");
a.addEventListener("click", sortFilm(), false);
