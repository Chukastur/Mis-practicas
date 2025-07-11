const apiKey = '5oQ1SpAbmMvbdMixCbCZFMjxMngUCCdw';

const peticion = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

 

peticion
    .then ( resp => resp.json () )
    .then (({data}) => {
        const {url} = data.images.original
        
        const img = document.createElement ('img')
        img.src = url                                // esto crea la imagen

        document.body.append (img)                  // esto manda la imagen
        
    })
    .catch (console.warn);



