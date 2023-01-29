
//FRONT

let prenom = document.getElementById("prenom");
let pokemon = document.getElementById("pokemon");
function seeform(id) {

    if (id == 3) {
        prenom.classList.add("activeform")
    }
    else if (id == 1) {

        pokemon.classList.add("activeform")

    }
}
function sendform(id) {
    if (id == 1) {
        const pokemon = document.getElementById("Nimg").value;
        localStorage.setItem("favpokemon", pokemon);
    }

    else if (id == 3) {
        const prenom = document.getElementById("Nprenom").value;
        localStorage.setItem("prenom", prenom);
    }
}

let Pprenom = document.getElementById("Pprenom");

let Pimg = document.getElementById("Pimg");

Pprenom.innerHTML = localStorage.getItem("prenom");


Pimg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + localStorage.getItem("favpokemon") + ".png";

