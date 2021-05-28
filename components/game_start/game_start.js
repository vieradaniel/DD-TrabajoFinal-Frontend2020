const templateGameStart = document.createElement('template');
templateGameStart.innerHTML=
`
<style>
    .poke-picture-container{
        display:flex;
        justify-content:center;
        height:100vh;
        align-items:center;
         
        

    }

    img{
        height:10rem;
        width:10rem; 
        max-width:10rem;
                
    }


</style>

<div class="poke-picture-container">
    
        <img id="pokePicture" src=""alt="pokemon-picture"> 
    
</div>
`

class GameStart extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templateGameStart.content.cloneNode(true));
        

    }
/*
    get pokemonName(){
        return this.shadowRoot.querySelector('.poke-card-bottom').innerHTML;
    }
    set pokemonName(newPokeName){
        this.shadowRoot.querySelector('.poke-card-bottom').innerHTML = newPokeName;
    }
    */
    get pokemonImage(){
        return this.shadowRoot.querySelector('#pokePicture').src;
    }
    set pokemonImage(newPokeImage){
        this.shadowRoot.querySelector('#pokePicture').src = newPokeImage;
    }
    /*
    get pokemonId(){
        return this.shadowRoot.querySelector('.pokemon-number').innerHTML;
    }
    set pokemonId(newPokeId){
        this.shadowRoot.querySelector('.pokemon-number').innerHTML = newPokeId;
    }
    get pokemonType(){
        return this.shadowRoot.querySelector('#pokeType').src;
    }
    set pokemonType(newPokeType){
        this.shadowRoot.querySelector('#pokeType').src = newPokeType;
    }
    */
    get pokemonBackground(){
        return this.shadowRoot.querySelector('.poke-picture-container').style.background;
    }
    set pokemonBackground(newPokeBackground){
        this.shadowRoot.querySelector('.poke-picture-container').style.background = newPokeBackground;
    }

    connectedCallback(){
         
       // this.pokemonName= this.getAttribute("pokemonName");  //sth is not right, even though I change "pokemonName" to anything, it still works.
        this.pokemonImage = this.getAttribute("pokemonImage"); 
     /*   this.pokemonId = this.getAttribute("pokemonId");
        this.pokemonType = this.getAttribute("pokemonType");
        this.pokemonBackground = this.getAttribute("pokemonBackground");
        */
               
     }


}

window.customElements.define('game-start',GameStart);