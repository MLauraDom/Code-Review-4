var film = JSON.parse(filme);

function print(y) {
  for (let x of y) {
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
      <p class="qt">${x.like}</p><p>Likes</p>
      </div>
      </div>
      </div>
      </div>`;
  }

  function likePlus(x) {
    y[x].like++;
    document.getElementsByClassName("qt")[x].innerHTML = y[x].like;
  }

  var likebut = document.getElementsByClassName("myBtn");

  for (let i = 0; i < likebut.length; i++) {
    likebut[i].addEventListener("click", function () {
      likePlus(i);
    });
  }
}

print(film);

var filmSL = film.sort((a, b) => b.like - a.like);

console.table(filmSL);

function sortedL() {
  document.getElementById("filme").innerHTML = "";
  print(filmSL);
}

document.getElementById("sortlikes").addEventListener("click", function () {
  sortedL();
}); 

var filmSY = film.sort((a, b) => b.year - a.year);

console.table(filmSY);

function sortedY() {
  document.getElementById("filme").innerHTML = "";
  print(filmSY);
}

document.getElementById("sortyear").addEventListener("click", function () {
  sortedY();
}); 

