const template =document.createElement('template');
template.innerHTML =
`
<style>
.pokemon-logo{
    width: 12rem;
}
.poke-font{
    font-family: acumin-pro-extra-condensed;
    font-weight: 700;
    font-style: italic;
    font-size: 20px;
    color: #3663AD;
    margin:0px;
    margin-top: -10px;
    margin-left:2px;
    
}
.pokemon-logo-container{
    display:flex;
    flex-direction:column;
    align-items:center;
    animation: fadeIn 1.5s;
    
}

@keyframes fadeIn{
    0% {opacity:0;}
    100% {opacity:1}
}
</style>

<div class ="pokemon-logo-container">
    <img class="pokemon-logo" src="static/pokemon-logo.png" class ="pokemon-logo" alt="">
        <h2 class="poke-font">LAST STANDING </h2>
</div>

<h2 class="test"></h2>

`;



class LogoComponent extends HTMLElement{

    constructor(){
        super();
    
    this.attachShadow({ mode: 'open'});   
    this.shadowRoot.appendChild(template.content.cloneNode(true));
        
    } 
    
}

window.customElements.define ('pokemon-logo', LogoComponent);