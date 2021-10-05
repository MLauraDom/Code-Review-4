var film = JSON.parse(filme);

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
      <p class="myBtn btn btn-primary"><span>&#128077</span> Like</p>
      <p class="qt">${x.like} Likes</p>
      </div>
    </div>
  </div>
</div>`;
}
var q = new Array;
q = [0, 0, 0, 0, 0]

function likePlus(x) {
  film[x].like += 1;
  document.getElementsByClassName("qt")[x].innerHTML = film[x].like + " Likes";
  localStorage.setItem(q[i], film[x].like);
}

var likebut = document.getElementsByClassName("myBtn");

for (let i = 0; i < likebut.length; i++) {
  likebut[i].addEventListener("click", function () {
    likePlus(i);
  });
}

for ( let i = 0; i < film.length; i++) {
  film[i].like = localStorage.getItem(q[i]);
}

var filmS = film.sort((a, b) => b.like - a.like);
console.table(filmS);

function sort() {
  document.getElementById("filme").innerHTML = "";
  for (let x of filmS) {
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
        <p class="myBtn btn btn-primary"><span>&#128077</span> Like</p>
        <p class="qt">${x.like} Likes</p>
        </div>
      </div>
    </div>
  </div>`;
  }
}

document.getElementById("sortlikes").addEventListener("click", function() {
sort();
})