export class CameraController {

    constructor(videoEl) {

        this._videoEl = videoEl;
        
        //método para solicitar permissão para o uso da câmera
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream => {//Criando a promessa
            
            //this._videoEl.src = URL.createObjectURL(stream);//Cria arquivos no formato binário
            videoEl.srcObject = stream;
            this._videoEl.play();//método para mostrar o vídeo

        }).catch(err => {
            console.error(err);
        });
    }
}