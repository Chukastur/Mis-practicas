import { useState } from "react";


export const CounterApp = ( { value = 0 } ) => {    

    
    const [ counter, setCounter ] = useState ( value )

    const handleAdd = () => {        
        setCounter ( counter + 1 );
        // setCounter ( (c) => c + 1 )
    }

    const handleSubstract = () => {        
        setCounter ( counter - 1 );
    }

    const handleReset = () => {        
        setCounter ( value );
    }



    if (typeof value !=  'number' ) {
    console.error("El prop 'value' debe ser un número.");
    }  

    return (
        <>
        <h1>CounterApp</h1>
        <p>{ counter }</p>

        <button onClick = { handleAdd }> +1 </button>
        <button onClick = { handleSubstract }> -1 </button>
        <button aria-label = "btn-reset" onClick = { handleReset }> Reset </button>

        </>
    );

};

    