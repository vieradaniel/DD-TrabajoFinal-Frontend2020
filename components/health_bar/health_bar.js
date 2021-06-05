const templateHealth = document.createElement('template');
templateHealth.innerHTML=`

<style>
.card{
    boder: 1px solid black;
}

</style>
<div class="card">   
        <p class="pokeName1"></p>
        <p class="pokeHp">100%</p>
                  
</div>
`
class HealthBar extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templateHealth.content.cloneNode(true));
    }

    get pokemonName(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName(newPokeName){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName;
    }
    get pokemonHp(){
        return this.shadowRoot.querySelector('.pokeHp').innerHTML;
    }
    set pokemonHp(newPokeHp){
        this.shadowRoot.querySelector('.pokeHp').innerHTML = newPokeHp;
    }

    connectedCallback(){
        this.pokemonName=this.getAttribute("pokemonName");
        this.pokemonHp=this.getAttribute("pokemonHp");
    }
    


}

window.customElements.define('health-bar',HealthBar);