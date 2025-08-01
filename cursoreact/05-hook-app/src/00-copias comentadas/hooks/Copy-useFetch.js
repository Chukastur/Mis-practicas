import { useEffect, useState } from "react"

const localCache = {};                                      // Declaramos constante localCache como objeto vacio


export const useFetch = ( url ) =>{                         // Recibe una URL como parámetro, lo que hace al hook reutilizable

    const [ state, setState] = useState({                   // Define el estado inicial del hook
        data: null,                                         // Aquí se almacenan los datos de la API
        isLoading:true,                                     // Indica si la petición está en curso
        hasError: false,                                    // Indica si hubo un error
        error: null,                                        // Detalles del error (objeto con código y mensaje)
    });

    useEffect(() => {                                       // useEffect se ejecuta cada vez que la URL cambia
        setLoadingState ();                                 // Cambia a loading ANTES de cada fetch (al pulsar un botón)
        getFetch ();                                        // Llama a getFetch cada vez que la URL cambia
    }, [url]);                                              // Dependencia: url

    const setLoadingState = () => {                         // Función para resetear el estado a "cargando" (útil si quieres reiniciar la carga)
        setState({
            data: null,
            isLoading:true,
            hasError: false,
            error: null,
        })
    }

    const getFetch = async () => {                          // Función asíncrona principal que realiza la petición

        if ( localCache[url] ) {                            // Si ya tenemos la respuesta en cache, no hacemos la petición
            console.log('Usando caché');            
            setState({                                      //  Usa setState para actualizar el estado
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        };

        const resp = await fetch ( url );                   // Realiza la petición fetch a la URL

        await new Promise ( resolve => setTimeout(resolve, 1500));  // Sleep artificial de 1.5s para simular latencia

        if ( !resp.ok ){                                    // Manejo de errores HTTP
            setState({                                      // Actualiza el estado con información del error
                data: null,
                isLoading:false,
                hasError: true,
                error: {
                    code: resp.status,                      // Código de error HTTP
                    message: resp.statusText,               // Mensaje del error
                }      
            });
            return;                                         // Detiene el código si hay error
        };

        const data = await resp.json ();                    // Parsea la respuesta a JSON (espera a que termine)
        setState({                                          // Actualiza el estado con los datos exitosos                                     
            data: data,
            isLoading: false,
            hasError: false,
            error: null,        
        });

        console.log({data});                                // Log para debugging

        // Manejo del caché
        localCache [ url ] = data;                            // Guarda los datos en caché
    };
    

    return {                                                // Retorna solo los datos necesarios 
        data: state.data,
        isLoading:state.isLoading,
        hasError: state.hasError,
    };


}; 