class WhatsAppController {

    constructor(){

        console.log('WhatsAppController OK');

        //iniciar o Prototype
        this.elementsPrototype();
        //Para carregar os elementos
        this.loadElements();

        this.initEvents();


    }

    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;//Aqui transforma os ids no formato CamelCase, para poder usar diretamente no JS

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

        HTMLFormElement.prototype.getForm = function(){
            return new FormData(this);
        }

        HTMLFormElement.prototype.toJSON = function(){
            let json = {};
            this.getForm().forEach((value, key) => {
                json[key] = value;
            });

            return json;
        }

    }

    initEvents(){

        this.el.myPhoto.on('click', e => {

            this.closeAllLeftPanel();//Antes de abrir eu fecho
            this.el.panelEditProfile.show();//Antes de abrir eu tenho mostrar porque tem o método closeAllLeftPanel que o fecha
            setTimeout(() => {
                this.el.panelEditProfile.addClass('open');
            }, 300);//Criar um efeito de delay para deslizar na tela quando abrir

        });

        this.el.btnNewContact.on('click', e => {

            this.closeAllLeftPanel();//Antes de abrir eu fecho
            this.el.panelAddContact.show();//Antes de abrir eu tenho mostrar porque tem o método closeAllLeftPanel que o fecha
            setTimeout(() => {
                this.el.panelAddContact.addClass('open');
            }, 300);//Criar um efeito de delay para deslizar na tela quando abrir

        });

        this.el.btnClosePanelEditProfile.on('click', e => {//Aqui fecha o painel

            this.el.panelEditProfile.removeClass('open');

        });

        this.el.btnClosePanelAddContact.on('click', e => {//Aqui fecha o painel

            this.el.panelAddContact.removeClass('open');

        });

        this.el.photoContainerEditProfile.on('click', e => {//Aqui terá que abrir no SO uma janela para escolher uma foto

            this.el.inputProfilePhoto.click();

        });

        this.el.inputNamePanelEditProfile.on('keypress', e => {//Aqui terá que abrir no SO uma janela para escolher uma foto

            if (e.key === 'Enter'){
                e.preventDefault();//Suspende o comportamento padrão dele
                this.el.btnSavePanelEditProfile.click();//O Enter vai enviar, antes quebraria linha
            };

        });

        this.el.btnSavePanelEditProfile.on('click', e => {//Aqui terá que abrir no SO uma janela para escolher uma foto

            console.log(this.el.inputNamePanelEditProfile.innerHTML);//Não tem o value, porque não se trata de uma div

        });

        this.el.formPanelAddContact.on('submit', e => {

            e.preventDefault();
            let formData = new FormData(this.el.formPanelAddContact);
        });
        
        //Aqui é para quando clicar no contato, aparecer as mensagens na tela
        this.el.contactsMessagesList.querySelectorAll('.contact-item').forEach(item => {

            item.on('click', e => {
                this.el.home.hide();
                this.el.main.css({
                    display:'flex'//não usamos block, pois está como flex no css
                });
            });
        });

        this.el.btnAttach.on('click', e => {//Aqui abre o menu para anexar 

            e.stopPropagation();//Aqui para a propagação do evento para o remove não propagar e fechar todos os eventos
            this.el.menuAttach.addClass('open');
            document.addEventListener('click', this.closeMenuAttach.bind(this));

        });

        this.el.btnAttachPhoto.on('click', e => {//Aqui abre o menu para anexar 

            // console.log('photo');
            this.el.inputPhoto.click();//Ativar o click

        });

        this.el.inputPhoto.on('change', e => {//para abrir a galeria

            console.log(this.el.inputPhoto.files);
            [...this.el.inputPhoto.files].forEach(file => {
                console.log(file);
            });//Como se trata de coleção e precisávamos de um array então utilizamos o spread

        })

        this.el.btnAttachCamera.on('click', e => {//Aqui abre o menu para anexar 

            // console.log('camera');
            // this.el.panelMessagesContainer.hide();//Esconde o painel de mensagens
            this.closeAllMainPanel();
            this.el.panelCamera.addClass('open');//Abrir o painel da câmera
            this.el.panelCamera.css({//Aqui mexe diretamente nas configurações do css
                'height':'100%'
            });

        });

        this.el.btnClosePanelCamera.on('click', e => {//Botão fechar no painel câmera
            
            // this.el.panelCamera.removeClass('open');//Fechar o painel da câmera
            this.closeAllMainPanel();
            this.el.panelMessagesContainer.show();//Mostra o painel de messagens

        });

        this.el.btnTakePicture.on('click', e => {//Botão abrir câmera

            console.log('Take Picture');

        })

        this.el.btnAttachDocument.on('click', e => {//Aqui abre o menu para anexar 

            // console.log('document');
            this.closeAllMainPanel();
            this.el.panelDocumentPreview.addClass('open');
            this.el.panelDocumentPreview.css({//Aqui mexe diretamente nas configurações do css
                'height':'100%'
            });

        });

        this.el.btnClosePanelDocumentPreview.on('click', e => {

            this.closeAllMainPanel();
            this.el.panelMessagesContainer.show();
             
        });

        this.el.btnSendDocument.on('click', e => {

            console.log('Send Document');
             
        });

        this.el.btnAttachContact.on('click', e => {//Aqui abre o menu para anexar 

            // console.log('contact');
            this.el.modalContacts.show();

        });

        this.el.btnCloseModalContacts.on('click', e => {

            this.el.modalContacts.hide();

        });

        this.el.btnSendMicrophone.on('click', e => {

            this.el.recordMicrophone.show();//Mostra o painel do microfone
            this.el.btnSendMicrophone.hide();//Esconde o botão do microfone
            this.startRecordMicrophoneTimer();

        });

        this.el.btnCancelMicrophone.on('click', e => {

            this.closeRecordMicrophone();

        });

        this.el.btnFinishMicrophone.on('click', e => {

            this.closeRecordMicrophone();

        });

        //método para quebrar linha na caixa de texto
        this.el.inputText.on('keypress', e => {//Aqui a tecla está sendo pressionada

            if (e.key === 'Enter' && !e.ctrlKey){//Se pressiona o Enter mas não pressiona o Ctrl junto

                e.preventDefault();//cancela o comportamento padrão do Enter
                this.el.btnSend.click();//envia a mensagem

            }
        })

        this.el.inputText.on('keyup', e => {//Aqui a tecla já foi pressionada

            if (this.el.inputText.innerHTML.length){//Se tiver alguma coisa escrita no inputText desaparece o inputPlaceholder
                this.el.inputPlaceholder.hide();
                this.el.btnSendMicrophone.hide();//Esconde o microfone
                this.el.btnSend.show();//mostra a seta de send
            } else {//se estiver vazio ele mostra
                this.el.inputPlaceholder.show();
                this.el.btnSendMicrophone.show();//mostra o microfone
                this.el.btnSend.hide();//esconde a seta de send
            }

        });

        this.el.btnSend.on('click', e => {//Ativar a seta para enviar o que está escrito na caixa de mensagem

            console.log(this.el.inputText.innerHTML);

        });

        this.el.btnEmojis.on('click', e => {

            this.el.panelEmojis.toggleClass('open');//abre o painel de emojis

        });

        this.el.panelEmojis.querySelectorAll('.emojik').forEach(emoji => {

            emoji.on('click', e => {//Evento para pegar cada emoji

                console.log(emoji.dataset.unicode);//joga no console o desenho do emoji
                let img = this.el.imgEmojiDefault.cloneNode();//método nativo cloneNode()
                //propriedades do emoji
                img.style.cssText = emoji.style.cssText;
                img.dataset.unicode = emoji.dataset.unicode;
                img.alt = emoji.dataset.unicode;

                //listar todos os emojis
                emoji.classList.forEach(name => {
                    img.classList.add(name);
                });

                // this.el.inputText.appendChild(img);//Aqui vai colocar o emoji na caixa de mensagem

                //Nova forma de inserção na caixa de texto
                let cursor = window.getSelection();//identificar o cursor
                if (!cursor.focusNode || !cursor.focusNode.id == 'input-text') {//Verifica se não está focado em algum lugar
                    this.el.inputText.focus();//Então foque no inputText
                    cursor = window.getSelection();
                }

                let range = document.createRange();//Criando o controle dos intervalos
                range = cursor.getRangeAt(0);//início da seleção
                range.deleteContents();//apaga os conteúdos da seleção

                let frag = document.createDocumentFragment();//Cria um fragmento do texto
                frag.appendChild(img);//Insere a imagem
                range.insertNode(frag);//Insere o fragmento novo
                range.setStartAfter(img);//Joga o cursor para o fim do texto após a inserção

                //precisamos forçar a retirada do placehold quando fomos colocar o emoji
                this.el.inputText.dispatchEvent(new Event('keyup'));

            });

        });
        
    }

    //método para o display do microfone
    startRecordMicrophoneTimer(){

        let start = Date.now();//Pegando a hora atual

        this._recordMicrophoneInterval = setInterval(() => {
            
            this.el.recordMicrophoneTimer.innerHTML = Format.toTime((Date.now() - start));//Aqui faz a contagem do tempo e coloca no painel

        }, 100);
    }

    //método para os botões do microfone
    closeRecordMicrophone(){

        this.el.recordMicrophone.hide();
        this.el.btnSendMicrophone.show();
        clearInterval(this._recordMicrophoneInterval);//Aqui vai limpar o timer para não ficar rodando a infinito

    }

    //método para fechar os painéis
    closeAllMainPanel(){

        this.el.panelMessagesContainer.hide();
        this.el.panelDocumentPreview.removeClass('open');
        this.el.panelCamera.removeClass('open');

    }

    //método para fechar o menu do anexo
    closeMenuAttach(e){

        document.removeEventListener('click', this.closeMenuAttach);//aqui remove o listener
        this.el.menuAttach.removeClass('open');
        // console.log('remove menu');

    }

    //método para fechar todos os panéis
    closeAllLeftPanel(){

        this.el.panelAddContact.hide();
        this.el.panelEditProfile.hide();
        
    }

}