class Film {
    title;
    description;
    year;
    like;
    image;
  
    constructor (a, b, c, d, e) {
      this.title = a;
      this.description = b;
      this.year = c;
      this.like = d;
      this.image = e;
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
                <p class="btn btn-primary"> <span>&#128077</span></p>
                <p>${this.like} Likes</p>
                </div>
              </div>
            </div>
          </div>`;
    }
  }
  
  var film1 = new Film("Dune", "An 2021 American epic space opera film directed by Denis Villeneuve.", "2021", 0, "img/dune.jpg");
  var film2 = new Film("Free Guy", "An American SF action comedy film directed by Shawn Levy.", "2021", 0, "img/freeguy.jpg");
  var film3 = new Film("Cry Macho", "An American neo-Western drama film directed and produced by Clint Eastwood.", "2021", 0, "img/crymacho.jpg");
  var film4 = new Film("Malignant", "An American horror film directed by James Wan from a screenplay by Akela Cooper.", "2021", 0, "img/malignant.jpg");
  var film5 = new Film("Old", "An American thriller film written, directed, and produced by M. Night Shyamalan.", "2021", 0, "img/old.jpg");
  var film6 = new Film("Finch", "An upcoming American post-apocalyptic SF drama film directed by Miguel Sapochnik.", "2021", 0, "img/finch.jpg");
  
  console.log(film1);
  document.getElementById('filme').innerHTML = film1.printInfo();
  document.getElementById('filme').innerHTML += film2.printInfo();
  document.getElementById('filme').innerHTML += film3.printInfo();
  document.getElementById('filme').innerHTML += film4.printInfo();
  document.getElementById('filme').innerHTML += film5.printInfo();
  document.getElementById('filme').innerHTML += film6.printInfo();