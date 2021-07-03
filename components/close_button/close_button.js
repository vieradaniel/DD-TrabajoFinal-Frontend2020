const templateCloseButton = document.createElement('template');
templateCloseButton.innerHTML=`

<style>

</style>
<div>
X
<div>



`
class CloseButton extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templateCloseButton.content.cloneNode(true));
    }

    get pokemonName(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName(newPokeName){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName;
    }
    get pokemonCounter1(){
        return this.shadowRoot.querySelector('.pokeCounter1').innerHTML;
    }
    set pokemonCounter1(newPokeCounter1){
        this.shadowRoot.querySelector('.pokeCounter1').innerHTML = "0"+ newPokeCounter1;
        this.shadowRoot.querySelector('.win-lose').innerHTML = "WON";
    }

    get pokemonName2(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName2(newPokeName2){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName2;
    }
    get pokemonCounter2(){
        return this.shadowRoot.querySelector('.pokeCounter2').innerHTML;
    }
    set pokemonCounter2(newPokeCounter2){
        this.shadowRoot.querySelector('.pokeCounter2').innerHTML = "0"+ newPokeCounter2;
        this.shadowRoot.querySelector('.win-lose').innerHTML = "LOST";
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
    get pokemonImage(){
        return this.shadowRoot.querySelector('#pokePicture').src;
    }
    set pokemonImage(newPokeImage){
        this.shadowRoot.querySelector('#pokePicture').src = newPokeImage;
    }

    connectedCallback(){
      
    }
    


}

window.customElements.define('close-button',CloseButton);