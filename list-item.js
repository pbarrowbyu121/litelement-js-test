import {LitElement, html, css} from 'lit-element';

export class ListItem extends LitElement { 
    static get properties() {
        return {
            name: {type: String},
            books: {type: Number},
            starred: {type: Boolean}
        }
    }

    static get styles() {
    return css`
    .mdl-list__item{
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: .04em;
        }
    .mdl-list__item--two-line {
    height: 72px;
    }
    `;
  }

  constructor() {
        super();
        this.starred = false
    }

    toggleStar() {
        this.starred = !this.starred
    }

    render() {
        return html `
            <script src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <li class="mdl-list__item mdl-list__item--two-line">
                <span class="mdl-list__item-primary-content">
                    <i class="material-icons mdl-list__item-avatar">person</i>
                    <span>${this.name}</span>
                    <span class="mdl-list__item-sub-title">${this.books} Books</span>
                </span>
                <span class="mdl-list__item-secondary-content">
                    <a class="mdl-list__item-secondary-action" @click=${this.toggleStar}>
                        ${this.starred ? html`<i class="material-icons empty-star">star_outline</i></a>` : html`<i class="material-icons filled-star">star</i></a>`}
                </span>
            </li> 
        `;
    }
   
} 

window.customElements.define('list-item', ListItem);



