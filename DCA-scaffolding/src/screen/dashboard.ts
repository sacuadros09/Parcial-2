import { getData } from "../services/getData";
import { AttributeCard } from "../components/Card/card";
import "../components/export"
import { ApiType } from "../types/apiType";
 
class Dashboard extends HTMLElement {


    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }


    async connectedCallback(){
        const data = await getData()
        this.render(data)
    }


    render(data:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML = "";
        data.forEach((s: ApiType) => {
            const card =this.ownerDocument.createElement("app-card");
            card.setAttribute(AttributeCard.animal,s.animal);
            card.setAttribute(AttributeCard.celebrity,s.celebrity);
            card.setAttribute(AttributeCard.dev,s.dev);
            card.setAttribute(AttributeCard.explicit,s.explicit);
            card.setAttribute(AttributeCard.fashion,s.fashion);
            card.setAttribute(AttributeCard.food,s.food);
            card.setAttribute(AttributeCard.history,s.history);

            this.shadowRoot?.appendChild(card);


        });
    }
}


customElements.define("app-dashboard",Dashboard);
