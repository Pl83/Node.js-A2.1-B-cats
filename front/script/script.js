var ActuPoke = 0;
if (localStorage.getItem("pokemon") == null) {
  localStorage.setItem("pokemon", []);
}

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





//NODE
