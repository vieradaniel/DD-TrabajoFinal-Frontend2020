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
    get pokemonName2(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName2(newPokeName2){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName2;
    }
    get pokemonName3(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName3(newPokeName3){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName3;
    }
    get pokemonName4(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName4(newPokeName4){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName4;
    }
    get pokemonName5(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName5(newPokeName5){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName5;
    }
    get pokemonName6(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName6(newPokeName6){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName6;
    }
    get pokemonHp1(){
        return this.shadowRoot.querySelector('.pokeHp').innerHTML;
    }
    set pokemonHp1(newPokeHp1){
        this.shadowRoot.querySelector('.pokeHp').innerHTML = newPokeHp1;
    }
    get pokemonHp2(){
        return this.shadowRoot.querySelector('.pokeHp').innerHTML;
    }
    set pokemonHp2(newPokeHp2){
        this.shadowRoot.querySelector('.pokeHp').innerHTML = newPokeHp2;
    }
    get pokemonHp3(){
        return this.shadowRoot.querySelector('.pokeHp').innerHTML;
    }
    set pokemonHp3(newPokeHp3){
        this.shadowRoot.querySelector('.pokeHp').innerHTML = newPokeHp3;
    }
    get pokemonHp4(){
        return this.shadowRoot.querySelector('.pokeHp').innerHTML;
    }
    set pokemonHp4(newPokeHp4){
        this.shadowRoot.querySelector('.pokeHp').innerHTML = newPokeHp4;
    }
    get pokemonHp5(){
        return this.shadowRoot.querySelector('.pokeHp').innerHTML;
    }
    set pokemonHp5(newPokeHp5){
        this.shadowRoot.querySelector('.pokeHp').innerHTML = newPokeHp5;
    }
    get pokemonHp6(){
        return this.shadowRoot.querySelector('.pokeHp').innerHTML;
    }
    set pokemonHp6(newPokeHp6){
        this.shadowRoot.querySelector('.pokeHp').innerHTML = newPokeHp6;
    }

    connectedCallback(){
        this.pokemonName=this.getAttribute("pokemonName");
        this.pokemonName2=this.getAttribute("pokemonName2");
        this.pokemonName3=this.getAttribute("pokemonName3");
        this.pokemonName4=this.getAttribute("pokemonName4");
        this.pokemonName5=this.getAttribute("pokemonName5");
        this.pokemonName6=this.getAttribute("pokemonName6");
        this.pokemonHp1=this.getAttribute("pokemonHp1");
        this.pokemonHp2=this.getAttribute("pokemonHp2");
        this.pokemonHp3=this.getAttribute("pokemonHp3");
        this.pokemonHp4=this.getAttribute("pokemonHp4");
        this.pokemonHp5=this.getAttribute("pokemonHp5");
        this.pokemonHp6=this.getAttribute("pokemonHp6");
    }
    


}

window.customElements.define('health-bar',HealthBar);