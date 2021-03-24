import {LitElement, html, css} from 'lit-element';
import './my-element.js';
import './list-item.js';
import './add-name.js';

export class ListElement extends LitElement { 
    handleClick() {
        console.log("You clicked me", this.list)
        let newObj = {
            name: this.newName,
            books: 0
        }
        let newArray = this.list
        newArray.push(newObj)
        this.list = newArray
        console.log("state list", newArray)
        this.newName = ''
    }   

    updateNewName(e) {
        this.newName = e.srcElement.value
    }

    addCount() {
        this.count++;
    }

    constructor() {
        super();
        this.list = [
            {
                name: "Bryan Cranston",
                books: 2
            },
            {
                name: "Aaron Paul",
                books: 62
            },
            {
                name: "Bob Odenkirk",
                books: 10
            }    
        ],
        this.newName = '',
        this.count = 0
    }

    static get properties() {
        return {
            list: {type: Array},
            newName: {type: String},
        }
    }

    static get styles() {
    return css`
      div { color: red }
      .container {
			padding: 0 20px 30px;
			width: 300px;
			background: white;
			border: 2px solid #eaeaea;
			position: fixed;
			top: 100px;
			left: 100px;
		}
    .mdl-list__item, .mdl-textfield__input {
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: .04em;
        }
    .mdl-list {
          display: block;
        padding: 8px 0;
        list-style: none;
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
    .mdl-textfield__label:after {
        background-color: rgb(63,81,181);
        bottom: 20px;
        content: '';
        height: 2px;
        left: 45%;
        position: absolute;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        visibility: hidden;
        width: 10px;
    }
    button {
      border-radius: 50%;
        font-size: 24px;
        height: 56px;
        margin: auto;
        min-width: 56px;
        width: 56px;
        padding: 0;
        overflow: hidden;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        position: absolute !important;
        right: 20px;
        bottom: -28px;
        background: rgb(255,64,129);
        color: rgb(255,255,255);
    }
    `;
  }



    render() {
        return html `
            <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <ul class="demo-list-two mdl-list">
            ${this.list.map(i => html`<list-item name=${i.name} books=${i.books}></list-item>`)}
            </ul>
            <form action="#">
                <div class="mdl-textfield mdl-js-textfield">
                    <input @change=${this.updateNewName} class="mdl-textfield__input" type="text" id="newName" placeholder="Name">
                    <label class="mdl-textfield__label" for="newName"></label>
                </div>
            </form>
            <button @click="${this.handleClick}" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                <i class="material-icons">add</i>
            </button>
        `;
    }
   
} 

window.customElements.define('list-element', ListElement);



