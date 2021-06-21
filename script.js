
setTimeout(()=>{
    let loadingStage = document.querySelector('.loading-stage').style.display="none";
    let characterSelection = document.querySelector('.character-selection').style.display="block"
},1500);




class CollectPokemonInfo{
    getData(){
        return fetch('https://app.pokemon-api.xyz/pokemon/random')
        .then((data) =>{
            return data.json();
        })
        .then((json)=>{

          

            return json;

        });
    }
}





//POKEMON 1--------------------------------------------------------------------
const pokemon1 = new CollectPokemonInfo();


pokemon1.getData().then(pokeData =>{
    const pokeCard1 = document.querySelectorAll('.poke1');
    let hp1;
        if (pokeData.base === undefined){
            hp1 = 44;
            
        }else{
            hp1 = pokeData.base.HP;
        
        }
    
    
    
    let attack1;
    if (pokeData.base === undefined){
        attack1 = 44;
        
    }else{
        attack1 = pokeData.base.Attack;
       
    }
    
    let defense1;
    if (pokeData.base === undefined){
        defense1 = 44;
        
    }else{
        defense1 = pokeData.base.Defense;
       
    }

    let pokeCounter1 = 0;
    let pokeCounter2 = 0; 
     

    

    pokeCard1.forEach((e)=>{
        
        e.pokemonName= pokeData.name.english;// does it mean that I can access the function get pokemonName? from outside of the component?
        e.pokemonImage= pokeData.thumbnail;
        e.pokemonId= "#"+ pokeData.id;
        e.pokemonType= findTheType();
        e.pokemonBackground= findTheBackground();
        e.pokemonHp1 = hp1;
        e.pokemonCounter1 = pokeCounter1;
        e.pokemonCounter2 = pokeCounter2;
       
        
    })

    function findTheBackground(){
        let final=0;
        const background = pokeData.type;
        const backgroundResult = background[0].toString();
        if(backgroundResult === 'Electric'){
            final = 'linear-gradient(180deg, #F6BD20 0%, #FFFFFF 55.73%, #FFDE52 100%)';
        }else if (backgroundResult === 'Fire'){
            final = 'linear-gradient(180deg, #CF2828 0%, #FFDE52 100%)'
        }else if (backgroundResult === 'Water'){
            final ='linear-gradient(180deg, #3CC7DA 0%, #186B85 100%)'
        }else if (backgroundResult === 'Ice'){
            final = 'linear-gradient(180deg, #FFFFFF 0%, #C5DBFF 55.73%, #E2E9F5 100%)'
        }else if (backgroundResult === 'Poison'){
            final = 'linear-gradient(180deg, #34B550 0%, #2A7318 100%)'
        }else if (backgroundResult === 'Bug'){
            final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
            
        }else if (backgroundResult === 'Grass'){
            final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
        }else if (backgroundResult === 'Normal'){
            final = 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)'
        }else if (backgroundResult ==='Ghost'){
            final = 'linear-gradient(315deg, #e9bcb7 0%, #29524a 74%)'
        }else if (backgroundResult ==='Dragon'){
            final = 'linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%)'
        }else if (backgroundResult === 'Ground'){
            final = 'linear-gradient(315deg, #d8d8ac 0%, #c8c85e 74%)'
        }else if (backgroundResult === 'Fairy'){
            final = 'linear-gradient(315deg, #c177b2 0%, #e2e1e1 74%)'
        }else if (backgroundResult === 'Rock'){
            final = 'linear-gradient(315deg, #5e574d 0%, #7d6d61 74%)'
        }else if (backgroundResult === 'Psychic'){
            final = 'linear-gradient(315deg, #c7e9fb 0%, #e61d8c 74%)'
        }else if (backgroundResult === 'Dark'){
            final = 'linear-gradient(315deg, #000000 0%, #7f8c8d 74%)'
        }else if (backgroundResult === 'Steel'){
            final = 'linear-gradient(315deg, #d3d3d3 0%, #57606f 74%)'
        }else if (backgroundResult === 'Fighting'){
            final = 'linear-gradient(147deg, #da898c 0%, #59090c 74%)'
        }else if (backgroundResult === 'Flying'){
            final = 'linear-gradient(315deg, #70a1ff 0%, #c2c0c0 74%)'
        }

    return final;
    }


    function findTheType(){
        const type= pokeData.type;
        const result= type[0].toString()                       
        const route = "static/"+ result +".png";
        return route;
        }


   
   

    
//start ------- click on a card in "select your pokemon" and it will display its profile--------------------
    const card= document.querySelector('.poke1');
    card.addEventListener('click',()=>{
        const profile = document.querySelector('.profile-stage').style.display= "block";
        const cards = document.querySelector('.character-selection').style.display="none";
        
        const buttonFight2 = document.querySelector('.button-fight-2').style.display="none";
        const buttonFight3 = document.querySelector('.button-fight-3').style.display="none";
        const buttonFight4 = document.querySelector('.button-fight-4').style.display="none";
        const buttonFight5 = document.querySelector('.button-fight-5').style.display="none";
        const buttonFight6 = document.querySelector('.button-fight-6').style.display="none";

        const pokeProfile2 = document.querySelector('#profile2').style.display="none";
        const pokeProfile3 = document.querySelector('#profile3').style.display="none";
        const pokeProfile4 = document.querySelector('#profile4').style.display="none";
        const pokeProfile5 = document.querySelector('#profile5').style.display="none";
        const pokeProfile6 = document.querySelector('#profile6').style.display="none";
        
               
        
        
    });

//end ------- click on a card in "select your pokemon" and it will display its profile--------------------


    
    
    


    
// start of testing nesting fetch--------------------------------

        const pokemon2 = new CollectPokemonInfo();

        pokemon2.getData().then(pokeData =>{
            const pokeCard2 = document.querySelectorAll('.poke2');
            
            let hp2;
            if (pokeData.base === undefined){
                hp2 = 44;
                
            }else{
                hp2 = pokeData.base.HP;
               
            }

            let attack2;
            if (pokeData.base === undefined){
                attack2 = 44;
                
            }else{
                attack2 = pokeData.base.Attack;
            
            }
            
            let defense2;
            if (pokeData.base === undefined){
                defense2 = 44;
                
            }else{
                defense2 = pokeData.base.Defense;
            
            }
            

            pokeCard2.forEach((e)=>{
                
                e.pokemonImage= pokeData.thumbnail;
                e.pokemonId= "#"+ pokeData.id;
                e.pokemonType= findTheType();
                e.pokemonBackground= findTheBackground();
                e.pokemonHp2 = hp2;
                e.pokemonName2=pokeData.name.english;
                
            })
           

        
            

            
            const card= document.querySelector('.poke2');
            card.addEventListener('click',()=>{
                const profile = document.querySelector('.profile-stage').style.display= "block";
                const cards = document.querySelector('.character-selection').style.display="none";
               


                const buttonFight1 = document.querySelector('.button-fight-1').style.display="none";
                const buttonFight3 = document.querySelector('.button-fight-3').style.display="none";
                const buttonFight4 = document.querySelector('.button-fight-4').style.display="none";
                const buttonFight5 = document.querySelector('.button-fight-5').style.display="none";
                const buttonFight6 = document.querySelector('.button-fight-6').style.display="none";

                const pokeProfile1 = document.querySelector('#profile1').style.display="none";
                const pokeProfile3 = document.querySelector('#profile3').style.display="none";
                const pokeProfile4 = document.querySelector('#profile4').style.display="none";
                const pokeProfile5 = document.querySelector('#profile5').style.display="none";
                const pokeProfile6 = document.querySelector('#profile6').style.display="none";
                
            });


            function findTheBackground(){
                let final=0;
                const background = pokeData.type;
                const backgroundResult = background[0].toString();
                if(backgroundResult === 'Electric'){
                    final = 'linear-gradient(180deg, #F6BD20 0%, #FFFFFF 55.73%, #FFDE52 100%)';
                }else if (backgroundResult === 'Fire'){
                    final = 'linear-gradient(180deg, #CF2828 0%, #FFDE52 100%)'
                }else if (backgroundResult === 'Water'){
                    final ='linear-gradient(180deg, #3CC7DA 0%, #186B85 100%)'
                }else if (backgroundResult === 'Ice'){
                    final = 'linear-gradient(180deg, #FFFFFF 0%, #C5DBFF 55.73%, #E2E9F5 100%)'
                }else if (backgroundResult === 'Poison'){
                    final = 'linear-gradient(180deg, #34B550 0%, #2A7318 100%)'
                }else if (backgroundResult === 'Bug'){
                    final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
                    
                }else if (backgroundResult === 'Grass'){
                    final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
                }else if (backgroundResult === 'Normal'){
                    final = 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)'
                }else if (backgroundResult ==='Ghost'){
                    final = 'linear-gradient(315deg, #e9bcb7 0%, #29524a 74%)'
                }else if (backgroundResult ==='Dragon'){
                    final = 'linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%)'
                }else if (backgroundResult === 'Ground'){
                    final = 'linear-gradient(315deg, #d8d8ac 0%, #c8c85e 74%)'
                }else if (backgroundResult === 'Fairy'){
                    final = 'linear-gradient(315deg, #c177b2 0%, #e2e1e1 74%)'
                }else if (backgroundResult === 'Rock'){
                    final = 'linear-gradient(315deg, #5e574d 0%, #7d6d61 74%)'
                }else if (backgroundResult === 'Psychic'){
                    final = 'linear-gradient(315deg, #c7e9fb 0%, #e61d8c 74%)'
                }else if (backgroundResult === 'Dark'){
                    final = 'linear-gradient(315deg, #000000 0%, #7f8c8d 74%)'
                }else if (backgroundResult === 'Steel'){
                    final = 'linear-gradient(315deg, #d3d3d3 0%, #57606f 74%)'
                }else if (backgroundResult === 'Fighting'){
                    final = 'linear-gradient(147deg, #da898c 0%, #59090c 74%)'
                }else if (backgroundResult === 'Flying'){
                    final = 'linear-gradient(315deg, #70a1ff 0%, #c2c0c0 74%)'
                }

            return final;
            }


            function findTheType(){
                const type= pokeData.type;
                
                const result= type[0].toString()
                    
            
                
                const route = "static/"+ result +".png";
                return route;
                }

            
            

            // adding an event listener for the fighting button - there is one already but i couldn't add the function fight2() because of the scope I guess..?
            
            


            // in here poke 3 -- start

            const pokemon3 = new CollectPokemonInfo();

            pokemon3.getData().then(pokeData =>{
                const pokeCard3 = document.querySelectorAll('.poke3');
                
                let hp3;
                if (pokeData.base === undefined){
                    hp3 = 44;
                    
                }else{
                    hp3 = pokeData.base.HP;
                
                }

                let attack3;
                if (pokeData.base === undefined){
                    attack3 = 44;
                    
                }else{
                    attack3 = pokeData.base.Attack;
                
                }
                
                let defense3;
                if (pokeData.base === undefined){
                    defense3 = 44;
                    
                }else{
                    defense3 = pokeData.base.Defense;
                
                }
                

                pokeCard3.forEach((e)=>{
                    
                    e.pokemonImage= pokeData.thumbnail;
                    e.pokemonId= "#"+ pokeData.id;
                    e.pokemonType= findTheType();
                    e.pokemonBackground= findTheBackground();
                    e.pokemonHp3 = hp3;
                    e.pokemonName3=pokeData.name.english;
                    
                })
            

            
                

                
                // click the card and it will show you the profile
                const card= document.querySelector('.poke3');
                card.addEventListener('click',()=>{
                    const profile = document.querySelector('.profile-stage').style.display= "block";
                    const cards = document.querySelector('.character-selection').style.display="none";
                    
                    const buttonFight1 = document.querySelector('.button-fight-1').style.display="none";
                    const buttonFight2 = document.querySelector('.button-fight-2').style.display="none";
                    const buttonFight4 = document.querySelector('.button-fight-4').style.display="none";
                    const buttonFight5 = document.querySelector('.button-fight-5').style.display="none";
                    const buttonFight6 = document.querySelector('.button-fight-6').style.display="none";

                    const pokeProfile1 = document.querySelector('#profile1').style.display="none";
                    const pokeProfile2 = document.querySelector('#profile2').style.display="none";
                    const pokeProfile4 = document.querySelector('#profile4').style.display="none";
                    const pokeProfile5 = document.querySelector('#profile5').style.display="none";
                    const pokeProfile6 = document.querySelector('#profile6').style.display="none";
                    
                });
                


                function findTheBackground(){
                    let final=0;
                    const background = pokeData.type;
                    const backgroundResult = background[0].toString();
                    if(backgroundResult === 'Electric'){
                        final = 'linear-gradient(180deg, #F6BD20 0%, #FFFFFF 55.73%, #FFDE52 100%)';
                    }else if (backgroundResult === 'Fire'){
                        final = 'linear-gradient(180deg, #CF2828 0%, #FFDE52 100%)'
                    }else if (backgroundResult === 'Water'){
                        final ='linear-gradient(180deg, #3CC7DA 0%, #186B85 100%)'
                    }else if (backgroundResult === 'Ice'){
                        final = 'linear-gradient(180deg, #FFFFFF 0%, #C5DBFF 55.73%, #E2E9F5 100%)'
                    }else if (backgroundResult === 'Poison'){
                        final = 'linear-gradient(180deg, #34B550 0%, #2A7318 100%)'
                    }else if (backgroundResult === 'Bug'){
                        final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
                        
                    }else if (backgroundResult === 'Grass'){
                        final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
                    }else if (backgroundResult === 'Normal'){
                        final = 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)'
                    }else if (backgroundResult ==='Ghost'){
                        final = 'linear-gradient(315deg, #e9bcb7 0%, #29524a 74%)'
                    }else if (backgroundResult ==='Dragon'){
                        final = 'linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%)'
                    }else if (backgroundResult === 'Ground'){
                        final = 'linear-gradient(315deg, #d8d8ac 0%, #c8c85e 74%)'
                    }else if (backgroundResult === 'Fairy'){
                        final = 'linear-gradient(315deg, #c177b2 0%, #e2e1e1 74%)'
                    }else if (backgroundResult === 'Rock'){
                        final = 'linear-gradient(315deg, #5e574d 0%, #7d6d61 74%)'
                    }else if (backgroundResult === 'Psychic'){
                        final = 'linear-gradient(315deg, #c7e9fb 0%, #e61d8c 74%)'
                    }else if (backgroundResult === 'Dark'){
                        final = 'linear-gradient(315deg, #000000 0%, #7f8c8d 74%)'
                    }else if (backgroundResult === 'Steel'){
                        final = 'linear-gradient(315deg, #d3d3d3 0%, #57606f 74%)'
                    }else if (backgroundResult === 'Fighting'){
                        final = 'linear-gradient(147deg, #da898c 0%, #59090c 74%)'
                    }else if (backgroundResult === 'Flying'){
                        final = 'linear-gradient(315deg, #70a1ff 0%, #c2c0c0 74%)'
                    }

                return final;
                }


                function findTheType(){
                    const type= pokeData.type;
                    
                    const result= type[0].toString()
                        
                
                    
                    const route = "static/"+ result +".png";
                    return route;
                    }

                
                

                fight3();

                // 1st profile fight button function (I wrote two for the same button? (fight and fightbutton2))
    
                function fight3(){
                    const fight3 = document.querySelector('.button-fight-3');
                    fight3.addEventListener('click',()=>{
                        const profile= document.querySelector('.profile-stage').style.display="none";
                        let loading = document.querySelector('.loading-stage').style.display="flex";
                        
                        setTimeout(()=>{
                            
                            loading = document.querySelector('.loading-stage').style.display="none";
                            gameStart1 = document.querySelector('#game-start-1').style.display="none";
                            gameStart2 = document.querySelector('#game-start-2').style.display="none";
                            gameStart3 = document.querySelector('#game-start-3').style.display="block";
                            gameStart4 = document.querySelector('#game-start-4').style.display="block";
                            let gameStartStage= document.querySelector('.game-start-stage').style.display="flex"
                        },1500);
    
                        
                        
                        
                    })
                }

       

                //in here poke4  -- starts it is nested in poke 3

                const pokemon4 = new CollectPokemonInfo();

                pokemon4.getData().then(pokeData =>{
                    const pokeCard4 = document.querySelectorAll('.poke4');
                    
                    let hp4;
                    if (pokeData.base === undefined){
                        hp4 = 44;
                        
                    }else{
                        hp4 = pokeData.base.HP;
                    
                    }
    
                    let attack4;
                    if (pokeData.base === undefined){
                        attack4 = 44;
                        
                    }else{
                        attack4 = pokeData.base.Attack;
                    
                    }
                    
                    let defense4;
                    if (pokeData.base === undefined){
                        defense4 = 44;
                        
                    }else{
                        defense4 = pokeData.base.Defense;
                    
                    }
                    
    
                    pokeCard4.forEach((e)=>{
                        
                        e.pokemonImage= pokeData.thumbnail;
                        e.pokemonId= "#"+ pokeData.id;
                        e.pokemonType= findTheType();
                        e.pokemonBackground= findTheBackground();
                        e.pokemonHp4 = hp4;
                        e.pokemonName4=pokeData.name.english;
                        
                    })
                
    
                
                    
    
                    
                    // click the card and it will show you the profile
                    const card= document.querySelector('.poke4');
                    card.addEventListener('click',()=>{
                        const profile = document.querySelector('.profile-stage').style.display= "block";
                        const cards = document.querySelector('.character-selection').style.display="none";
                        
                        const buttonFight1 = document.querySelector('.button-fight-1').style.display="none";
                        const buttonFight2 = document.querySelector('.button-fight-2').style.display="none";
                        const buttonFight3 = document.querySelector('.button-fight-3').style.display="none";
                        const buttonFight5 = document.querySelector('.button-fight-5').style.display="none";
                        const buttonFight6 = document.querySelector('.button-fight-6').style.display="none";

                        const pokeProfile1 = document.querySelector('#profile1').style.display="none";
                        const pokeProfile2 = document.querySelector('#profile2').style.display="none";
                        const pokeProfile3 = document.querySelector('#profile3').style.display="none";
                        const pokeProfile5 = document.querySelector('#profile5').style.display="none";
                        const pokeProfile6 = document.querySelector('#profile6').style.display="none";
                        
                    });
                    
    
    
                    function findTheBackground(){
                        let final=0;
                        const background = pokeData.type;
                        const backgroundResult = background[0].toString();
                        if(backgroundResult === 'Electric'){
                            final = 'linear-gradient(180deg, #F6BD20 0%, #FFFFFF 55.73%, #FFDE52 100%)';
                        }else if (backgroundResult === 'Fire'){
                            final = 'linear-gradient(180deg, #CF2828 0%, #FFDE52 100%)'
                        }else if (backgroundResult === 'Water'){
                            final ='linear-gradient(180deg, #3CC7DA 0%, #186B85 100%)'
                        }else if (backgroundResult === 'Ice'){
                            final = 'linear-gradient(180deg, #FFFFFF 0%, #C5DBFF 55.73%, #E2E9F5 100%)'
                        }else if (backgroundResult === 'Poison'){
                            final = 'linear-gradient(180deg, #34B550 0%, #2A7318 100%)'
                        }else if (backgroundResult === 'Bug'){
                            final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
                            
                        }else if (backgroundResult === 'Grass'){
                            final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
                        }else if (backgroundResult === 'Normal'){
                            final = 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)'
                        }else if (backgroundResult ==='Ghost'){
                            final = 'linear-gradient(315deg, #e9bcb7 0%, #29524a 74%)'
                        }else if (backgroundResult ==='Dragon'){
                            final = 'linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%)'
                        }else if (backgroundResult === 'Ground'){
                            final = 'linear-gradient(315deg, #d8d8ac 0%, #c8c85e 74%)'
                        }else if (backgroundResult === 'Fairy'){
                            final = 'linear-gradient(315deg, #c177b2 0%, #e2e1e1 74%)'
                        }else if (backgroundResult === 'Rock'){
                            final = 'linear-gradient(315deg, #5e574d 0%, #7d6d61 74%)'
                        }else if (backgroundResult === 'Psychic'){
                            final = 'linear-gradient(315deg, #c7e9fb 0%, #e61d8c 74%)'
                        }else if (backgroundResult === 'Dark'){
                            final = 'linear-gradient(315deg, #000000 0%, #7f8c8d 74%)'
                        }else if (backgroundResult === 'Steel'){
                            final = 'linear-gradient(315deg, #d3d3d3 0%, #57606f 74%)'
                        }else if (backgroundResult === 'Fighting'){
                            final = 'linear-gradient(147deg, #da898c 0%, #59090c 74%)'
                        }else if (backgroundResult === 'Flying'){
                            final = 'linear-gradient(315deg, #70a1ff 0%, #c2c0c0 74%)'
                        }
    
                    return final;
                    }
    
    
                    function findTheType(){
                        const type= pokeData.type;
                        
                        const result= type[0].toString()
                            
                    
                        
                        const route = "static/"+ result +".png";
                        return route;
                        }
    
                    
                    
    
                    fight3();
    
                    // 1st profile fight button function (I wrote two for the same button? (fight and fightbutton2))
        
                    function fight3(){
                        const fight3 = document.querySelector('.button-fight-4');
                        fight3.addEventListener('click',()=>{
                            const profile= document.querySelector('.profile-stage').style.display="none";
                            let loading = document.querySelector('.loading-stage').style.display="flex";
                            
                            setTimeout(()=>{
                                
                                loading = document.querySelector('.loading-stage').style.display="none";
                                gameStart1 = document.querySelector('#game-start-1').style.display="none";
                                gameStart2 = document.querySelector('#game-start-2').style.display="none";
                                gameStart3 = document.querySelector('#game-start-3').style.display="block";
                                gameStart4 = document.querySelector('#game-start-4').style.display="block";
                                let gameStartStage= document.querySelector('.game-start-stage').style.display="flex"
                            },1500);
        
                            
                            
                            
                        })
                    }
                        

                    //in here poke 5 -- starts
                    const pokemon5 = new CollectPokemonInfo();

                    pokemon5.getData().then(pokeData =>{
                        const pokeCard5 = document.querySelectorAll('.poke5');
                        
                        let hp5;
                        if (pokeData.base === undefined){
                            hp5 = 44;
                            
                        }else{
                            hp5 = pokeData.base.HP;
                        
                        }
        
                        let attack5;
                        if (pokeData.base === undefined){
                            attack5 = 44;
                            
                        }else{
                            attack5 = pokeData.base.Attack;
                        
                        }
                        
                        let defense5;
                        if (pokeData.base === undefined){
                            defense5 = 44;
                            
                        }else{
                            defense5 = pokeData.base.Defense;
                        
                        }
                        
        
                        pokeCard5.forEach((e)=>{
                            
                            e.pokemonImage= pokeData.thumbnail;
                            e.pokemonId= "#"+ pokeData.id;
                            e.pokemonType= findTheType();
                            e.pokemonBackground= findTheBackground();
                            e.pokemonHp5 = hp5;
                            e.pokemonName5=pokeData.name.english;
                            
                        })
                    
        
                    
                        
        
                        
                        // click the card and it will show you the profile
                        const card= document.querySelector('.poke5');
                        card.addEventListener('click',()=>{
                            const profile = document.querySelector('.profile-stage').style.display= "block";
                            const cards = document.querySelector('.character-selection').style.display="none";
                            
                            const buttonFight1 = document.querySelector('.button-fight-1').style.display="none";
                            const buttonFight2 = document.querySelector('.button-fight-2').style.display="none";
                            const buttonFight3 = document.querySelector('.button-fight-3').style.display="none";
                            const buttonFight4 = document.querySelector('.button-fight-4').style.display="none";
                            const buttonFight6 = document.querySelector('.button-fight-6').style.display="none";

                            const pokeProfile1 = document.querySelector('#profile1').style.display="none";
                            const pokeProfile2 = document.querySelector('#profile2').style.display="none";
                            const pokeProfile3 = document.querySelector('#profile3').style.display="none";
                            const pokeProfile4 = document.querySelector('#profile4').style.display="none";
                            const pokeProfile6 = document.querySelector('#profile6').style.display="none";
                            
                        });
                        
        
        
                        function findTheBackground(){
                            let final=0;
                            const background = pokeData.type;
                            const backgroundResult = background[0].toString();
                            if(backgroundResult === 'Electric'){
                                final = 'linear-gradient(180deg, #F6BD20 0%, #FFFFFF 55.73%, #FFDE52 100%)';
                            }else if (backgroundResult === 'Fire'){
                                final = 'linear-gradient(180deg, #CF2828 0%, #FFDE52 100%)'
                            }else if (backgroundResult === 'Water'){
                                final ='linear-gradient(180deg, #3CC7DA 0%, #186B85 100%)'
                            }else if (backgroundResult === 'Ice'){
                                final = 'linear-gradient(180deg, #FFFFFF 0%, #C5DBFF 55.73%, #E2E9F5 100%)'
                            }else if (backgroundResult === 'Poison'){
                                final = 'linear-gradient(180deg, #34B550 0%, #2A7318 100%)'
                            }else if (backgroundResult === 'Bug'){
                                final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
                                
                            }else if (backgroundResult === 'Grass'){
                                final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
                            }else if (backgroundResult === 'Normal'){
                                final = 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)'
                            }else if (backgroundResult ==='Ghost'){
                                final = 'linear-gradient(315deg, #e9bcb7 0%, #29524a 74%)'
                            }else if (backgroundResult ==='Dragon'){
                                final = 'linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%)'
                            }else if (backgroundResult === 'Ground'){
                                final = 'linear-gradient(315deg, #d8d8ac 0%, #c8c85e 74%)'
                            }else if (backgroundResult === 'Fairy'){
                                final = 'linear-gradient(315deg, #c177b2 0%, #e2e1e1 74%)'
                            }else if (backgroundResult === 'Rock'){
                                final = 'linear-gradient(315deg, #5e574d 0%, #7d6d61 74%)'
                            }else if (backgroundResult === 'Psychic'){
                                final = 'linear-gradient(315deg, #c7e9fb 0%, #e61d8c 74%)'
                            }else if (backgroundResult === 'Dark'){
                                final = 'linear-gradient(315deg, #000000 0%, #7f8c8d 74%)'
                            }else if (backgroundResult === 'Steel'){
                                final = 'linear-gradient(315deg, #d3d3d3 0%, #57606f 74%)'
                            }else if (backgroundResult === 'Fighting'){
                                final = 'linear-gradient(147deg, #da898c 0%, #59090c 74%)'
                            }else if (backgroundResult === 'Flying'){
                                final = 'linear-gradient(315deg, #70a1ff 0%, #c2c0c0 74%)'
                            }
        
                        return final;
                        }
        
        
                        function findTheType(){
                            const type= pokeData.type;
                            
                            const result= type[0].toString()
                                
                        
                            
                            const route = "static/"+ result +".png";
                            return route;
                            
                        }
        
                        
                        
        
                        fight5();
        
                        // 1st profile fight button function (I wrote two for the same button? (fight and fightbutton2))
            
                        function fight5(){
                            const fight5 = document.querySelector('.button-fight-5');
                            fight5.addEventListener('click',()=>{
                                const profile= document.querySelector('.profile-stage').style.display="none";
                                let loading = document.querySelector('.loading-stage').style.display="flex";
                                
                                setTimeout(()=>{
                                    
                                    loading = document.querySelector('.loading-stage').style.display="none";
                                    gameStart1 = document.querySelector('#game-start-1').style.display="none";
                                    gameStart2 = document.querySelector('#game-start-2').style.display="none";
                                    gameStart3 = document.querySelector('#game-start-3').style.display="block";
                                    gameStart4 = document.querySelector('#game-start-4').style.display="block";
                                    let gameStartStage= document.querySelector('.game-start-stage').style.display="flex"
                                },1500);
            
                                
                                
                                
                            })
                        }  

                        //in here poke 6 -- starts

                        const pokemon6 = new CollectPokemonInfo();

                        pokemon6.getData().then(pokeData =>{
                            const pokeCard6 = document.querySelectorAll('.poke6');
                            
                            let hp6;
                            if (pokeData.base === undefined){
                                hp6 = 44;
                                
                            }else{
                                hp6 = pokeData.base.HP;
                            
                            }
            
                            let attack6;
                            if (pokeData.base === undefined){
                                attack6 = 44;
                                
                            }else{
                                attack6 = pokeData.base.Attack;
                            
                            }
                            
                            let defense6;
                            if (pokeData.base === undefined){
                                defense6 = 44;
                                
                            }else{
                                defense6 = pokeData.base.Defense;
                            
                            }
                            
            
                            pokeCard6.forEach((e)=>{
                                
                                e.pokemonImage= pokeData.thumbnail;
                                e.pokemonId= "#"+ pokeData.id;
                                e.pokemonType= findTheType();
                                e.pokemonBackground= findTheBackground();
                                e.pokemonHp6 = hp6;
                                e.pokemonName6=pokeData.name.english;
                                
                            })
                        
            
                        
                            
            
                            
                            // click the card and it will show you the profile
                            const card= document.querySelector('.poke6');
                            card.addEventListener('click',()=>{
                                const profile = document.querySelector('.profile-stage').style.display= "block";
                                const cards = document.querySelector('.character-selection').style.display="none";
                                
                                const buttonFight1 = document.querySelector('.button-fight-1').style.display="none";
                                const buttonFight2 = document.querySelector('.button-fight-2').style.display="none";
                                const buttonFight3 = document.querySelector('.button-fight-3').style.display="none";
                                const buttonFight4 = document.querySelector('.button-fight-4').style.display="none";
                                const buttonFight5 = document.querySelector('.button-fight-5').style.display="none";

                                const pokeProfile1 = document.querySelector('#profile1').style.display="none";
                                const pokeProfile2 = document.querySelector('#profile2').style.display="none";
                                const pokeProfile3 = document.querySelector('#profile3').style.display="none";
                                const pokeProfile4 = document.querySelector('#profile4').style.display="none";
                                const pokeProfile5 = document.querySelector('#profile5').style.display="none";
                                
                            });
                            
            
            
                            function findTheBackground(){
                                let final=0;
                                const background = pokeData.type;
                                const backgroundResult = background[0].toString();
                                if(backgroundResult === 'Electric'){
                                    final = 'linear-gradient(180deg, #F6BD20 0%, #FFFFFF 55.73%, #FFDE52 100%)';
                                }else if (backgroundResult === 'Fire'){
                                    final = 'linear-gradient(180deg, #CF2828 0%, #FFDE52 100%)'
                                }else if (backgroundResult === 'Water'){
                                    final ='linear-gradient(180deg, #3CC7DA 0%, #186B85 100%)'
                                }else if (backgroundResult === 'Ice'){
                                    final = 'linear-gradient(180deg, #FFFFFF 0%, #C5DBFF 55.73%, #E2E9F5 100%)'
                                }else if (backgroundResult === 'Poison'){
                                    final = 'linear-gradient(180deg, #34B550 0%, #2A7318 100%)'
                                }else if (backgroundResult === 'Bug'){
                                    final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
                                    
                                }else if (backgroundResult === 'Grass'){
                                    final = 'linear-gradient(180deg, #34B550 0%, #BEFFAD 100%)'
                                }else if (backgroundResult === 'Normal'){
                                    final = 'linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)'
                                }else if (backgroundResult ==='Ghost'){
                                    final = 'linear-gradient(315deg, #e9bcb7 0%, #29524a 74%)'
                                }else if (backgroundResult ==='Dragon'){
                                    final = 'linear-gradient(315deg, #deebdd 0%, #bbdbbe 74%)'
                                }else if (backgroundResult === 'Ground'){
                                    final = 'linear-gradient(315deg, #d8d8ac 0%, #c8c85e 74%)'
                                }else if (backgroundResult === 'Fairy'){
                                    final = 'linear-gradient(315deg, #c177b2 0%, #e2e1e1 74%)'
                                }else if (backgroundResult === 'Rock'){
                                    final = 'linear-gradient(315deg, #5e574d 0%, #7d6d61 74%)'
                                }else if (backgroundResult === 'Psychic'){
                                    final = 'linear-gradient(315deg, #c7e9fb 0%, #e61d8c 74%)'
                                }else if (backgroundResult === 'Dark'){
                                    final = 'linear-gradient(315deg, #000000 0%, #7f8c8d 74%)'
                                }else if (backgroundResult === 'Steel'){
                                    final = 'linear-gradient(315deg, #d3d3d3 0%, #57606f 74%)'
                                }else if (backgroundResult === 'Fighting'){
                                    final = 'linear-gradient(147deg, #da898c 0%, #59090c 74%)'
                                }else if (backgroundResult === 'Flying'){
                                    final = 'linear-gradient(315deg, #70a1ff 0%, #c2c0c0 74%)'
                                }
            
                            return final;
                            }
            
            
                            function findTheType(){
                                const type= pokeData.type;
                                
                                const result= type[0].toString()
                                    
                            
                                
                                const route = "static/"+ result +".png";
                                return route;
                                }
            
                            
                           
            
                            fight6();
            
                            // 1st profile fight button function (I wrote two for the same button? (fight and fightbutton2))
                
                            function fight6(){
                                const fight5 = document.querySelector('.button-fight-6');
                                fight5.addEventListener('click',()=>{
                                    const profile= document.querySelector('.profile-stage').style.display="none";
                                    let loading = document.querySelector('.loading-stage').style.display="flex";
                                    
                                    setTimeout(()=>{
                                        
                                        loading = document.querySelector('.loading-stage').style.display="none";
                                        gameStart1 = document.querySelector('#game-start-1').style.display="none";
                                        gameStart2 = document.querySelector('#game-start-2').style.display="none";
                                        gameStart3 = document.querySelector('#game-start-3').style.display="block";
                                        gameStart4 = document.querySelector('#game-start-4').style.display="block";
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="flex"
                                    },1500);
                
                                    
                                    
                                    
                                })
                            }
            
                          

                            

                            // I can write anything I want in here and it will work I guess xD start
                            // I will write all the logic in here
                            function sleep (ms){
                                return new Promise ((accept)=>{
                                    setTimeout(()=>{
                                        accept();
                                    },ms);
                                });
                            }

                            // Pokemon 1 logic start ------------------------------------------------------------------------
                            

                            // start of : button fight in profile stage ----------------
                            let hpOneCounter = hp1;                            
                            let hpTwoCounter = hp2;
                            let hpThreeCounter = hp3;
                            let hpFourCounter = hp4;
                            let hpFiveCounter = hp5;
                            let hpSixCounter = hp6;

                            let roundOne =".round-one";
                            let roundTwo =".round-two";
                            let roundThree=".round-three";
                            let roundFour=".round-four";
                            let roundFive=".round-five";

                            let health1 = ".health-bar1";
                            let health2 = ".health-bar2";
                            let health3 = ".health-bar3";
                            let health4 = ".health-bar4";
                            let health5 = ".health-bar5";
                            let health6 = ".health-bar6";

                            let pokeStart1 = "#game-start-1";
                            let pokeStart2 = "#game-start-2";
                            let pokeStart3 = "#game-start-3";
                            let pokeStart4 = "#game-start-4";
                            let pokeStart5 = "#game-start-5";
                            let pokeStart6 = "#game-start-6";

                            let pokeOneClass = ".poke1";
                            let pokeTwoClass = ".poke2";
                            let pokeThreeClass = ".poke3";
                            let pokeFourClass = ".poke4";
                            let pokeFiveClass = ".poke5";
                            let pokeSixClass = ".poke6";


                            let buttonNext1 = '.button-fight-1';
                            let buttonNext2= '.next';
                            let buttonNext2none= '.next';
                            let buttonNext3= '.next3';
                            let buttonNext3none= '.next3';
                            let buttonNext4= '.next4';
                            let buttonNext5= '.next5';
                            let buttonNext6= '.next6';


                            


                            
                            function pokeCard1funcion(pokeCard1,firstHpCounter){
                                pokeCard1.forEach((e)=>{
                                           

                                    e.pokemonHp1 = firstHpCounter; 
                                                   
                                    
                                })
                            }
                            

                            function pokeCard2funcion(pokeCard2,secondHpCounter){
                                pokeCard2.forEach((e)=>{     

                                    e.pokemonHp2 = secondHpCounter;                  
                                    
                                })
                            }

                            function pokeCard3funcion(pokeCard2,secondHpCounter){
                                pokeCard2.forEach((e)=>{
                                         

                                    e.pokemonHp3 = secondHpCounter; 
                                                     
                                    
                                })
                            }

                            function pokeCard4funcion(pokeCard2,secondHpCounter){
                                pokeCard2.forEach((e)=>{
                                         

                                    e.pokemonHp4 = secondHpCounter; 
                                                     
                                    
                                })
                            }
                            function pokeCard5funcion(pokeCard2,secondHpCounter){
                                pokeCard2.forEach((e)=>{
                                       

                                    e.pokemonHp5 = secondHpCounter; 
                                                      
                                    
                                })
                            }
                            function pokeCard6funcion(pokeCard2,secondHpCounter){
                                pokeCard2.forEach((e)=>{
                                      

                                    e.pokemonHp6 = secondHpCounter; 
                                                     
                                    
                                })
                            }
                            
                            
                            fightPokeOne();

                            function fightPokeOne(){
                                
                                
                                
                                const fight = document.querySelector('.button-fight-1');
                                fight.addEventListener('click',()=>{
                                    document.querySelector('.button-fight-1').style.display="none";
                                    //1st fight
                                    showPokeOneVsPokeTwo(roundOne,pokeStart1,pokeStart2,health1,health2,hpOneCounter,hpTwoCounter,attack1,attack2,pokeOneClass,pokeTwoClass,1,2,buttonNext2,buttonNext1);
                                    


                                    const fight = document.querySelector('.next');
                                    fight.addEventListener('click',()=>{

                                        
                                        //hide round1
                                        const roundOne = document.querySelector('.round-one').style.display="none";
                                        //hide .next button
                                        document.querySelector('.next').style.display="none";
                                        //hide game start stage
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="none";
                                        //2nd fight
                                        const pokeCard1 = document.querySelectorAll('.poke1'); 
                                        
                                        showPokeOneVsPokeTwo(roundTwo,pokeStart1,pokeStart3,health1,health3,hpOneCounter,hpThreeCounter,attack1,attack3,pokeOneClass,pokeThreeClass,1,3,buttonNext3,buttonNext2);
                                        
                                        
                                    
                                        
                                    
                                    
                                       

                                    
                                    })
                                    
                                    

                                    

                                    const fight3 = document.querySelector('.next3');
                                    fight3.addEventListener('click',()=>{
                                        //hide round1
                                        document.querySelector('.round-one').style.display="none";
                                        document.querySelector('.round-two').style.display="none";
                                        document.querySelector('.round-three').style.display="none";
                                        document.querySelector('.round-four').style.display="none";
                                        document.querySelector('.round-five').style.display="none";
                                        //hide .next button
                                        document.querySelector('.next3').style.display="none";
                                        //hide game start stage
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="none";
                                        //2nd fight
                                        
                                        showPokeOneVsPokeTwo(roundThree,pokeStart1,pokeStart4,health1,health4,hpOneCounter,hpFourCounter,attack1,attack4,pokeOneClass,pokeFourClass,1,4,buttonNext4,buttonNext3);

                                    
                                    })

                                    const fight4 = document.querySelector('.next4');
                                    fight4.addEventListener('click',()=>{
                                        //hide round1
                                        document.querySelector('.round-one').style.display="none";
                                        document.querySelector('.round-two').style.display="none";
                                        document.querySelector('.round-three').style.display="none";
                                        document.querySelector('.round-four').style.display="none";
                                        document.querySelector('.round-five').style.display="none";
                                        //hide .next button
                                        document.querySelector('.next4').style.display="none";
                                        //hide game start stage
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="none";
                                        //2nd fight
                                        
                                        showPokeOneVsPokeTwo(roundFour,pokeStart1,pokeStart5,health1,health5,hpOneCounter,hpFiveCounter,attack1,attack5,pokeOneClass,pokeFiveClass,1,5,buttonNext5,buttonNext4);

                                    
                                    })
                                    const fight5 = document.querySelector('.next5');
                                    fight5.addEventListener('click',()=>{
                                        //hide round1
                                        document.querySelector('.round-one').style.display="none";
                                        document.querySelector('.round-two').style.display="none";
                                        document.querySelector('.round-three').style.display="none";
                                        document.querySelector('.round-four').style.display="none";
                                        document.querySelector('.round-five').style.display="none";
                                        //hide .next button
                                        document.querySelector('.next5').style.display="none";
                                        //hide game start stage
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="none";
                                        //2nd fight
                                        
                                        showPokeOneVsPokeTwo(roundFive,pokeStart1,pokeStart6,health1,health6,hpOneCounter,hpSixCounter,attack1,attack6,pokeOneClass,pokeSixClass,1,6,buttonNext6,buttonNext5);

                                    
                                    })
                                    
                                    
                                   
                                    
                                })

                            }
                           

                                //start of function showPokeOneVsPokeTwo ------

                                async function showPokeOneVsPokeTwo(round,poke1,poke2,health1,health2,firstHpCounter,secondHpCounter,attackPoke1,attackPoke2,pokeOneClass,pokeTwoClass,numberOfCard1,numberOfCard2,buttonNext,buttonNextNone){
                                        document.querySelector(`${buttonNextNone}`).style.display="none";
                                        const profile= document.querySelector('.profile-stage').style.display="none";
                                        let loading = document.querySelector('.loading-stage').style.display="flex";
                                        
                                        
                                        setTimeout(()=>{
                                            
                                            let gameStartStage= document.querySelector('.game-start-stage').style.display="flex"
                                            loading = document.querySelector('.loading-stage').style.display="none";
                                            const gameStart1= document.querySelector(`${poke1}`).style.display="block";
                                            const gameStart2= document.querySelector(`${poke2}`).style.display="block";
                                            const roundOne = document.querySelector(`${round}`).style.display="block";
                                            const healthBar= document.querySelector('.health-bar-container').style.display="none";
                                        },1500);
                                        await sleep (1500);

                                        setTimeout(()=>{
                                            document.querySelector(`${round}`).style.display="none";
                                            document.querySelector('.health-bar-container').style.display="block";
                                            document.querySelector(`${health1}`).style.display="block";
                                            document.querySelector(`${health2}`).style.display="block";
                                        },3000);
                                        await sleep (1500);

                                        //I call the function of poke battle here

                                        let interval = setInterval (fight1,2000);
                                    
                                        // poke battle logic here
                                        async function fight1(){
                                            console.log ("before the battle hp poke 1: " +`${firstHpCounter}`);
                                            console.log ("before the battle hp poke 2: " +`${secondHpCounter}`);
                                            
                                            firstHpCounter = firstHpCounter - (attackPoke2);
                                            secondHpCounter = secondHpCounter - (attackPoke1);
                                            let totalDamageToPoke1 = 0;
                                            totalDamageToPoke1 += attackPoke2;

                                            
                                            //start testing
                                            /*

                                            function queryPokeCardX(pokeCard){
                                                const pokeCard = document.querySelectorAll(`${pokeOneClass}`); 

                                            }
                                            */
                                            
                                            //end testing



                                           
                                            
                                            // I pass the new value to poke hp counter 1 to innerHtml 
                                            const pokeCard1 = document.querySelectorAll(`${pokeOneClass}`);
                                            const pokeCard2 = document.querySelectorAll(`${pokeTwoClass}`);
                                            /*                    
                                        
                                            pokeCard1.forEach((e)=>{     

                                                e.pokemonHp1 = firstHpCounter;                  
                                                
                                            })
                                            */
                                           if(numberOfCard1 === 1){
                                                pokeCard1funcion(pokeCard1,firstHpCounter);
                                           }else if(numberOfCard1 === 2){
                                                pokeCard2funcion(pokeCard1,firstHpCounter);

                                           }else if(numberOfCard1 === 3){
                                                pokeCard3funcion(pokeCard1,firstHpCounter);
                                           }else if(numberOfCard1 === 4){
                                               pokeCard4funcion(pokeCard1,firstHpCounter);
                                           }else if(numberOfCard1 === 5){
                                            pokeCard5funcion(pokeCard1,firstHpCounter);
                                            }else if(numberOfCard1 === 6){
                                                pokeCard6funcion(pokeCard1,firstHpCounter);
                                            }
                                           

                                            
                                            
                                            
                                            /*                    
                                        
                                            pokeCard2.forEach((e)=>{     

                                                e.pokemonHp2 = secondHpCounter;                  
                                                
                                            })
                                            */
                                           
                                            if(numberOfCard2 === 1){
                                                pokeCard1funcion(pokeCard2,secondHpCounter);
                                            }else if(numberOfCard2 === 2){
                                                pokeCard2funcion(pokeCard2,secondHpCounter);

                                            }else if(numberOfCard2 === 3){
                                                pokeCard3funcion(pokeCard2,secondHpCounter);
                                           }else if(numberOfCard2 === 4){
                                            pokeCard4funcion(pokeCard2,secondHpCounter);
                                            }else if(numberOfCard2 === 5){
                                                pokeCard5funcion(pokeCard2,secondHpCounter);
                                            }else if(numberOfCard2 === 6){
                                                pokeCard6funcion(pokeCard2,secondHpCounter);
                                           }
                                            
                                            
                                            if(firstHpCounter <= 0 ){
                                                
                                                
                                                clearInterval(interval);
                                                console.log( "pokemon 1 lost");
                                                console.log("pokecounter2 before adding: "+ pokeCounter2);
                                                pokeCounter2 ++;
                                                console.log("pokecounter2 after adding: "+ pokeCounter2);

                                                const pokeCounterTwo = document.querySelectorAll(`${round}`);                    
                                        
                                                    pokeCounterTwo.forEach((e)=>{     

                                                        e.pokemonCounter2 = pokeCounter2;                  
                                                
                                                })

                                                await sleep (5000);

                                                console.log("pokemon 1 after losing" + pokeCounter2);
                                                document.querySelector(`${round}`).style.display="block";
                                                document.querySelector(`${buttonNext}`).style.display="flex";
                                                document.querySelector('.health-bar-container').style.display="none";
                                                document.querySelector(`${health1}`).style.display="none";
                                                document.querySelector(`${health2}`).style.display="none";
                                                console.log("hpOneCounter antes de total damage: " + firstHpCounter);
                                                firstHpCounter+= totalDamageToPoke1;
                                                console.log("hpOneCounter despues de total damage: " + firstHpCounter);
                                                // hide starts from previous fight (I gotta fix it later)
                                                document.querySelector(`${poke1}`).style.display="none";
                                                document.querySelector(`${poke2}`).style.display="none";

                                                if(numberOfCard1 === 1){
                                                    pokeCard1funcion(pokeCard1,firstHpCounter);
                                               }else if(numberOfCard1 === 2){
                                                    pokeCard2funcion(pokeCard1,firstHpCounter);
    
                                               }else if(numberOfCard1 === 3){
                                                    pokeCard3funcion(pokeCard1,firstHpCounter);
                                               }else if(numberOfCard1 === 4){
                                                   pokeCard4funcion(pokeCard1,firstHpCounter);
                                               }else if(numberOfCard1 === 5){
                                                pokeCard5funcion(pokeCard1,firstHpCounter);
                                                }else if(numberOfCard1 === 6){
                                                    pokeCard6funcion(pokeCard1,firstHpCounter);
                                                }
                                               
                                                
                                                
                                                

                                                
                                                
                                                



                                            } else if (secondHpCounter <= 0){
                                                
                                                clearInterval(interval);
                                                
                                                console.log("pokecounter1 before adding: "+ pokeCounter1);
                                                pokeCounter1 ++;
                                                console.log("pokecounter1 before adding: "+ pokeCounter1);

                                                const pokeCounterOne = document.querySelectorAll(`${round}`);                    
                                        
                                                    pokeCounterOne.forEach((e)=>{     

                                                        e.pokemonCounter1 = pokeCounter1;                  
                                                
                                                });
                                                await sleep (5000);

                                                console.log("pokemon 1 after winning" + pokeCounter1);
                                                document.querySelector(`${round}`).style.display="block";
                                                document.querySelector(`${buttonNext}`).style.display="flex";
                                                document.querySelector('.health-bar-container').style.display="none";
                                                document.querySelector(`${health1}`).style.display="none";
                                                document.querySelector(`${health2}`).style.display="none";
                                                console.log("hpOneCounter antes de total damage: " + firstHpCounter);
                                                firstHpCounter+= totalDamageToPoke1;
                                                console.log("hpOneCounter despues de total damage: " + firstHpCounter);
                                                 // hide starts from previous fight (I gotta fix it later)
                                                 document.querySelector(`${poke1}`).style.display="none";
                                                 document.querySelector(`${poke2}`).style.display="none";
                                                
                                                 if(numberOfCard1 === 1){
                                                    pokeCard1funcion(pokeCard1,firstHpCounter);
                                                    }else if(numberOfCard1 === 2){
                                                        pokeCard2funcion(pokeCard2,secondHpCounter);
    
                                                    }else if(numberOfCard1 === 3){
                                                        pokeCard3funcion(pokeCard2,secondHpCounter);
                                                    }

                                                    if(numberOfCard2 === 1){
                                                        pokeCard1funcion(pokeCard1,firstHpCounter);
                                                    }else if(numberOfCard2 === 2){
                                                        pokeCard2funcion(pokeCard2,secondHpCounter);
        
                                                    }else if(numberOfCard2 === 3){
                                                        pokeCard3funcion(pokeCard2,secondHpCounter);
                                                   }
                                               
                                                

                                                
                                                

                                            }
                                            
                                        }

                                        
                                        
                                        
                                    
                                } 
                                //end of function showPokeOneVsPokeTwo ------ 

                                //start of function showPokeOneVsPokeThree----
                                /*

                                async function showPokeOneVsPokeThree(){
                                    
                                    const profile= document.querySelector('.profile-stage').style.display="none";
                                    let loading = document.querySelector('.loading-stage').style.display="flex";
                                   
                                    
                                    setTimeout(()=>{
                                        
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="flex"
                                        loading = document.querySelector('.loading-stage').style.display="none";
                                        const gameStart1= document.querySelector('#game-start-1').style.display="block";
                                        const gameStart2= document.querySelector('#game-start-2').style.display="none";
                                        const gameStart3= document.querySelector('#game-start-3').style.display="block";
                                        const gameStart4= document.querySelector('#game-start-4').style.display="none";
                                        const roundOne = document.querySelector('.round-one').style.display="none";
                                        const roundTwo = document.querySelector('.round-two').style.display="block";
                                        const roundThree = document.querySelector('.round-three').style.display="none";
                                        const healthBar= document.querySelector('.health-bar-container').style.display="none";
                                        document.querySelector('.health-bar1').style.display="none";
                                        document.querySelector('.health-bar2').style.display="none";
                                        document.querySelector('.health-bar3').style.display="none";
                                        document.querySelector('.health-bar4').style.display="none";
                                        document.querySelector('.health-bar5').style.display="none";
                                        document.querySelector('.health-bar6').style.display="none";

                                    },1500);
                                    await sleep (1500);

                                    setTimeout(()=>{
                                        document.querySelector('.round-two').style.display="none";
                                        document.querySelector('.health-bar-container').style.display="block";
                                        
                                        document.querySelector('.health-bar1').style.display="block";
                                        document.querySelector('.health-bar3').style.display="block";
                                    },3000);
                                    await sleep (3000);

                                    //I call the function of poke battle here

                                    let interval = setInterval (fight2,4000);
                                
                                    // poke battle logic here
                                    async function fight2(){
                                        console.log ("before the battle hp: " +hpOneCounter);
                                        console.log ("before the battle hp: " +hpThreeCounter);
                                        
                                        hpOneCounter = hpOneCounter - attack3;
                                        hpThreeCounter = hpFourCounter - attack1;
                                        let totalDamageToPoke1 = 0;
                                        totalDamageToPoke1 += attack3;

                                        
                                        
                                        // I pass the new value to poke hp counter 1 to innerHtml 
                                        
                                        const pokeCard1 = document.querySelectorAll('.poke1');                    
                                    
                                        pokeCard1.forEach((e)=>{     

                                            e.pokemonHp1 = hpOneCounter;                  
                                            
                                        })
                                        
                                        
                                        
                                        const pokeCard3 = document.querySelectorAll('.poke3');                    
                                    
                                        pokeCard3.forEach((e)=>{     

                                            e.pokemonHp3 = hpThreeCounter;                  
                                            
                                        })
                                      
                                        
                                        console.log ("hp pokemon 1: " + hpOneCounter);
                                        console.log("hp pokemon 2: " + hpThreeCounter);
                                        if(hpOneCounter <= 0 ){
                                            
                                            
                                            clearInterval(interval);
                                            console.log( "pokemon 1 lost");
                                            pokeCounter2 ++;

                                            const pokeCounterTwo = document.querySelectorAll('round-one');                    
                                    
                                                pokeCounterTwo.forEach((e)=>{     

                                                    e.pokemonCounter2 = pokeCounter2;                  
                                            
                                            })
                                            await sleep (5000);

                                            console.log("pokemon 1 after losing" + pokeCounter2);
                                            document.querySelector('.round-two').style.display="block";
                                            document.querySelector('.next3').style.display="flex";
                                            document.querySelector('.health-bar-container').style.display="none";
                                            document.querySelector('.health-bar1').style.display="none";
                                            document.querySelector('.health-bar3').style.display="none";
                                            console.log("hpOneCounter antes de total damage: " + hpOneCounter);
                                            hpOneCounter+= totalDamageToPoke1;
                                            console.log("hpOneCounter despues de total damage: " + hpOneCounter);

                                            
                                            
                                            



                                        } else if (hpThreeCounter <= 0){
                                            
                                            clearInterval(interval);
                                            console.log("pokemon 1 before winning" + pokeCounter1);
                                            pokeCounter1 ++;

                                            const pokeCounterOne = document.querySelectorAll('round-one');                    
                                    
                                                pokeCounterOne.forEach((e)=>{     

                                                    e.pokemonCounter1 = pokeCounter1;                  
                                            
                                            })
                                            await sleep (5000);

                                            console.log("pokemon 1 after winning" + pokeCounter1);
                                            document.querySelector('.round-two').style.display="block";
                                            document.querySelector('.next3').style.display="flex";
                                            document.querySelector('.health-bar-container').style.display="none";
                                            console.log("hpOneCounter antes de total damage: " + hpOneCounter);
                                            hpOneCounter+= totalDamageToPoke1;
                                            console.log("hpOneCounter despues de total damage: " + hpOneCounter);
                                           
                                            

                                            
                                            

                                        }
                                        
                                    }

                                    
                                    
                                    
                                
                                }  */

                                //end of function showPokeOneVsPokeThree

                                //start of function showPokeOneVsPokeFour
                                /*
                                function showPokeOneVsPokeFour(){
                                    
                                    const profile= document.querySelector('.profile-stage').style.display="none";
                                    let loading = document.querySelector('.loading-stage').style.display="flex";
                                    
                                    
                                    setTimeout(()=>{
                                        
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="flex"
                                        loading = document.querySelector('.loading-stage').style.display="none";
                                        const gameStart1= document.querySelector('#game-start-1').style.display="block";
                                        const gameStart2= document.querySelector('#game-start-2').style.display="none";
                                        const gameStart3= document.querySelector('#game-start-3').style.display="none";
                                        const gameStart4= document.querySelector('#game-start-4').style.display="block";
                                        const roundOne = document.querySelector('.round-one').style.display="none";
                                        const roundTwo = document.querySelector('.round-two').style.display="none";
                                        const roundThree = document.querySelector('.round-three').style.display="block";
                                        const healthBar= document.querySelector('.health-bar-container').style.display="none";
                                        document.querySelector('.health-bar1').style.display="none";
                                        document.querySelector('.health-bar2').style.display="none";
                                        document.querySelector('.health-bar3').style.display="none";
                                        document.querySelector('.health-bar4').style.display="none";
                                        document.querySelector('.health-bar5').style.display="none";
                                        document.querySelector('.health-bar6').style.display="none";

                                    },1500);

                                    setTimeout(()=>{
                                        document.querySelector('.round-three').style.display="none";
                                        document.querySelector('.health-bar-container').style.display="block";
                                        
                                        document.querySelector('.health-bar1').style.display="block";
                                        document.querySelector('.health-bar4').style.display="block";
                                    },3000);

                                    //I call the function of poke battle here

                                    let interval = setInterval (fight3,4000);
                                
                                    // poke battle logic here
                                    async function fight3(){
                                        console.log ("before the battle hp: " +hpOneCounter);
                                        console.log ("before the battle hp: " +hpFourCounter);
                                        
                                        hpOneCounter = hpOneCounter - attack4;
                                        hpFourCounter = hpFourCounter - attack1;
                                        let totalDamageToPoke1 = 0;
                                        totalDamageToPoke1 += attack4;

                                        
                                        
                                        // I pass the new value to poke hp counter 1 to innerHtml 
                                        const pokeCard1 = document.querySelectorAll('.poke1');                    
                                    
                                        pokeCard1.forEach((e)=>{     

                                            e.pokemonHp1 = hpOneCounter;                  
                                            
                                        })
                                        
                                        
                                        
                                        const pokeCard4 = document.querySelectorAll('.poke4');                    
                                    
                                        pokeCard4.forEach((e)=>{     

                                            e.pokemonHp4 = hpFourCounter;                  
                                            
                                        })
                                        
                                        console.log ("hp pokemon 1: " + hpOneCounter);
                                        console.log("hp pokemon 2: " + hpFourCounter);
                                        if(hpOneCounter <= 0 ){
                                            
                                            
                                            clearInterval(interval);
                                            console.log( "pokemon 1 lost");
                                            pokeCounter2 ++;

                                            const pokeCounterTwo = document.querySelectorAll('round-one');                    
                                    
                                                pokeCounterTwo.forEach((e)=>{     

                                                    e.pokemonCounter2 = pokeCounter2;                  
                                            
                                            })
                                            await sleep (5000);

                                            console.log("pokemon 1 after losing" + pokeCounter2);
                                            document.querySelector('.round-three').style.display="block";
                                            //document.querySelector('.next4').style.display="flex";
                                            document.querySelector('.health-bar-container').style.display="none";
                                            document.querySelector('.health-bar1').style.display="none";
                                            document.querySelector('.health-bar4').style.display="none";
                                            console.log("hpOneCounter antes de total damage: " + hpOneCounter);
                                            hpOneCounter+= totalDamageToPoke1;
                                            console.log("hpOneCounter despues de total damage: " + hpOneCounter);

                                            
                                            
                                            



                                        } else if (hpTwoCounter <= 0){
                                            
                                            clearInterval(interval);
                                            console.log("pokemon 1 before winning" + pokeCounter1);
                                            pokeCounter1 ++;

                                            const pokeCounterOne = document.querySelectorAll('round-one');                    
                                    
                                                pokeCounterOne.forEach((e)=>{     

                                                    e.pokemonCounter1 = pokeCounter1;                  
                                            
                                            })
                                            await sleep (5000);

                                            console.log("pokemon 1 after winning" + pokeCounter1);
                                            document.querySelector('.round-one').style.display="block";
                                            document.querySelector('.next').style.display="flex";
                                            document.querySelector('.health-bar-container').style.display="none";
                                            console.log("hpOneCounter antes de total damage: " + hpOneCounter);
                                            hpOneCounter+= totalDamageToPoke1;
                                            console.log("hpOneCounter despues de total damage: " + hpOneCounter);
                                           
                                            

                                            
                                            

                                        }
                                        
                                    }

                                    
                                    
                                    
                                
                                } */
                                //end of function showPokeOneVsPokeFour


                            // end of : button fight in profile stage---

                            



                             // Pokemon 1 logic end ------------------------------------------------------------------------






                            // I can write anything I want in here and it will work I guess XD  end



                        })

                        //in here poke 6 -- ends




                    })


                    // in here poke 5 -- ends






                })



                // in here poke 4 -- ends





            })


            //in here poke 3 -- end

            
    
            


            

        })

