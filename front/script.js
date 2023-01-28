var ActuPoke = 0;
if (localStorage.getItem("pokemon") == null) {
  localStorage.setItem("pokemon", []);
}

function getPokemon() {
  let mypoke = localStorage.getItem("pokemon");
  console.log(typeof mypoke);
  let numbers = mypoke.match(/\d+/g);
  if(numbers) {
      let numbersString = numbers.join(',');
      let numbersArray = numbersString.split(',');
      console.log(numbersArray);

      for (let i = 0; i < numbersArray.length; i++) {
        let imgcontainer = document.querySelector('.solo');
        let imgdeletebtn = document.querySelector('.solobtn');
        imgdeletebtn.classList.remove('ninja');
        imgcontainer.classList.remove('solo');
        imgdeletebtn.classList.remove('solobtn');
        imgcontainer.classList.add(numbersArray[i]);
        imgdeletebtn.classList.add(numbersArray[i]);
        imgcontainer.innerHTML = '';
        imgcontainer.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numbersArray[i]}.png">`;
      }
  }

}

getPokemon();

function getValue() {
  let value = document.querySelector('#pokemon-search').value;
  console.log(value);
      fetch('https://pokeapi.co/api/v2/pokemon/' + value)
        .then(response => response.json())
          .then(data => {
            //console.log(data)
              ActuPoke = data.id;
              let imgsearchpoke = document.querySelector('.imgsearchpoke')
              imgsearchpoke.innerHTML = '';
              imgsearchpoke.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}">`
              let PcADD = document.querySelector('.PcADD')
              PcADD.classList.remove('ninja')
          })
}

function AddPokemon(){
  let imgcontainer = document.querySelector('.solo');
  let imgdeletebtn = document.querySelector('.solobtn');
  imgdeletebtn.classList.remove('ninja');
  imgcontainer.classList.remove('solo');
  imgdeletebtn.classList.remove('solobtn');
  imgcontainer.classList.add(ActuPoke);
  imgdeletebtn.classList.add(ActuPoke);
  imgcontainer.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ActuPoke}.png">`
  mypoke = localStorage.getItem("pokemon");
  mypoke = mypoke.split(',');
  mypoke.push(ActuPoke);
  mypoke = mypoke.join(',');
  localStorage.setItem("pokemon", JSON.stringify(mypoke));
}

function DeletePokemon(tae){
  tae.previousElementSibling.innerHTML = '';
  tae.previousElementSibling.classList.add('solo');
  tae.classList.add('ninja');
  tae.classList.add('solobtn');
  tae.previousElementSibling.classList.remove(ActuPoke);
  tae.classList.remove(ActuPoke);
  mypoke = localStorage.getItem("pokemon");
  console.log(mypoke);
  mypoke = mypoke.split(',');
  console.log(mypoke);
  mypoke.splice(mypoke.indexOf(ActuPoke), 1);
  console.log(mypoke);
  mypoke = mypoke.join(',');
  console.log(mypoke);
  localStorage.setItem("pokemon", JSON.stringify(mypoke));
}




//FRONT
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let pokemon = document.getElementById("pokemon");
function seeform(id) {
    if (id == 2) {
        nom.classList.add("activeform")
    }
    else if (id == 3) {
        prenom.classList.add("activeform")
    }
    else if (id == 1) {
      pokemon.classList.add("activeform")
    }
}
function sendform(id) {
    if (id == 1) {
        const pokemon = document.getElementById("Nimg").value;
        localStorage.setItem("pokemon", pokemon);
    }
    else if (id == 2) {
        const nom = document.getElementById("Nnom").value;
        localStorage.setItem("nom", nom);
    }
    else if (id == 3) {
       const prenom = document.getElementById("Nprenom").value;
        localStorage.setItem("prenom", prenom);
    }
}

let Pprenom = document.getElementById("Pprenom");
let Pnom = document.getElementById("Pnom");
let Pimg = document.getElementById("Pimg");

Pprenom.innerHTML = localStorage.getItem("prenom");
Pnom.innerHTML = localStorage.getItem("nom");
Pimg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + localStorage.getItem("pokemon") + ".png";


// let ia = document.getElementById("ia");
// let ib = document.getElementById("ib");
// let ic = document.getElementById("ic");

// let im1 = document.querySelector(".im1");
// let im2 = document.querySelector(".im2");
// let im3 = document.querySelector(".im3");

// im1.addEventListener("mouse", function () {











<<<<<<< HEAD
//NODE
=======

//NODE
>>>>>>> 410474efd66def3d0cbea79c016eb1517f30fa49
