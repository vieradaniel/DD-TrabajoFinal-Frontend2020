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
    .poke-picture{
        display:flex;
        justify-content:flex-end;
        margin-top:-8rem;
        margin-right:3rem;
    }
    .profile-bottom{
        margin-top: -1rem;
        
        padding:1.5rem; 
        
    }
    .bottom-button{
        display:flex;
        justify-content:center;
    }
    .button-fight{
        font-family: acumin-pro-extra-condensed;
        font-weight: 700;
        font-style: italic;
        font-size: 2.5rem;
        border:none;
        background:#3663AD;
        width:80%;
        color:white;
        border-radius:20px 20px 0 0;
    }

    

</style>

<div class="profile-card-container">
    <div class="profile-top">
        <div class="highlighted-stats">
            <div class="pokemon-number">#025</div>
            <div class="pokemon-name">PIKACHU</div>
            <div class="flags">
                <div>
                    <img src="static/flags/icon-flag-japan.png"><span>nombre1</span><img>
                </div>
                <div>
                    <img src="static/flags/icon-flag-china.png"><span>nombre1</span><img>
                </div>
                <div>
                    <img src="static/flags/icon-flag-france.png"><span>nombre1</span><img>
                </div>
            </div>
            <p>Win Ratio</p>
            <h1>52%</h1>            
        </div>
        <div class="X-button">X</div>        
    </div>

    <div class="poke-picture">
        <img src="https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/197.png">
    </div>

    <div class="profile-bottom">        
        <div class"info-1">
        info1
        </div>
        <div class"info-2">
        info2
        </div>
        <div class"info-3">
        info3
        </div>

    </div>
    <div class="bottom-button">
        <button class="button-fight">FIGHT!</button>
    </div>

</div>

`;

class ProfileCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templateProfile.content.cloneNode(true));
    }



}

window.customElements.define('profile-card',ProfileCard);