const templateCard = document.createElement('template');
templateCard.innerHTML=`

<style>
.poke-card-container{
    font-family: acumin-pro-extra-condensed;
    font-weight: 700;
    font-style: italic;
    font-size: 20px;
    border-radius:10px;
    width: 7rem;
    height:23vh;
    display:flex;
    flex-direction: column; 
    justify-content:space-between;
    padding:0.05rem;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

}
.poke-card-container:hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
.poke-card-top{
    display:flex;
    justify-content: space-between;
}
.type-of-poke{
    background: #FFF;
    border-radius: 30% 70% 100% 0% / 30% 0% 100% 70% ;
}
.type-of-poke img{
    padding:0 0.5rem;
    
}
.pokemon-number{
    padding:0rem;
    color:#FFF;
    font-size: 16px;
    padding-right:0.5rem; 
}
.poke-card-body{
    display:block;
    margin-left:20px;
    width: 4rem;
}
.poke-card-body img{
    width:100%; 
}

.poke-card-bottom{
    padding:0.3rem 0.5rem;
}
</style>

<div class="poke-card-container">
    <div class="poke-card-top">
        <div class="type-of-poke"><img id="pokeType" src="static/Electric.png"></div>
        <div class="pokemon-number">#025</div>
    </div>
    <div class="poke-card-body">
        <img id="pokePicture" src=""alt="pokemon-picture">            
    </div>
    <div class="poke-card-bottom">
    PIKACHU
    </div>
</div>


`;

class PokemonCard extends HTMLElement{
    constructor(){
        super();
       
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templateCard.content.cloneNode(true)); 
       
    }
    
    get pokemonName(){
        return this.shadowRoot.querySelector('.poke-card-bottom').innerHTML;
    }
    set pokemonName(newPokeName){
        this.shadowRoot.querySelector('.poke-card-bottom').innerHTML = newPokeName;
    }
    get pokemonName2(){
        return this.shadowRoot.querySelector('.poke-card-bottom').innerHTML;
    }
    set pokemonName2(newPokeName2){
        this.shadowRoot.querySelector('.poke-card-bottom').innerHTML = newPokeName2;
    }
    get pokemonName3(){
        return this.shadowRoot.querySelector('.poke-card-bottom').innerHTML;
    }
    set pokemonName3(newPokeName3){
        this.shadowRoot.querySelector('.poke-card-bottom').innerHTML = newPokeName3;
    }
    get pokemonName4(){
        return this.shadowRoot.querySelector('.poke-card-bottom').innerHTML;
    }
    set pokemonName4(newPokeName4){
        this.shadowRoot.querySelector('.poke-card-bottom').innerHTML = newPokeName4;
    }
    get pokemonName5(){
        return this.shadowRoot.querySelector('.poke-card-bottom').innerHTML;
    }
    set pokemonName5(newPokeName5){
        this.shadowRoot.querySelector('.poke-card-bottom').innerHTML = newPokeName5;
    }
    get pokemonName6(){
        return this.shadowRoot.querySelector('.poke-card-bottom').innerHTML;
    }
    set pokemonName6(newPokeName6){
        this.shadowRoot.querySelector('.poke-card-bottom').innerHTML = newPokeName6;
    }
    get pokemonImage(){
        return this.shadowRoot.querySelector('#pokePicture').src;
    }
    set pokemonImage(newPokeImage){
        this.shadowRoot.querySelector('#pokePicture').src = newPokeImage;
    }
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
    
    get pokemonBackground(){
        return this.shadowRoot.querySelector('.poke-card-container').style.background;
    }
    set pokemonBackground(newPokeBackground){
        this.shadowRoot.querySelector('.poke-card-container').style.background = newPokeBackground;
    }

    connectedCallback(){
         
       this.pokemonName= this.getAttribute("pokemonName");  //sth is not right, even though I change "pokemonName" to anything, it still works.
       this.pokemonName2= this.getAttribute("pokemonName2");
       this.pokemonName3= this.getAttribute("pokemonName3");
       this.pokemonName4= this.getAttribute("pokemonName4");
       this.pokemonName5= this.getAttribute("pokemonName5");
       this.pokemonName6= this.getAttribute("pokemonName6");
       this.pokemonImage = this.getAttribute("pokemonImage"); 
       this.pokemonId = this.getAttribute("pokemonId");
       this.pokemonType = this.getAttribute("pokemonType");
       this.pokemonBackground = this.getAttribute("pokemonBackground");
       //console.log(this.shadowRoot.querySelector('.poke-card-container').style.background="red");
      
    }

  

}

window.customElements.define('pokemon-card', PokemonCard);