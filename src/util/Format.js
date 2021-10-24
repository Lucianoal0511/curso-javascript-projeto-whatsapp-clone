export class Format {

    static getCamelCase(text){

        //Criando uma div para gerar um dataset, com o dataset consegue recuperar para o javascript
        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];//irá percorrer e retornará o array com todas as chaves que encontrar dentro de objeto determinando

    }

    static toTime(duration){

        let seconds = parseInt(duration / 1000) % 60;
        let minutes = parseInt(duration / (1000 * 60)) % 60;
        let hours = parseInt(duration / (1000 * 60 * 60)) % 24;

        if (hours > 0) {//precisou converter para string porque foi formatado com duas casas e o zero completa a casa esquerda se for o caso
            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            return `${minutes}:${seconds.toString().padStart(2, '0')}`
        }
    }

}