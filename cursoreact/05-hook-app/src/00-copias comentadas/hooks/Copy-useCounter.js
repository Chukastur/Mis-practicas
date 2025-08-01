import { useState } from 'react';


export const useCounter = ( initialValue = 1) => {                     // Define un custom hook llamado useCounter con valor inicial opcional

    const [ counter, setCounter ] = useState ( initialValue );          // useState devuelve el valor del estado (counter) y una función para actualizarlo (setCounter)

    const increment = ( valor = 1 ) => {                                // Función para incrementar el contador
        setCounter ( counter + valor );                                 // Aumenta counter usando el valor proporcionado
    }

    const decrement = ( valor = 1 ) => {                                // Función para decrementar el contador (indicamos un valor por defecto para que sea un numero y no un string)
        if ( counter === 0) return;                                     // Si el contador es cero no ejecuta la funcion de restar
        setCounter ( counter - valor );
    }    

    const reset = () => {                                               // Le da a counter el valor inicial
        setCounter ( initialValue );
    }

    return {                                                            // Retorna un objeto con el estado y las funciones
        counter,
        increment,
        decrement,
        reset,
    };
};