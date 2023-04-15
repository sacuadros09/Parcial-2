export enum AttributeFigure {
    "animal" = "animal",
    "celebrity" = "celebrity",
    "dev" = "dev",
    "explicit" = "explicit",
    "fashion" = "fashion",
    "food" = "food",
    "history" = "history"

}


export default class Figure extends HTMLElement {
    animal?: string;
  celebrity?: string;
  dev?: string;
  explicit?: string;
  fashion?: string;
  food?: string;
  history?: string

    static get ObservedAttributes(){
        const attrs: Record <AttributeFigure, null> = {
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
        propName: AttributeFigure,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }


        }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <h1>${this.animal}</h1>
            <h1>${this.celebrity}</h1>
            <h1>${this.dev}</h1>
            <h1>${this.explicit}</h1>
            <h1>${this.fashion}</h1>
            <h1>${this.food}</h1>
            <h1>${this.history}</h1>
            </section>`
        }
    }
}


customElements.define("app-figure",Figure);
