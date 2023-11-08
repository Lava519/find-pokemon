const e = document.getElementById("error");
const container = document.querySelector(".fetched-data");
const pokename = document.querySelector(".pokemon-name");
const button = document.querySelector(".button-search");
const img = document.getElementById("artwork");
const text = document.querySelector(".textbox");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const abilities = document.querySelector(".abilities-container").children;
const types = document.querySelector(".types-container").children;

const url = "https://pokeapi.co/api/v2/pokemon/";
const imgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

button.addEventListener( "click", function(){getPoke()});

function checKey(event) {
    if (event.key == "Enter") {
        getPoke();
    }
}

function initialize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function formURL(pokemon) {
    return url  + pokemon.toLowerCase();    
}

function replaceDash(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i]==="-" || string[i]==="_"){
            string = string.slice(0,i) + " " + string.slice(i+1);
        }
    }
    return string;
}

function applyData(data) {
    pokename.innerText = initialize(data.name);
    height.innerText = data.height/10 + "m";
    weight.innerText = data.weight/10 + "kg";
    let index = data.id;
    artwork.src = imgURL+index+".png";
    
    for (let i = 0; i < abilities.length; i++) {
       if (data.abilities[i] != undefined) {
           abilities[i].style.display = "block";
           abilities[i].innerText = replaceDash(data.abilities[i].ability.name.toUpperCase());
       }
       else {
           abilities[i].style.display = "none";
       }
    }

    for (let i = 0; i < types.length; i++) {
       if (data.types[i] != undefined) {
           types[i].style.display = "block";
           types[i].innerText = data.types[i].type.name.toUpperCase();
           types[i].classList = data.types[i].type.name;
       }
       else {
           types[i].style.display = "none";
       }
    }
    setTimeout(() => {
        container.style["max-height"] = "100%";
    }, 5);

}

async function getPoke(){
    try {
        let response = await fetch(formURL(text.value));
        if ( !response.ok) {
            e.style.display = "block";
            container.style["max-height"] = 0;
            throw new Error(`Pokemon does not exist!`);    
        }
        else {
            e.style.display = "none"
            let data =  await response.json();
            applyData(data);
        }
    }
    catch(error) {
        console.error(`HTTP error: ${error}`);
    }
}


