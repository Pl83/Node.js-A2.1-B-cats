var ActuPoke = 0;
if (localStorage.getItem("pokemon") == null) {
  localStorage.setItem("pokemon", []);
}
if (localStorage.getItem("history") == null) {
  localStorage.setItem("history", '');
}

document.addEventListener("DOMContentLoaded", () => {
  const ps = document.querySelector(".pokemon-search");
  if (ps !== null && ps.innerHTML !== "") {
    ps.innerHTML = "";
  }
});




function getPokemon() {
  let mypoke = localStorage.getItem("pokemon");
  //console.log(typeof mypoke);
  let numbers = mypoke.match(/\d+/g);
  if(numbers) {
      let numbersString = numbers.join(',');
      let numbersArray = numbersString.split(',');
      //console.log(numbersArray);

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
  //console.log(value);
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
  //console.log(mypoke);
  mypoke = mypoke.split(',');
  //console.log(mypoke);
  mypoke.splice(mypoke.indexOf(ActuPoke), 1);
  //console.log(mypoke);
  mypoke = mypoke.join(',');
  //console.log(mypoke);
  localStorage.setItem("pokemon", JSON.stringify(mypoke));
}

const socket = io('http://localhost:3000');

let showmessagedata = document.querySelector(".showmessagedata");
console.log(showmessagedata);

let btnsock = document.querySelector(".btnsock");
btnsock.addEventListener("click", function() {
  let contentmessage = document.querySelector("#contentmessage").value;
  let pseudo = localStorage.getItem("pseudo");
  let history = localStorage.getItem("history");
  history = history.split(',');
  //console.log(history);
  history.push(pseudo + ' a dit : ' + contentmessage);
  history = history.join(',');
  localStorage.setItem("history", history);
  //console.log(history);
  
  //socket.emit("message", pseudo + ' dit :' + contentmessage);
  socket.emit("message", history);
});

let history = localStorage.getItem("history");
  history = history.split(',');
  console.log(history);
  for (let i = 0; i < history.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = '<p>'+history[i]+'</p>' + '<br>';
    showmessagedata.appendChild(li)
  }

let iolisten = document.querySelectorAll(".iolisten");

iolisten.forEach(function(btn) {
btn.addEventListener("click", function() {
let pokemon = localStorage.getItem("pokemon");
socket.emit("pokemonData", pokemon);
});
});

socket.on("Sendfront", (data) => {
  //console.log('rizzeds');
  //console.log(data);
  localStorage.setItem("history", data);
  let history = localStorage.getItem("history");
  history = history.split(',');
  console.log(history);
  showmessagedata.innerHTML = '';
  for (let i = 0; i < history.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = '<p>'+history[i]+'</p>' + '<br>';
    showmessagedata.appendChild(li)
  }
  // let li = document.createElement("li");
  // li.innerHTML = '<p>'+data+'</p>';
  // showmessagedata.appendChild(li)
});

socket.on("pokemonData", (data) => {
  //console.log('prochaineconsole');
  //console.log(data);
  localStorage.setItem("pokemon", JSON.stringify(data));
  //let pokemon = data.split(',');
  //console.log(pokemon);
});

const main = document.querySelector("main");
const boxarea = document.querySelector(".boxarea");
let x = 0;
let y = 0;

while (y < main.clientHeight) {
  let nb = Math.floor(Math.random() * 898) + 1;
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  //div.style.backgroundColor = "red";
  div.style.position = "absolute";
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.classList.add("boxpoke");
  //div.classList.add("boxslot");
  div.classList.add("27");
  div.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${nb}.png">`;
  boxarea.appendChild(div);

  x += 65; // 50px (width) + 15px (gap)
  if (x + 50 > main.clientWidth) {
    x = 0;
    y += 65;
  }
}

//NODE
