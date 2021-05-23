const template =document.createElement('template');
template.innerHTML =
`
<div class ="pokemon-logo-container">
    <img src="static/pokemon-logo.png" class ="pokemon-logo" alt="">
</div>

<h2 class="test"></h2>
<button id="change-background">do something</button>

`;



class LogoComponent extends HTMLElement{

    constructor(){
        super();
    
    this.attachShadow({ mode: 'open'});
    //this.innerHTML=`${ this.getAttribute('pokename')}`;// agarras el atributo del html que tiene el nombre pokename y pones el valor de ese key dentro del contenido
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    this.shadowRoot.querySelector('.test').innerText = this.getAttribute('test');

    //this.shadowRoot.innerHTML= pokemonLogo;
        
    }

    toggleBackground(){
        console.log("123");
    }

    connectedCallback(){
       this.shadowRoot.querySelector('#change-background').addEventListener('click',()=>
           this.toggleBackground());
       
    }

    disconnectedCallback(){
        this.shadowRoot.querySelector('#change-background').removeEventListener();
    }
    
}

window.customElements.define ('pokemon-logo', LogoComponent);