// End of testing nested fetch



})





// start of pokefight -- first attempt (this is definitely not the way to do it.. until then...)
//Callback Hell  XD
/*
pokeFight();
function pokeFight(){
    pokemon1.getData().then(pokeData =>{
        let hp1= pokeData.base.HP;
        let attack1 = pokeData.base.Attack;
        let defense1= pokeData.base.Defense;
                
        pokemon2.getData().then(pokeData =>{
            let hp2 = pokeData.base.HP;
            
            pokemon3.getData().then(pokeData =>{
                let hp3 = pokeData.base.HP;
                
                pokemon4.getData().then(pokeData =>{
                    let hp4 = pokeData.base.HP;
                    
                    pokemon5.getData().then(pokeData =>{
                        let hp5 = pokeData.base.HP;
                        
                        pokemon6.getData().then(pokeData =>{
                            let hp6 = pokeData.base.HP;
                            console.log(hp1);
                            console.log("ataque: "+ attack1);
                            console.log("defenza: " +defense1);
                            console.log(hp2);
                            console.log(hp3);
                            console.log(hp4);
                            console.log(hp5);
                            console.log(hp6);
                            
                            while(hp1 >0 && hp2>0){                         
                            hp1 = parseInt(hp1) - parseInt(hp2);
                            console.log(hp1);
                            
                            }
                            
                                                                                                                                                                       
                        })
                    
                    })
                
                })
            
            })
        })
        

    })
}

*/
