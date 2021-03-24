import {LitElement, html, css} from 'lit-element';

export class AddName extends LitElement { 

    static get styles() {
    return css`
    .mdl-list__item{
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: .04em;
        }
    .mdl-textfield {
        position: relative;
    font-size: 16px;
    display: inline-block;
    box-sizing: border-box;
    width: 300px;
    max-width: 100%;
    margin: 0;
    padding: 20px 0;
    }
    `;
  }

    render() {
        return html `
            <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
           <form action="#">
                <div class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" type="text" id="sample1">
                    <label class="mdl-textfield__label" for="sample1">Name</label>
                </div>
            </form>
               
        `;
    }
   
} 

window.customElements.define('add-name', AddName);



