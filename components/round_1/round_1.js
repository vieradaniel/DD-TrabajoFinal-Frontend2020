const templateRound1 = document.createElement('template');
templateRound1.innerHTML=`

<style>
.card{
    width:100vh;
    height:30vh;
    border: 1px solid black;
}

</style>
<div class="card">
    <div>
        <div>
            <p>WON</p>
        </div>

        <div>
            <p>LOST</p>
        </div>
    </div>

    <div>
        <h1>ROUND 1</h1>
    </div>
    <div>
        <p class="pokeName1">Pikachu</p>
        <p>vs</p>
        <p>Lapras</p>
    </div>
</div>
`
class RoundOne extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templateRound1.content.cloneNode(true));
    }

    get pokemonName(){
        return this.shadowRoot.querySelector('.pokeName1').innerHTML;
    }
    set pokemonName(newPokeName){
        this.shadowRoot.querySelector('.pokeName1').innerHTML = newPokeName;
    }

    connectedCallback(){
        this.pokemonName=this.getAttribute("pokemonName");
    }
    


}

window.customElements.define('round-one',RoundOne);