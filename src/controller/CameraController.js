export class CameraController {

    constructor(videoEl) {

        this._videoEl = videoEl;
        
        //método para solicitar permissão para o uso da câmera
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream => {//Criando a promessa
            
            this._stream = stream;
            //this._videoEl.src = URL.createObjectURL(stream);//Cria arquivos no formato binário
            videoEl.srcObject = stream;
            this._videoEl.play();//método para mostrar o vídeo

        }).catch(err => {
            console.error(err);
        });
    }

    //método para parar de gravar câmera e microfone quando fechar a aplicação
    stop(){

        this._stream.getTracks().forEach(track => {
            track.stop();
        });

    }

    //Método para tirar uma foto
    takePicture(mimeType = 'image/png'){

        let canvas = document.createElement('canvas');

        canvas.setAttribute('height', this._videoEl.videoHeight);
        canvas.setAttribute('width', this._videoEl.videoWidth);

        let context = canvas.getContext('2d');
        context.drawImage(this._videoEl, 0, 0, canvas.width, canvas.height);

        return canvas.toDataURL(mimeType);//convert para o formato b64 picture
        
    }
}