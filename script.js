
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
     
    let pokeRound=1;
    
    

    pokeCard1.forEach((e)=>{
        
        e.pokemonName= pokeData.name.english;// does it mean that I can access the function get pokemonName? from outside of the component?
        e.pokemonImage= pokeData.thumbnail;
        e.pokemonId= "#"+ pokeData.id;
        e.pokemonType= findTheType();
        e.pokemonBackground= findTheBackground();
        e.pokemonHp1 = hp1;
        e.pokemonCounter1 = pokeCounter1;
        e.pokemonCounter2 = pokeCounter2;
        e.pokeRound = pokeRound;
       
        
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
        setTimeout(function(){
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
        },200)
       
        
               
        
        
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
                            let roundOne2 = ".round-one-2";
                            let roundOne3 = ".round-one-3";
                            let roundOne4 = ".round-one-4";
                            let roundOne5 = ".round-one-5";
                            let roundOne31 = ".round-one-3-1";
                            let roundOne32 = ".round-one-3-2";
                            let roundOne33 = ".round-one-3-3";
                            let roundOne34 = ".round-one-3-4";
                            let roundOne35 = ".round-one-3-5";
                            let roundOne41 =".round-one-4-1";
                            let roundOne42 =".round-one-4-2";
                            let roundOne43 =".round-one-4-3";
                            let roundOne44 =".round-one-4-4";
                            let roundOne45 =".round-one-4-5";
                            let roundOne51 =".round-one-5-1";
                            let roundOne52 =".round-one-5-2";
                            let roundOne53 =".round-one-5-3";
                            let roundOne54 =".round-one-5-4";
                            let roundOne55 =".round-one-5-5";
                            let roundOne61 =".round-one-6-1";
                            let roundOne62 =".round-one-6-2";
                            let roundOne63 =".round-one-6-3";
                            let roundOne64 =".round-one-6-4";
                            let roundOne65 =".round-one-6-5";
                            

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
                            let buttonNext1_2 = '.button-fight-2';
                            let buttonNext1_3 = '.button-fight-3';
                            let buttonNext1_4 = '.button-fight-4';
                            let buttonNext1_5 = '.button-fight-5';
                            let buttonNext1_6 = '.button-fight-6';
                            let buttonNext2= '.next';
                            let buttonNext2none= '.next';
                            let buttonNext3= '.next3';
                            let buttonNext3none= '.next3';
                            let buttonNext4= '.next4';
                            let buttonNext5= '.next5';
                            let buttonNext6= '.next6';

                            let winLose1 = '.win-lose1';
                            let winLose2 = '.win-lose2';
                            let winLose3 = '.win-lose3';
                            let winLose4 = '.win-lose4';
                            let winLose5 = '.win-lose5';
                            let winLose6 = '.win-lose6';


                            


                            
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
                            fightPokeTwo();
                            fightPokeThree();
                            fightPokeFour();
                            fightPokeFive();
                            fightPokeSix()

                            



                            function fightPokeOne(){
                                
                                
                                
                                const fight = document.querySelector('.button-fight-1');
                                fight.addEventListener('click',()=>{
                                    document.querySelector('.button-fight-1').style.display="none";
                                    //1st fight
                                    showPokeOneVsPokeTwo(roundOne,pokeStart1,pokeStart2,health1,health2,hpOneCounter,hpTwoCounter,attack1,attack2,pokeOneClass,pokeTwoClass,1,2,buttonNext2,buttonNext1,winLose1);
                                    


                                    const fight = document.querySelector('.next');
                                    fight.addEventListener('click',()=>{

                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
                                        //hide round1
                                        const roundOne = document.querySelector('.round-one').style.display="none";
                                        //hide .next button
                                        document.querySelector('.next').style.display="none";
                                        //hide game start stage
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="none";
                                        //2nd fight
                                        const pokeCard1 = document.querySelectorAll('.poke1'); 
                                        
                                        showPokeOneVsPokeTwo(roundTwo,pokeStart1,pokeStart3,health1,health3,hpOneCounter,hpThreeCounter,attack1,attack3,pokeOneClass,pokeThreeClass,1,3,buttonNext3,buttonNext2,winLose1);
                                        
                                        
                                    
                                        
                                    
                                    
                                       

                                    
                                    })
                                    
                                    

                                    

                                    const fight3 = document.querySelector('.next3');
                                    fight3.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundThree,pokeStart1,pokeStart4,health1,health4,hpOneCounter,hpFourCounter,attack1,attack4,pokeOneClass,pokeFourClass,1,4,buttonNext4,buttonNext3,winLose1);

                                    
                                    })

                                    const fight4 = document.querySelector('.next4');
                                    fight4.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundFour,pokeStart1,pokeStart5,health1,health5,hpOneCounter,hpFiveCounter,attack1,attack5,pokeOneClass,pokeFiveClass,1,5,buttonNext5,buttonNext4,winLose1);

                                    
                                    })
                                    const fight5 = document.querySelector('.next5');
                                    fight5.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundFive,pokeStart1,pokeStart6,health1,health6,hpOneCounter,hpSixCounter,attack1,attack6,pokeOneClass,pokeSixClass,1,6,buttonNext6,buttonNext5,winLose1);

                                    
                                    })
                                    
                                    
                                   
                                    
                                })

                            }
                            

                            function fightPokeTwo(){
                                const fight22 = document.querySelector('.button-fight-2');
                                fight22.addEventListener('click',()=>{
                                    document.querySelector('.button-fight-2').style.display="none";
                                    showPokeOneVsPokeTwo(roundOne,pokeStart2,pokeStart1,health2,health1,hpTwoCounter,hpOneCounter,attack2,attack1,pokeTwoClass,pokeOneClass,2,1,buttonNext2,buttonNext1_2,winLose2);
                                
                                
                                    const fight2 = document.querySelector('.next');
                                    fight2.addEventListener('click',()=>{
    
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose2').style.display="none";
                                        //hide round1
                                        const roundOne = document.querySelector('.round-one').style.display="none";
                                        //hide .next button
                                        document.querySelector('.next').style.display="none";
                                        //hide game start stage
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="none";
                                        
                                        
                                        showPokeOneVsPokeTwo(roundOne2,pokeStart2,pokeStart3,health2,health3,hpTwoCounter,hpThreeCounter,attack2,attack3,pokeTwoClass,pokeThreeClass,2,3,buttonNext3,buttonNext2,winLose2);
                                    });
    
                                    const fight3 = document.querySelector('.next3');
                                        fight3.addEventListener('click',()=>{
                                            //hide winLose
                                            const winLoseHide = document.querySelector('.win-lose2').style.display="none";
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
                                            
                                            showPokeOneVsPokeTwo(roundOne3,pokeStart2,pokeStart4,health2,health4,hpTwoCounter,hpFourCounter,attack2,attack4,pokeTwoClass,pokeFourClass,2,4,buttonNext4,buttonNext3,winLose2);
    
                                        
                                        })
    
                                        const fight4 = document.querySelector('.next4');
                                        fight4.addEventListener('click',()=>{
                                            //hide winLose
                                            const winLoseHide = document.querySelector('.win-lose2').style.display="none";
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
                                            
                                            showPokeOneVsPokeTwo(roundOne4,pokeStart2,pokeStart5,health2,health5,hpTwoCounter,hpFiveCounter,attack2,attack5,pokeTwoClass,pokeFiveClass,2,5,buttonNext5,buttonNext4,winLose2);
    
                                        
                                        })
                                        const fight5 = document.querySelector('.next5');
                                        fight5.addEventListener('click',()=>{
                                            //hide winLose
                                            const winLoseHide = document.querySelector('.win-lose2').style.display="none";
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
                                            
                                            showPokeOneVsPokeTwo(roundOne5,pokeStart2,pokeStart6,health2,health6,hpTwoCounter,hpSixCounter,attack2,attack6,pokeTwoClass,pokeSixClass,2,6,buttonNext6,buttonNext5,winLose2);
    
                                        
                                        })
    
                                
                                
                                })

                               
                            }

                            function fightPokeThree(){
                                
                                
                                
                                const fight = document.querySelector('.button-fight-3');
                                fight.addEventListener('click',()=>{
                                    document.querySelector('.button-fight-3').style.display="none";
                                    //1st fight
                                    showPokeOneVsPokeTwo(roundOne31,pokeStart3,pokeStart1,health3,health1,hpThreeCounter,hpOneCounter,attack3,attack1,pokeThreeClass,pokeOneClass,3,1,buttonNext2,buttonNext1_2,winLose3);
                                    


                                    const fight = document.querySelector('.next');
                                    fight.addEventListener('click',()=>{

                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
                                        //hide round1
                                        const roundOne = document.querySelector('.round-one').style.display="none";
                                        //hide .next button
                                        document.querySelector('.next').style.display="none";
                                        //hide game start stage
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="none";
                                        //2nd fight
                                        const pokeCard1 = document.querySelectorAll('.poke1'); 
                                        
                                        showPokeOneVsPokeTwo(roundOne32,pokeStart3,pokeStart2,health3,health2,hpThreeCounter,hpTwoCounter,attack3,attack2,pokeThreeClass,pokeTwoClass,3,2,buttonNext3,buttonNext2,winLose3);
                   
                                    })
                                    
                                    

                                    

                                    const fight3 = document.querySelector('.next3');
                                    fight3.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne33,pokeStart3,pokeStart4,health3,health4,hpThreeCounter,hpFourCounter,attack3,attack4,pokeThreeClass,pokeFourClass,3,4,buttonNext4,buttonNext3,winLose3);

                                    
                                    })

                                    const fight4 = document.querySelector('.next4');
                                    fight4.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne34,pokeStart3,pokeStart5,health3,health5,hpThreeCounter,hpFiveCounter,attack3,attack5,pokeThreeClass,pokeFiveClass,3,5,buttonNext5,buttonNext4,winLose3);

                                    
                                    })
                                    const fight5 = document.querySelector('.next5');
                                    fight5.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne35,pokeStart3,pokeStart6,health3,health6,hpThreeCounter,hpSixCounter,attack3,attack6,pokeThreeClass,pokeSixClass,3,6,buttonNext6,buttonNext5,winLose3);

                                    
                                    })
                                    
                                    
                                   
                                    
                                })

                            }

                            function fightPokeFour(){
                                
                                
                                
                                const fight = document.querySelector('.button-fight-4');
                                fight.addEventListener('click',()=>{
                                    document.querySelector('.button-fight-4').style.display="none";
                                    //1st fight
                                    showPokeOneVsPokeTwo(roundOne41,pokeStart4,pokeStart1,health4,health1,hpFourCounter,hpOneCounter,attack4,attack1,pokeFourClass,pokeOneClass,4,1,buttonNext2,buttonNext1,winLose4);
                                    


                                    const fight = document.querySelector('.next');
                                    fight.addEventListener('click',()=>{

                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
                                        //hide round1
                                        const roundOne = document.querySelector('.round-one').style.display="none";
                                        //hide .next button
                                        document.querySelector('.next').style.display="none";
                                        //hide game start stage
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="none";
                                        //2nd fight
                                        const pokeCard1 = document.querySelectorAll('.poke1'); 
                                        
                                        showPokeOneVsPokeTwo(roundOne42,pokeStart4,pokeStart2,health4,health2,hpFourCounter,hpTwoCounter,attack4,attack2,pokeFourClass,pokeTwoClass,4,2,buttonNext3,buttonNext2,winLose4);
                                        
                                                                         
                                    
                                    })
                                    
                                    

                                    

                                    const fight3 = document.querySelector('.next3');
                                    fight3.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne43,pokeStart4,pokeStart3,health4,health3,hpFourCounter,hpThreeCounter,attack4,attack3,pokeFourClass,pokeThreeClass,4,3,buttonNext4,buttonNext3,winLose4);

                                    
                                    })

                                    const fight4 = document.querySelector('.next4');
                                    fight4.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne44,pokeStart4,pokeStart5,health4,health5,hpFourCounter,hpFiveCounter,attack4,attack5,pokeFourClass,pokeFiveClass,4,5,buttonNext5,buttonNext4,winLose4);

                                    
                                    })
                                    const fight5 = document.querySelector('.next5');
                                    fight5.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne45,pokeStart4,pokeStart6,health4,health6,hpFourCounter,hpSixCounter,attack4,attack6,pokeFourClass,pokeSixClass,4,6,buttonNext6,buttonNext5,winLose4);

                                    
                                    })
                                    
                                    
                                   
                                    
                                })

                            }


                            function fightPokeFive(){
                                
                                
                                
                                const fight = document.querySelector('.button-fight-5');
                                fight.addEventListener('click',()=>{
                                    document.querySelector('.button-fight-5').style.display="none";
                                    //1st fight
                                    showPokeOneVsPokeTwo(roundOne51,pokeStart5,pokeStart1,health5,health1,hpFiveCounter,hpOneCounter,attack5,attack1,pokeFiveClass,pokeOneClass,5,1,buttonNext2,buttonNext1,winLose5);
                                    


                                    const fight = document.querySelector('.next');
                                    fight.addEventListener('click',()=>{

                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
                                        //hide round1
                                        const roundOne = document.querySelector('.round-one').style.display="none";
                                        //hide .next button
                                        document.querySelector('.next').style.display="none";
                                        //hide game start stage
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="none";
                                        //2nd fight
                                        const pokeCard1 = document.querySelectorAll('.poke1'); 
                                        
                                        showPokeOneVsPokeTwo(roundOne52,pokeStart5,pokeStart2,health5,health2,hpFiveCounter,hpTwoCounter,attack5,attack2,pokeFiveClass,pokeTwoClass,5,1,buttonNext3,buttonNext2,winLose5);
                                      
                                    
                                    })
                                    

                                    const fight3 = document.querySelector('.next3');
                                    fight3.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne53,pokeStart5,pokeStart3,health5,health3,hpFiveCounter,hpThreeCounter,attack5,attack3,pokeFiveClass,pokeThreeClass,5,3,buttonNext4,buttonNext3,winLose5);

                                    
                                    })

                                    const fight4 = document.querySelector('.next4');
                                    fight4.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne54,pokeStart5,pokeStart4,health5,health4,hpFiveCounter,hpFourCounter,attack5,attack4,pokeFiveClass,pokeFourClass,5,4,buttonNext5,buttonNext4,winLose5);

                                    
                                    })
                                    const fight5 = document.querySelector('.next5');
                                    fight5.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne55,pokeStart5,pokeStart6,health5,health6,hpFiveCounter,hpSixCounter,attack5,attack6,pokeFiveClass,pokeSixClass,5,6,buttonNext6,buttonNext5,winLose5);

                                    
                                    })
                                    
                                    
                                   
                                    
                                })

                            }

                            function fightPokeSix(){
                                
                                
                                
                                const fight = document.querySelector('.button-fight-6');
                                fight.addEventListener('click',()=>{
                                    document.querySelector('.button-fight-6').style.display="none";
                                    //1st fight
                                    showPokeOneVsPokeTwo(roundOne61,pokeStart6,pokeStart1,health6,health1,hpSixCounter,hpOneCounter,attack6,attack1,pokeSixClass,pokeOneClass,6,1,buttonNext2,buttonNext1,winLose6);
                                    


                                    const fight = document.querySelector('.next');
                                    fight.addEventListener('click',()=>{

                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
                                        //hide round1
                                        const roundOne = document.querySelector('.round-one').style.display="none";
                                        //hide .next button
                                        document.querySelector('.next').style.display="none";
                                        //hide game start stage
                                        let gameStartStage= document.querySelector('.game-start-stage').style.display="none";
                                        //2nd fight
                                        const pokeCard1 = document.querySelectorAll('.poke1'); 
                                        
                                        showPokeOneVsPokeTwo(roundOne62,pokeStart6,pokeStart2,health6,health2,hpSixCounter,hpTwoCounter,attack6,attack2,pokeSixClass,pokeTwoClass,6,2,buttonNext3,buttonNext2,winLose6);
                                     
                                    
                                    })
                                    
                               
                                    const fight3 = document.querySelector('.next3');
                                    fight3.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne63,pokeStart6,pokeStart3,health6,health3,hpSixCounter,hpThreeCounter,attack6,attack3,pokeSixClass,pokeThreeClass,6,3,buttonNext4,buttonNext3,winLose6);

                                    
                                    })

                                    const fight4 = document.querySelector('.next4');
                                    fight4.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne64,pokeStart6,pokeStart4,health6,health4,hpSixCounter,hpFourCounter,attack6,attack4,pokeSixClass,pokeFourClass,6,4,buttonNext5,buttonNext4,winLose6);

                                    
                                    })
                                    const fight5 = document.querySelector('.next5');
                                    fight5.addEventListener('click',()=>{
                                        //hide winLose
                                        const winLoseHide = document.querySelector('.win-lose1').style.display="none";
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
                                        
                                        showPokeOneVsPokeTwo(roundOne65,pokeStart6,pokeStart5,health6,health5,hpSixCounter,hpFiveCounter,attack6,attack5,pokeSixClass,pokeFiveClass,6,5,buttonNext6,buttonNext5,winLose6);

                                    
                                    })
                                    
                                    
                                   
                                    
                                })

                            }


                           

                                //start of function showPokeOneVsPokeTwo ------

                                async function showPokeOneVsPokeTwo(round,poke1,poke2,health1,health2,firstHpCounter,secondHpCounter,attackPoke1,attackPoke2,pokeOneClass,pokeTwoClass,numberOfCard1,numberOfCard2,buttonNext,buttonNextNone,winLose){
                                        
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
                                                console.log("pokeround before "+ pokeRound);
                                                pokeRound++;
                                                console.log("pokeround after "+ pokeRound);
                                                console.log( "pokemon 1 lost");
                                                console.log("pokecounter2 before adding: "+ pokeCounter2);
                                                pokeCounter2 ++;
                                                console.log("pokecounter2 after adding: "+ pokeCounter2);

                                                const pokeCounterTwo = document.querySelectorAll(`${round}`);                    
                                        
                                                    pokeCounterTwo.forEach((e)=>{     

                                                        e.pokemonCounter2 = pokeCounter2;
                                                                          
                                                
                                                    })
                                                
                                                const winLoseCounterTwo = document.querySelectorAll(`${winLose}`);                    
                                        
                                                    winLoseCounterTwo.forEach((e)=>{     

                                                        e.pokemonCounter2 = pokeCounter2;
                                                                          
                                                
                                                    });
                                                

                                                await sleep (5000);

                                                console.log("pokemon 1 after losing" + pokeCounter2);
                                                document.querySelector(`${winLose}`).style.display="block";
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
                                                console.log("pokeround before "+ pokeRound);
                                                pokeRound ++;
                                                console.log("pokeround after "+ pokeRound);
                                                
                                                console.log("pokecounter1 before adding: "+ pokeCounter1);
                                                pokeCounter1 ++;
                                                console.log("pokecounter1 after adding: "+ pokeCounter1);

                                                const pokeCounterOne = document.querySelectorAll(`${round}`);                    
                                        
                                                    pokeCounterOne.forEach((e)=>{     

                                                        e.pokemonCounter1 = pokeCounter1;
                                                                        
                                                
                                                });
                                                /*

                                                const pokeCounterOne = document.querySelectorAll(`${round}`);                    
                                        
                                                pokeCounterOne.forEach((e)=>{     

                                                    e.pokemonCounter1 = pokeCounter1;
                                                                    
                                            
                                                });
                                                */
                                               

                                                const winLoseCounterOne = document.querySelectorAll(`${winLose}`);                    
                                        
                                                    winLoseCounterOne.forEach((e)=>{     

                                                        e.pokemonCounter1 = pokeCounter1;
                                                                          
                                                
                                                });
                                                
                                                await sleep (5000);

                                                console.log("pokemon 1 after winning" + pokeCounter1);
                                                document.querySelector(`${winLose}`).style.display="block";
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
