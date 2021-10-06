var film = JSON.parse(filme);

function print() {

  for (let x = 0; x < film.length; x++) {

    document.getElementById("filme").innerHTML += `<div class="card">
      <div class="row g-0">
      <div class="col">
      <img src="${film[x].image}" class="img-fluid rounded-start" alt= ${film[x].title} - ${film[x].year} / >
      </div>
      <div class="col">
      <div class="card-body">
        <h5 class="card-title">${film[x].title} ${film[x].year}</h5>
        <p class="card-text">${film[x].description}</p>
      </div>
      <div class="right">
      <p class="myBtn btn btn-primary"><span>&#128077</span> Like</p>
      <p class="qt">${film[x].like} Likes</p>
      </div>
      </div>
      </div>
      </div>`;
  }

  var likebut = document.getElementsByClassName("myBtn");

  for (let i = 0; i < likebut.length; i++) {
    //
    likebut[i].addEventListener("click", function () {
      likePlus(i);
    });
  }
}

print(film);
//console.table(film)
function likePlus(x) {
  // film[x].like++;
  film[x].like += 1;
  document.getElementsByClassName("qt")[x].innerHTML = film[x].like + " Likes";
  console.log(film[x].like)
  //console.table(film)
}


//console.table(film);

//var filmS = film.sort((a, b) => b.like - a.like);

//console.table(filmS);

function sort() {
  film.sort((a, b) => b.like - a.like);
  document.getElementById("filme").innerHTML = "";
print(film);
}

document.getElementById("sortlikes").addEventListener("click", function() {
  sort();
  })