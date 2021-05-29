const templateRound1 = document.createElement('template');
templateRound1.innerHTML=`

<style>
.card{
    width:22rem;
    
    border: 1px solid black;
}
.won-lost-score{
    display:flex;
    justify-content:space-between;
}
.score {
    display:flex;
    border:1px solid black;
    padding:0.1rem;    
}

.score .p1 {
    color :#FFF;
    background: black;
    margin:0;
    padding:0.1rem;
}
.score .p2{
    background:#FFF;
    margin:0;
    padding:0.1rem;
    
}
.round-one-container{
    background:#FFF;
    padding:1rem;
    display:flex;
    justify-content:center;
}
h1{
    margin:none;
}


</style>
<div class="card">
    <div class="won-lost-score">
        <div class="score">
            <p class="p1">WON</p>
            <p class="p2">00</p>
            
        </div>

        <div class="score">
            <p class="p1">LOST</p>
            <p class="p2">00</p>
        </div>
    </div>

    <div class="round-one-container">
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