

fetch('https://app.pokemon-api.xyz/pokemon/random')
        .then((data) =>{
            return data.json();
        })
        .then((json)=>{
            
          console.log(json);
        });




/*

//componente 1 collect pokemon info -----------------------------------
class CollectPokemonInfo{
    getData(){
        return fetch('https://app.pokemon-api.xyz/pokemon/random')
        .then((data) =>{
            return data.json();
        })
        .then((json)=>{
            
            const pokemonRetorno = {
                name : json.name.english,
                id : json.id,
                type : json.type
            }    
            return pokemonRetorno;
        });
    }
}

//component 2 do something with the pokemon info.----------------------
class PokemonHandler{
    constructor(pokeData){
        this.pokeData = pokeData;
    }

    showData(){
        const pokeName = document.querySelector(".test");
        pokeName.innerHTML = this.pokeData.name;
    }
}

// main script-------------------------------------
const pokemon1 = new CollectPokemonInfo();
//const pokemon1 = pokemon.getData().then(pokemon.id);

pokemon1.getData().then(pokeData =>{
    const pokeHandler = new PokemonHandler(pokeData);
    pokeHandler.showData();
})



















/*

//pokemon 1-----------------------------------------------------
var pokemon1;
function loadRandomPokemon(){
    fetch('https://app.pokemon-api.xyz/pokemon/random')
    .then(res => res.json())
    .then(data => pokemon1 = data)
    .then((data) => {
        loadAPokemon1(data)
    })
}

function loadAPokemon1(data){
   
    const pokemonId1 = document.querySelector("[data-js='pokemonId1']");
    
    const pokemonImage1 = document.querySelector("[data-js='pokemonImage1']");
    const pokemonName1 = document.querySelector("[data-js='pokemonName1']");
   
    pokemonId1.innerHTML = data.id;
    pokemonImage1.src = data.thumbnail;
    pokemonName1.innerHTML = data.name.english; 
    
    
    
    
}

//pokemon 2-------------------------------------------------------
var pokemon2;
function loadRandomPokemon2(){
    fetch('https://app.pokemon-api.xyz/pokemon/random')
    .then(res => res.json())
    .then(data => pokemon2 = data)
    .then((data) => {
        loadAPokemon2(data)
    })
}

function loadAPokemon2(data){
   
    const pokemonId2 = document.querySelector("[data-js='pokemonId2']");
    
    const pokemonImage2 = document.querySelector("[data-js='pokemonImage2']");
    const pokemonName2 = document.querySelector("[data-js='pokemonName2']");
   
    pokemonId2.innerHTML = data.id;
    pokemonImage2.src = data.thumbnail;
    pokemonName2.innerHTML = data.name.english; 
    
    
    
    
}

// pokemon 3 -------------------------------------------------------------------------------
var pokemon3;
function loadRandomPokemon3(){
    fetch('https://app.pokemon-api.xyz/pokemon/random')
    .then(res => res.json())
    .then(data => pokemon3 = data)
    .then((data) => {
        loadAPokemon3(data)
    })
}

function loadAPokemon3(data){
   
    const pokemonId3 = document.querySelector("[data-js='pokemonId3']");
    
    const pokemonImage3 = document.querySelector("[data-js='pokemonImage3']");
    const pokemonName3 = document.querySelector("[data-js='pokemonName3']");
   
    pokemonId3.innerHTML = data.id;
    pokemonImage3.src = data.thumbnail;
    pokemonName3.innerHTML = data.name.english;     
    
}
// pokemon 4 -------------------------------------------------------------------------------
var pokemon4;
function loadRandomPokemon4(){
    fetch('https://app.pokemon-api.xyz/pokemon/random')
    .then(res => res.json())
    .then(data => pokemon4 = data)
    .then((data) => {
        loadAPokemon4(data)
    })
}

function loadAPokemon4(data){
   
    const pokemonId4 = document.querySelector("[data-js='pokemonId4']");
    
    const pokemonImage4 = document.querySelector("[data-js='pokemonImage4']");
    const pokemonName4 = document.querySelector("[data-js='pokemonName4']");
   
    pokemonId4.innerHTML = data.id;
    pokemonImage4.src = data.thumbnail;
    pokemonName4.innerHTML = data.name.english;     
    
}

// pokemon 5 -------------------------------------------------------------------------------
var pokemon5;
function loadRandomPokemon5(){
    fetch('https://app.pokemon-api.xyz/pokemon/random')
    .then(res => res.json())
    .then(data => pokemon5 = data)
    .then((data) => {
        loadAPokemon5(data)
    })
}

function loadAPokemon5(data){
   
    const pokemonId5 = document.querySelector("[data-js='pokemonId5']");
    
    const pokemonImage5 = document.querySelector("[data-js='pokemonImage5']");
    const pokemonName5 = document.querySelector("[data-js='pokemonName5']");
   
    pokemonId5.innerHTML = data.id;
    pokemonImage5.src = data.thumbnail;
    pokemonName5.innerHTML = data.name.english;     
    
}

// pokemon 6 -------------------------------------------------------------------------------
var pokemon6;
function loadRandomPokemon6(){
    fetch('https://app.pokemon-api.xyz/pokemon/random')
    .then(res => res.json())
    .then(data => pokemon6 = data)
    .then((data) => {
        loadAPokemon6(data)
    })
}

function loadAPokemon6(data){
   
    const pokemonId6 = document.querySelector("[data-js='pokemonId6']");
    
    const pokemonImage6 = document.querySelector("[data-js='pokemonImage6']");
    const pokemonName6 = document.querySelector("[data-js='pokemonName6']");
   
    pokemonId6.innerHTML = data.id;
    pokemonImage6.src = data.thumbnail;
    pokemonName6.innerHTML = data.name.english;     
    
}




loadRandomPokemon();
loadRandomPokemon2();
loadRandomPokemon3();
loadRandomPokemon4();
loadRandomPokemon5();
loadRandomPokemon6();


// Add class gradient -------------------------------------------
//tipo de poke dentro de variable
//



const pokeCard = document.querySelectorAll(".pokemon-card");

pokeCard.forEach(function (pokeCard){
    pokeCard.classList.add("poison-background");//aca le pongo variable para que tome el typo y asigne el correspondiente background
})
// End of class gradient -------------------------------------------



/*
var obj;

fetch('https://app.pokemon-api.xyz/pokemon/random')
  .then(res => res.json())
  .then(data => obj = data)
  .then(() => console.log(obj))




//end of pokemon 1



//pokemon 2---------------------------------------------------------------
function loadRandomPokemon2(){
    fetch('https://app.pokemon-api.xyz/pokemon/random',{
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) =>{
        return response.json();
    }).then((json)=>{
    
        loadAPokemon2(json); 
        


        
        
    } )
}

function loadAPokemon2(json){
   
    const pokemonId2 = document.querySelector("[data-js='pokemonId2']");
    
    const pokemonImage2 = document.querySelector("[data-js='pokemonImage2']");
    const pokemonName2 = document.querySelector("[data-js='pokemonName2']");
   
    pokemonId2.innerHTML = json.id;
    pokemonImage2.src = json.thumbnail;
    pokemonName2.innerHTML = json.name.english; 
    console.log( json.id);
    console.log( json.name.english);
    
}


loadRandomPokemon1();
loadRandomPokemon2();


 
 

// nice idea if I just want to load 6 pokemons
/*
function loadSixPokemons(){
    let counter=0;
    while(counter <6){
        loadRandomPokemon();
        counter ++;
    }
}

loadSixPokemons();
*/










