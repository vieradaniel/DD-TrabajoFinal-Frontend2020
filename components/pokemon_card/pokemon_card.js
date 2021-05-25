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
    background: linear-gradient(180deg, #F6BD20 0%, #FFFFFF 55.73%, #FFDE52 100%);

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
        <div class="type-of-poke"><img src="static/lightning.png"></div>
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

    connectedCallback(){
         
       this.pokemonName= this.getAttribute("pokemonName");  //sth is not right, even though I change "pokemonName" to anything, it still works.
       this.pokemonImage = this.getAttribute("pokemonImage"); 
       this.pokemonId = this.getAttribute("pokemonId");
    }

  

}

window.customElements.define('pokemon-card', PokemonCard);