localStorage.setItem("Yourpokemon", 'qsdrsbry 4sbbrtsb,ft/85wdbt455fgfd628sder459tesdgf45')
var MyPower = 0;
var YourPower = 0;

function MyTeam() {
  let MyTeam = localStorage.getItem("pokemon");
  //console.log(MyTeam);
  let numbers = MyTeam.match(/\d+/g);
  //console.log(numbers);
  numbers.forEach(element => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + element)
    .then(response => response.json())
      .then(data => {
        //console.log(data)
        MyPower += data.stats[0].base_stat;
        MyPower += data.stats[1].base_stat;
        MyPower += data.stats[2].base_stat;
        MyPower += data.stats[3].base_stat;
        MyPower += data.stats[4].base_stat;
        MyPower += data.stats[5].base_stat;
        //console.log(MyPower);
      })
  });
  if(numbers) {
      let numbersString = numbers.join(',');
      let numbersArray = numbersString.split(',');
    for (let i = 0; i < numbersArray.length; i++) {
      let imgcontainer = document.querySelector('.myteam');
      imgcontainer.classList.remove('myteam');
      imgcontainer.classList.add(numbersArray[i]);
      imgcontainer.innerHTML = '';
      imgcontainer.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numbersArray[i]}.png">`;
    }
  }
}

MyTeam();



function YourTeam() {
  let YourTeam = localStorage.getItem("Yourpokemon");
  //console.log(YourTeam);
  let numbers = YourTeam.match(/\d+/g);
  //console.log(numbers);
  numbers.forEach(element => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + element)
    .then(response => response.json())
      .then(data => {
        //console.log(data)
        YourPower += data.stats[0].base_stat;
        YourPower += data.stats[1].base_stat;
        YourPower += data.stats[2].base_stat;
        YourPower += data.stats[3].base_stat;
        YourPower += data.stats[4].base_stat;
        YourPower += data.stats[5].base_stat;
        //console.log(YourPower);
      })
  });
  if(numbers) {
      let numbersString = numbers.join(',');
      let numbersArray = numbersString.split(',');
    for (let i = 0; i < numbersArray.length; i++) {
      let imgcontainer = document.querySelector('.yourteam');
      imgcontainer.classList.remove('yourteam');
      imgcontainer.classList.add(numbersArray[i]);
      imgcontainer.innerHTML = '';
      imgcontainer.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numbersArray[i]}.png">`;
    }
  }
}

YourTeam();

function compare() {
  console.log(MyPower);
  console.log(YourPower);
  let placeolder = document.querySelector('.placeolder');
  placeolder.style.display = 'flex';
  let myteamStat = document.querySelector('#myteamStat');
  let yourteamStat = document.querySelector('#yourteamStat');

  let promise1 = new Promise((resolve) => {
    for (let i = 0; i < MyPower; i++) {
      setTimeout(function() {
        myteamStat.innerHTML = i+' cc';
        if (i === MyPower - 1) resolve();
      }, 3 * i);
    }
  });
  
  let promise2 = new Promise((resolve) => {
    for (let i = 0; i < YourPower; i++) {
      setTimeout(function() {
        yourteamStat.innerHTML = i + ' cc';
        if (i === YourPower - 1) resolve();
      }, 3 * i);
    }
  });
  
  Promise.all([promise1, promise2]).then(() => {
    if (MyPower > YourPower) {
      myteamStat.style.fontSize = "40px";
      yourteamStat.style.fontSize = "15px";
      alert('The battle is over ! You Win !');
    } else if (MyPower < YourPower) {
      myteamStat.style.fontSize = "15px";
      yourteamStat.style.fontSize = "40px";
      alert('The battle is over ! You Lose !');
    } else {
      myteamStat.style.fontSize = "larger";
      yourteamStat.style.fontSize = "larger";
      alert('The battle is over ! It\'s a draw !');
    }
    
  });
  
}

