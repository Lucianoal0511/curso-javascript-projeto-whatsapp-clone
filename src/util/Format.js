class Format {

    static getCamelCase(text){

        //Criando uma div para gerar um dataset, com o dataset consegue recuperar para o javascript
        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];//irá percorrer e retornará o array com todas as chaves que encontrar dentro de objeto determinando

    }
}