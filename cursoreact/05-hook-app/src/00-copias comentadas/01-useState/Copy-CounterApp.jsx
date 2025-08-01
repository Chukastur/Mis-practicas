import { useState } from "react"

export const CounterApp = () => {

    const [ counter, setCounter ] = useState ({         // useState crea el estado "counter", un objeto con tres contadores
        counter1: 10,
        counter2: 20,     
        counter3: 30, 
    });

    const { counter1, counter2, counter3 } = counter    //Crea tres variables con los valores de counter1, counter2 y counter3


  return (
    <>

        <h1>Counter1: { counter1 }</h1>                 /* Muestra el valor actual de cada contador */
        <h1>Counter2: { counter2 }</h1>         
        <h1>Counter3: { counter3 }</h1>

        
        <hr/>                                           /* Línea horizontal para separar visualmente */

        <button                                         /* Botón que al hacer clic incrementa counter1 */
          className="btn" 
          onClick={ 
            () => setCounter ( {
              ...counter,                               // Copia todas las propiedades actuales del estado (un objeto)
              counter1: counter.counter1 + 1,           // Actualiza solo counter1, sumando 1
          }) 
          }
          >+1</button>

    </>
  );
};
 