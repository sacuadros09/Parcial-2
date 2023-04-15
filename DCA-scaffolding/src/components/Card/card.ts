import {AttributeFigure} from "../Figure/Figure";


export enum AttributeCard {
    "animal" = "animal",
    "celebrity" = "celebrity",
    "dev" = "dev",
    "explicit" = "explicit",
    "fashion" = "fashion",
    "food" = "food",
    "history" = "history"
}
export default class Card extends HTMLElement{
    animal: string = "";
    celebrity: string = "";
    dev: string = "";
    explicit: string = "";
    fashion: string = "";
    food: string = "";
    history: string = "";

    static get observedAttributes() {
        const attrs: Record<AttributeCard, null> = {
            animal: null,
            celebrity: null,
            dev: null,
            explicit: null,
            fashion: null,
            food: null,
            history: null
        }
        return Object.keys(attrs);
}
 
attributeChangedCallback(
    propName: AttributeCard,
    _: unknown,
    newValue: string
    ) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }


        this.render();
    }


    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    connectedCallback(){
        this.render();
    }


    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = "";


        const container = this.ownerDocument.createElement("section");


        const figure = this.ownerDocument.createElement("app-figure");
        figure.setAttribute(AttributeFigure.animal,this.animal);
        figure.setAttribute(AttributeFigure.celebrity,this.celebrity);
        figure.setAttribute(AttributeFigure.dev,this.dev);
        figure.setAttribute(AttributeFigure.explicit,this.explicit);
        figure.setAttribute(AttributeFigure.fashion,this.fashion);
        figure.setAttribute(AttributeFigure.food,this.food);
        figure.setAttribute(AttributeFigure.history,this.history);
       
        container.appendChild(figure);


        this.shadowRoot?.appendChild(container)  
    }


}


customElements.define("app-card", Card)
