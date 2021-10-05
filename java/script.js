var film = JSON.parse(film);

/*function likePlus(x) {
  film[x].like += 1;
  document.getElementById(x+5) = film[x].like + " Likes";
}

//Print the Likes (doesn`t work yet)

for (let y of film) {
  document.getElementById(y.id).addEventListener("click", likePlus(y.id), false);
}*/


for (let x of film) {
  document.getElementById("filme").innerHTML += `<div class="card">
  <div class="row g-0">
    <div class="col">
      <img src="${x.image}" class="img-fluid rounded-start" alt= ${x.title} ${x.year} / >
    </div>
    <div class="col">
      <div class="card-body">
        <h5 class="card-title">${x.title}</h5>
        <p class="card-text">${x.description}</p>
      </div>
      <div class="right">
      <p class="btn btn-primary"> <span>&#128077</span></p>
      <p class="qt">${x.like} Likes</p>
      </div>
    </div>
  </div>
</div>`;
}

function likePlus(x) {
  film[x].like += 1;
  getElementByClassName("qt")[x].innerHTML = film[x].like + " Likes";
}

var likebut = document.getElementsByClassName("btn");

for (let i = 0; i < likebut.lenght; i++) {
  likebut[i].addEventListener("click", function () {
    likePlus(i);
  })
}




//Sort the Cards (doesn`t work yet)

//By Likes
/*function sortFilm() {
let filmSort = film.sort(film.like);
for (let val of filmSort) {
  document.getElementById("filme").innerHTML += val.printInfo();
}
}

let s = document.getElementById("sortlikes");
a.addEventListener("click", sortFilm(), false);
*/