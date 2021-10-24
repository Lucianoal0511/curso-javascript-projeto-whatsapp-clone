# Projeto WhatsApp Clone

[![Hcode Treinamentos](https://www.hcode.com.br/res/img/hcode-200x100.png)](https://www.hcode.com.br)

Projeto desenvolvido como exemplo do Curso Completo de JavaScript na Udemy.com.

### Projeto
![WhatsApp Clone](https://firebasestorage.googleapis.com/v0/b/hcode-com-br.appspot.com/o/whatsapp.jpg?alt=media&token=5fc78e3b-4871-424f-abfa-b765f2515d0c)

### Recursos Usados

Lista de recursos usados em aula para este projeto

| Recurso | Link |
| ------ | ------ |
| Webpack | https://webpack.js.org/ |
| Firebase Authentication | https://firebase.google.com/docs/auth/?authuser=0 |
| Cloud Firestore | https://firebase.google.com/docs/firestore/?authuser=0 |
| Cloud Functions | https://firebase.google.com/docs/functions/?hl=pt-br |
| Cloud Storage | https://firebase.google.com/docs/storage/?authuser=0 |
| PDF.js | https://mozilla.github.io/pdf.js/ |
| MediaDevices.getUserMedia() | https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia |

### Roteiro de Inicialização do Projeto
Após clonar o projeto, foi criada uma pasta src e nela foram criadas a pasta controller, que 
foi criado o arquivo WhatsAppController e outro arquivo, app.js, que ficou na pasta src

Sequência
1 - Criação do app.js;
2 - Criação da pasta src;
3 - Criação da pasta controller, dentro de src;
4 - Criação do WhatsAppController;
5 - Criação da pasta util, dentro de src;
6 - Criação da pasta Format.js, dentro de util;
7 - Inclui a chamada dos arquivos criados no index.html;
8 - Deve-se prestar atenção na sequência da chamada de cada um para não dá erro;
9 - Agora iniciaremos o prototype, dentro de WhatsAppController, para otimizar o código e diminuir a quantidade de códigos do projeto;
10 - Iniciamos o initEvents, dentro do WhatsAppController, para iniciarmos todos os eventos dentro da aplicação;
11 - configuração do webpack:
    a) primeiro abre o terminal na pasta do projeto
    b) inicia com npm init
    c) instala o webpack, nesse projeto foi instalado a versão da aula para evitar erros logo npm install webpack@3.1.0 --save
    d) instala o servidor npm install webpack-dev-server@2.5.1 --save
    e) por fim verifica no projeto se foram colocados os pacotes package-lock.json e package.json, e verifica nesse último se estão as versões instaladas da webpack
12 - Para completar a configuração do webpack se faz necessário algumas modificações nos arquivos WhatsAppController, Format e CameraController, com a importação desses arquivos em cada um, com o intuito de funcionar normalmente;
