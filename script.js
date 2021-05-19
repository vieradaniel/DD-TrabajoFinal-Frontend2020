//conecto API con fetch
function loadRandomPokemon(){
    fetch('https://app.pokemon-api.xyz/pokemon/random',{
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) =>{
        return response.json();
    }).then((json)=>{
    
        console.log( json.id);
        console.log( json.name.english); 
        
        
    } )
}

function loadSixPokemons(){
    let counter=0;
    while(counter <6){
        loadRandomPokemon();
        counter ++;
    }
}

loadSixPokemons();

//fin conectar API con fetch

//cargar un pokemon a random
/*
function loadRandomPokemon(json){
    const pokemonId = document.querySelector("[data-js='pokemonId']");
    
    const pokemonImage = document.querySelector("[data-js='pokemonImage']");
    const pokemonName = document.querySelector("[data-js='pokemonName']");
   
    pokemonId.innerHTML = json.id;
    pokemonImage.src = json.thumbnail;
    pokemonName.innerHTML = json.name.english; 
    console.log( json.id);
    
}
*/
// fin de cargar un pokemon random

