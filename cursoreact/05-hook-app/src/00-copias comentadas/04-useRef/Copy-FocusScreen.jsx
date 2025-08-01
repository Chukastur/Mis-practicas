import { useRef } from "react";             // Importa el hook useRef de React para acceder a referencias de elementos del DOM

export const FocusScreen = () => {

    const inputRef = useRef();              // Crea una referencia para el input usando useRef

    const onClick = () => {                 // Define una función que se ejecuta al hacer clic en el botón  
        // document.querySelector('input').select();  // Comentado: forma tradicional con el DOM para seleccionar el input
        inputRef.current.select();          // Usa la referencia para enfocar/seleccionar el contenido del input directamente
    };

  return (
    <>
      <h1>Focus Screen</h1>
        <hr />                              // Muestra un título y una línea horizontal
        <input
          ref={ inputRef }                  // Asigna la referencia al input para poder manipularlo
          type="text"
          placeholder="Ingrese su nombre"
          className="form-control"
        />

        <button
          className="btn btn-primary mt-2"
          onClick={ onClick }                // Asigna la función onClick al botón para que se ejecute al hacer clic
          >
          Set Focus
        </button>
        
    </>
  );
};
