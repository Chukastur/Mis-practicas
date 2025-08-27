const getImagenPromesa = () => {
    const promesa = new Promise ((resolve, reject) => {
        resolve ('https://ejemplo.com')
    });
    return promesa
};

getImagenPromesa().then (console.log);

// todo se simplifica con una asyncronia asi:

const getImagen = async () => {

    return 'https://ejemplo.com'
};

getImagen().then (console.log);

// await

const getImagen2 = async () => {
    try {

        const apiKey = '';
        const resp = await fetch (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json (); 
        const {url} = data.images.original;

        const img = document.createElement ('img');
        img.src = url ;
        document.body.append (img); 

    } catch (error) {                   // manejo del error
        console.log (error)
    }
}

getImagen2();
 
