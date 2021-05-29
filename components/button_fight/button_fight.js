const templateButtonFight = document.createElement('template');
templateButtonFight.innerHTML=`

<style>
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
        position:fixed;
        bottom:0;
    }
</style>

<div class="bottom-button">
    <button class="button-fight">FIGHT!</button>
</div>

`
class ButtonFight extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(templateButtonFight.content.cloneNode(true));
    }

}
window.customElements.define('button-fight',ButtonFight);