const templateButton= document.createElement('template');
templateButton.innerHTML=
`
<style>
    .loading-bar{

        width: 7rem;
        height: 7rem;
        border-left: 6px solid #3663AD;
        ;
        border-radius: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
        animation: loading-bar-spinner 1.5s ease ;
        
    }
    .loading-word{
        font-family: acumin-pro-extra-condensed;
        font-weight: 700;
        font-style: italic;
        font-size: 20px;
        color: #3663AD;
    }
    @keyframes loading-bar-spinner{
        from {
            transform:rotate(0turn);
            
        }
        to{
            transform:rotate(1turn);
           
        }
    }

    

</style>

<div class="loading-bar">
 <div class="loading-word">loading</div>
</div>

`

class LoadingButton extends HTMLElement {

    constructor(){
        super();
    
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(templateButton.content.cloneNode(true));
        
    }

}

window.customElements.define('loading-button', LoadingButton);