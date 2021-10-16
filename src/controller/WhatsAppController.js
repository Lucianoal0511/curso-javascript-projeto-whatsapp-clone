class WhatsAppController {

    constructor(){

        console.log('WhatsAppController OK');

        //Para carregar os elementos
        this.loadElements();

    }

    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;//Aqui transforma os ids no formato CamelCase

        });
        
    }

}