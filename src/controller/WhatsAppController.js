class WhatsAppController {

    constructor(){

        console.log('WhatsAppController OK');

        //iniciar o Prototype
        this.elementsPrototype();
        //Para carregar os elementos
        this.loadElements();


    }

    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;//Aqui transforma os ids no formato CamelCase

        });

    }

    elementsPrototype(){

        Element.prototype.hide = function(){//método para esconder
            this.style.display = 'none';
            return this;
        }

        Element.prototype.show = function(){//método para mostrar
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggle = function(){//método para alternar entre esconder e mostrar
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        Element.prototype.on = function(events, fn){//método on para múltiplos eventos
            events.split(' ').forEach(event => {//Aqui é para pegar cada evento que deverá está separado por espaços dentro de uma string
                this.addEventListener(event, fn)
            });
            return this;
        }

        Element.prototype.css = function(styles){//Aqui é para mexer no css diretamente
            for (let name in styles){
                this.style[name] = styles[name];
            }
            return this;
        }

        Element.prototype.addClass = function(name){//Aqui adiciona classe
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function(name){//Aqui remove classe
            this.classList.remove(name);
            return this;
        }

        Element.prototype.toggleClass = function(name){//Aqui verifica se existe e adiciona ou retira a classe
            this.classList.toggle(name);
            return this;
        }

        Element.prototype.hasClass = function(name){//Aqui apenas verifica se existe ou não a classe
            return this.classList.contains(name);
        }

    }

}