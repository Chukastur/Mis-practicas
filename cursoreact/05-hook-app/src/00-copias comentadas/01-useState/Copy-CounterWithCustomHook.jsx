import { useCounter } from '../../hooks/useCounter.js';


export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter ();     // Desestructura el valor y las funciones del custom hook

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button className="btn btn-primary" 
                onClick={ () => increment ( 2 ) }                       // Incrementa el contador en 2 al hacer click         
            >+1</button>
            
            <button className="btn btn-primary"                         // Restablece el contador cuando se hace click     
                    onClick={ reset }
            >Reset</button>

            <button className="btn btn-primary"                         // Decrementa el contador en 2 al hacer click   
                    onClick={ () => decrement ( 2 )}
            >-1</button>

        </>
    );
};
