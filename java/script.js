var film = JSON.parse(filme);

function print(y) {

  for (let x of y) {

    document.getElementById("filme").innerHTML += `<div class="card">
      <div class="row g-0">
      <div class="col">
      <img src="${x.image}" class="img-fluid rounded-start" alt= ${x.title} - ${x.year} / >
      </div>
      <div class="col">
      <div class="card-body">
        <h5 class="card-title">${x.title} - ${x.year}</h5>
        <p class="card-text">${x.description}</p>
      </div>
      <div class="right">
      <p class="myBtn btn btn-primary"><span>&#128077</span> Like</p>
      <p class="qt">${x.like}</p><p>Likes</p>
      </div>
      </div>
      </div>
      </div>`;
  }

  function likePlus(x) {
    let a = y[x].like;
    delete y[x].like;
    a++;
    document.getElementsByClassName("qt")[x].innerHTML = a;
    y[x].like = a;
  }

  var likebut = document.getElementsByClassName("myBtn");

  for (let i = 0; i < likebut.length; i++) {
    let a = y[i].like;
    likebut[i].addEventListener("click", function () {
      likePlus(i);
    });
  }

}

print(film);

var filmS = film.sort((a, b) => b.like - a.like);

console.table(filmS);

function sorted() {
  document.getElementById("filme").innerHTML = "";
  print(filmS);
}

document.getElementById("sortlikes").addEventListener("click", function () {
  sorted();
}, false);