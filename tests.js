

let poke1 = {
    name : "pikachu",
    hp: 40,
    attack: 20

}

let poke2 = {
    name : "squartle",
    hp: 50,
    attack: 15
}

let poke3 = {
    name : "charmander",
    hp: 60,
    attack: 10
}

let poke4 = {
    name : "bulbasor",
    hp: 70,
    attack: 5
}


function fight(firstPokemon,secondPokemon){
    let resultPokeOne = firstPokemon.hp;
    let resultPokeTwo = secondPokemon.hp;
    
    console.log(firstPokemon.name + " VS " + secondPokemon.name);
    
    
    console.log("Fight!!!");
        

    
    roundNumber = 1;

   
    let interval = setInterval (fight1,1000);

    

    function fight1(){
       
            console.log("round " + roundNumber);
            console.log("hp de "+ firstPokemon.name +" "+ resultPokeOne);
            console.log("hp de "+ secondPokemon.name +" "+ resultPokeTwo);
            
            resultPokeOne = resultPokeOne - secondPokemon.attack;
            resultPokeTwo = resultPokeTwo - firstPokemon.attack;
    
            
            
            roundNumber ++;
    
            
    
        
        if(resultPokeOne<=0){
            clearInterval(interval);
            console.log (firstPokemon.name +" has lost");
            flag = true;
        }
        else if (resultPokeTwo <=0){
            clearInterval(interval);
            console.log(firstPokemon.name + " has won");
            flag = true;
        }

    }

   
    
}

async function pokemonBattle(){
    fight(poke1,poke2);
    await sleep (10000);
    if(flag === true){
        clearTimeout(sleep());
    }
    fight(poke1,poke3);

}


    
 
function sleep (ms){
    return new Promise ((accept)=>{
        setTimeout(()=>{
            accept();
        },ms);
    });
}

let flag = false

pokemonBattle();
     










   










/*
var print_two = function (call_back){
    setTimeout(function(){
        console.log("2");
        call_back();
    }, 2000);

};
*/

/*
function print_two (call_back){
    setTimeout(function(){
        console.log("2");
        call_back();
    }, 2000);

};



console.log ("1");

print_two(function(){
    console.log("3");
})
*/