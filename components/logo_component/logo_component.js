const pokemonLogo =`
<div  class ="pokemon-logo-container">
    <img src="static/pokemon-logo.png" class ="pokemon-logo" alt="">
</div>

<h2>LAST STANDING</h2>

`;



class LogoComponent extends HTMLElement{

    constructor(){
        super();
   
    this.innerHTML=`${ this.getAttribute('pokename')}`;// agarras el atributo del html que tiene el nombre pokename y pones el valor de ese key dentro del contenido
    this.shadowRoot.innerHTML= pokemonLogo;
        
    }

    connectedCallBack(){
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.innerHTML(pokemonLogo);
    }
}

window.customElements.define ('pokemon-logo', LogoComponent);