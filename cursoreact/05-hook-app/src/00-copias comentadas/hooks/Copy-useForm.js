import { useState } from "react";

export const useForm = ( initialForm = {} ) => {                 // Define un hook personalizado llamado useForm que recibe un objeto inicial (opcional)
                                            // Define un estado "inicial" con propiedades comunes, pero permite sobrescribirlo desde el parámetro initialForm

    const initialState = {                                      // Destructuración. Sobrescribe las propiedades de initialForm si existen
        username: '',                                                   
        email: '',
        password: '',                       //Usa el spread operator para mezclar las propiedades de initialForm con las del objeto inicialState
        ...initialForm                                           
    };

    const [formState, setFormState] = useState ( initialForm );  // useState recibe la condición de objeto de InitialForm
    // Usa el hook useState para manejar el estado del formulario, inicializándolo con initialForm (no con initialState)

    const onInputChange = ( { target } ) => {                    // Función que maneja los cambios en los inputs del formulario, recibiendo el evento como argumento
    const { name, value } = target ;                             // Extrae name y value del input que diparo el evento

    setFormState ({                                              // Actualiza el estado del formulario, manteniendo el resto de propiedades y
        ...formState,                                            // cambiando solo la que corresponda al "name" del input
        [ name ]: value
        });     
    };

    const onResetForm = () => {                                  // Función para resetear el formulario a su estado inicial (el que se pasó como parámetro al hook)
    setFormState ( initialForm ) 
    };

    
    return{                                                      // Retorna las propiedades del estado expandidas, el estado, la función onChange
        ...formState,                                            // Desestructura todas las propiedades del estado actual del formulario
        formState,                                               // El estado completo del formulario (útil si se usa directamente)
        onInputChange,                                           // Función para manejar los cambios en los inputs
        onResetForm  
    };                                                           // Función para resetear el formulario   

};

