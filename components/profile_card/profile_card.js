const templateProfile = document.createElement('template');

templateProfile.innerHTML=`

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
        margin-top:-8rem;
        margin-right:2rem;
        position:fixed;
        bottom:50vh;
        right:1rem;
        z-index:100;
        
    }
    .profile-bottom{
        background: #fff;        
        padding:1.5rem;
        
        border-radius:20px 20px 0 0;
        position:fixed;
        bottom:0;
        height:50vh;
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
            <div class="pokemon-number">#025</div>
            <div class="pokemon-name">PIKACHU</div>
            <div class="flags">
                <div>
                    <img src="static/flags/icon-flag-japan.png"><span class="pokemon-japanese">nombre1</span><img>
                </div>
                <div>
                    <img src="static/flags/icon-flag-china.png"><span class="pokemon-chinese">nombre1</span><img>
                </div>
                <div>
                    <img src="static/flags/icon-flag-france.png"><span class="pokemon-french">nombre1</span><img>
                </div>
            </div>
            <p>Win Ratio</p>
            <h1>52%</h1>            
        </div>
        <div class="X-button">X</div>        
    </div>

    <div class="poke-picture">
        <img id="pokePicture" src="https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/197.png">
    </div>

    <div class="profile-bottom">        
        <div class= "info-1">
            <div class="species">
                <p class="label-1">Species</p>
                <p class="description-1"></p>
            </div>
            <div class="description">
                <p class="label-2">Description</p>
                <p class="description-2"></p>
            </div>
        </div>
        <div class"info-2">
        info2
        </div>
        <div class= "info-3">
        info3
        </div>

    </div>
    

</div>

`;

class ProfileCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templateProfile.content.cloneNode(true));
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
    get pokemonId(){
        return this.shadowRoot.querySelector('.pokemon-number').innerHTML;
    }
    set pokemonId(newPokeId){
        this.shadowRoot.querySelector('.pokemon-number').innerHTML = newPokeId;
    }  
    get pokemonBackground(){
        return this.shadowRoot.querySelector('.profile-card-container').style.background;
    }
    set pokemonBackground(newPokeBackground){
        this.shadowRoot.querySelector('.profile-card-container').style.background = newPokeBackground;
    }
    get pokeNameJapanese(){
        return this.shadowRoot.querySelector('.pokemon-japanese').innerHTML;
    }
    set pokeNameJapanese(newPokeName){
        this.shadowRoot.querySelector('.pokemon-japanese').innerHTML = newPokeName;
    }
    get pokeNameChinese(){
        return this.shadowRoot.querySelector('.pokemon-chinese').innerHTML;
    }
    set pokeNameChinese(newPokeName){
        this.shadowRoot.querySelector('.pokemon-chinese').innerHTML = newPokeName;
    }
    get pokeNameFrench(){
        return this.shadowRoot.querySelector('.pokemon-french').innerHTML;
    }
    set pokeNameFrench(newPokeName){
        this.shadowRoot.querySelector('.pokemon-french').innerHTML = newPokeName;
    }
    get pokeSpeciesInfo(){
        return this.shadowRoot.querySelector('.description-1').innerHTML;
    }
    set pokeSpeciesInfo(newPokeName){
        this.shadowRoot.querySelector('.description-1').innerHTML = newPokeName;
    }
    get pokeDescriptionInfo(){
        return this.shadowRoot.querySelector('.description-2').innerHTML;
    }
    set pokeDescriptionInfo(newPokeName){
        this.shadowRoot.querySelector('.description-2').innerHTML = newPokeName;
    }

    connectedCallback(){
         
       this.pokemonName= this.getAttribute("pokemonName");  
       this.pokemonName2= this.getAttribute("pokemonName2");
       this.pokemonName3= this.getAttribute("pokemonName3");
       this.pokemonName4= this.getAttribute("pokemonName4");
       this.pokemonName5= this.getAttribute("pokemonName5");
       this.pokemonName6= this.getAttribute("pokemonName6"); 
       this.pokemonImage = this.getAttribute("pokemonImage"); 
       this.pokemonId = this.getAttribute("pokemonId");
       this.pokemonType = this.getAttribute("pokemonType");
       this.pokemonBackground = this.getAttribute("pokemonBackground");
       this.pokeNameJapanese = this.getAttribute("pokeNameJapanese");
       this.pokeNameChinese = this.getAttribute("pokeNameChinese");
       this.pokeNameFrench=this.getAttribute("pokeNameFrench");
       this.pokeHpInfo= this.getAttribute("pokeHpInfo");
       this.pokeAttackInfo =this.getAttribute("pokeAttackInfo");
       this.pokeDefenseInfo = this.getAttribute("pokeDefenseInfo");
       this.pokeSpeciesInfo = this.getAttribute("pokeSpeciesInfo");
       this.pokeDescriptionInfo = this.getAttribute("pokeDescriptionInfo");
       //console.log(this.shadowRoot.querySelector('.poke-card-container').style.background="red");
       
       const button = document.querySelector('.bottom-button');
       
       /*
       button.addEventListener('click',()=>{
           alert('hello');
       })
       */
    }


}

window.customElements.define('profile-card',ProfileCard);