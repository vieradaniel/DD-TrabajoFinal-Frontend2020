
/*
const PokemonCardTemplate = `
  <h1>
    <span id="pokemon-name">${frula}</span>!
  </h1>
`;
let frula = "hola";
class PokemonCard extends HTMLElement {
  constructor() {
    super();
    this.pokemonName = this.getAttribute('pokemonName');
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = PokemonCardTemplate;
  }

  connectedCallback() {
    const pokemonNameElement = this.shadowRoot.querySelector('#pokemon-name');
    pokemonNameElement.innerHTML = this.pokemonName;
    
  }
}

window.customElements.define('pokemon-card', PokemonCard);

/*
const HelloNameTemplate = `
  <link rel="stylesheet" href="components/hello-name/component.css">
  <h1>
    👋 ¡Hola, <span id="person-name"></span>!
  </h1>
`;

class HelloName extends HTMLElement {
  constructor() {
    super();
    this.personName = this.getAttribute('personName');
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = HelloNameTemplate;
  }

  connectedCallback() {
    const personNameElement = this.shadowRoot.querySelector('#person-name');
    personNameElement.innerHTML = this.personName;
  }
}

window.customElements.define('hello-name', HelloName);
*/

