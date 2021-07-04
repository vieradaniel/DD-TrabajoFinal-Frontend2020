const templateResults = document.createElement('template');

templateResults.innerHTML=`

<style>
    .profile-card-container{
        font-family: acumin-pro-extra-condensed;
        font-weight: 700;
        font-style: italic;
        font-size: 20px;
        color: #3663AD;
        background:linear-gradient(0deg, rgba(196, 196, 196, 0) 50.77%, #FFCB05 99.23%);
        width:100;
        height:100vh;
        margin: 0;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        
    }
    .profile-top{
        display:flex;
        justify-content:space-between;
        padding:1rem; 
    }
    .pokemon-name{
        margin-top: -1rem;
        font-size:3rem;
    }
    .flags{
        margin-top: -0.5rem;
        display:flex;
        flex-direction:column;    
    }
    p{
        margin:0;
    }
    h1{
        margin:0;
        margin-top:-1rem;
        
    }

    #pokePicture{
        width:100%;
    }
    .poke-picture{
        width:150px;
        display:flex;
        justify-content:flex-end;
        
        margin-right:2rem;
        position:fixed;
        bottom:45vh;
        right:1rem;
        z-index:100;
        
    }
    .profile-bottom{
        background: #fff;        
        padding:3.5rem 1.5rem 1.5rem 1.5rem;
        
        
        border-radius:20px 20px 0 0;
        position:fixed;
        bottom:0;
        height:40vh;
        width: 87%;
        z-index:; 
        
    }
    .species{
        display:flex;
       
    }
    .description{
        display:flex;
       
    }
    .description-1{
        padding-left:40px;
    }
    .description-2{
        padding-left:20px;
    }
   

    

</style>

<div class="profile-card-container">
    <div class="profile-top">
        <div class="highlighted-stats">            
            <div class="pokemon-name">Pokemon Name</div>                                   
        </div>
        <div class="X-button"></div>        
    </div>

    <div class="poke-picture">
        <img id="pokePicture" src="https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/197.png">
    </div>

    <div class="profile-bottom">        
        <div class= "info-1">
            <div class="">
                <p class="label-1">RESULTS</p>
                <p class="description-1 results">0</p>
            </div>
            <div class="description">
                <p class="label-2">Description</p>
                <p class="description-2"></p>
            </div>
        </div>
        <!--
        <div class"info-2">
        info2
        </div>
        <div class= "info-3">
        info3
        </div>
        -->
    </div>
    

</div>

`;

class Results extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templateResults.content.cloneNode(true));
    }

    get pokemonName(){
        return this.shadowRoot.querySelector('.pokemon-name').innerHTML;
    }
    set pokemonName(newPokeName){
        this.shadowRoot.querySelector('.pokemon-name').innerHTML = newPokeName;
    }
    get pokemonName2(){
        return this.shadowRoot.querySelector('.pokemon-name').innerHTML;
    }
    set pokemonName2(newPokeName2){
        this.shadowRoot.querySelector('.pokemon-name').innerHTML = newPokeName2;
    }
    get pokemonName3(){
        return this.shadowRoot.querySelector('.pokemon-name').innerHTML;
    }
    set pokemonName3(newPokeName3){
        this.shadowRoot.querySelector('.pokemon-name').innerHTML = newPokeName3;
    }
    get pokemonName4(){
        return this.shadowRoot.querySelector('.pokemon-name').innerHTML;
    }
    set pokemonName4(newPokeName4){
        this.shadowRoot.querySelector('.pokemon-name').innerHTML = newPokeName4;
    }
    get pokemonName5(){
        return this.shadowRoot.querySelector('.pokemon-name').innerHTML;
    }
    set pokemonName5(newPokeName5){
        this.shadowRoot.querySelector('.pokemon-name').innerHTML = newPokeName5;
    }
    get pokemonName6(){
        return this.shadowRoot.querySelector('.pokemon-name').innerHTML;
    }
    set pokemonName6(newPokeName6){
        this.shadowRoot.querySelector('.pokemon-name').innerHTML = newPokeName6;
    }
    get pokemonImage(){
        return this.shadowRoot.querySelector('#pokePicture').src;
    }
    set pokemonImage(newPokeImage){
        this.shadowRoot.querySelector('#pokePicture').src = newPokeImage;
    }
      
    get pokemonBackground(){
        return this.shadowRoot.querySelector('.profile-card-container').style.background;
    }
    set pokemonBackground(newPokeBackground){
        this.shadowRoot.querySelector('.profile-card-container').style.background = newPokeBackground;
    }
    get results(){
        return this.shadowRoot.querySelector('.pokemon-name').innerHTML;
    }
    set results(newResults){
        if(newResults > 0){
            this.shadowRoot.querySelector('.results').innerHTML = "YOU WON";
        }else{
            this.shadowRoot.querySelector('.results').innerHTML = "YOU LOST";
        }
        
    }
  

    connectedCallback(){
         
       this.pokemonName= this.getAttribute("pokemonName");  
       this.pokemonName2= this.getAttribute("pokemonName2");
       this.pokemonName3= this.getAttribute("pokemonName3");
       this.pokemonName4= this.getAttribute("pokemonName4");
       this.pokemonName5= this.getAttribute("pokemonName5");
       this.pokemonName6= this.getAttribute("pokemonName6"); 
       this.pokemonImage = this.getAttribute("pokemonImage");        
       this.pokemonType = this.getAttribute("pokemonType");
       this.pokemonBackground = this.getAttribute("pokemonBackground");
       this.results = this.getAttribute("results");
                      
       
       
       
    }


}

window.customElements.define('results-card',Results);