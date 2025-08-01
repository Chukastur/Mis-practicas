import { useEffect, useState } from "react";
import { Message } from "../02-useEffect/Copy-Message";


export const SimpleForm = () => {

  const [formState, setFormState] = useState({      // Estado inicial del formulario con username y email
    username:'Fernando',
    email: 'fernando@gmail.com'
  });

  const { username, email } = formState;      // Desestructuración del estado   

  const onInputChange = ( { target } ) => {   // Manejador de cambio de inputs
    const { name, value } = target ;          // Extrae name y value del input
    setFormState ({                           // Actualiza el estado manteniendo las propiedades anteriores y sobrescribiendo la cambiada
      ...formState,                           // Añade a setFormState (un objeto) todas las propiedades del estado anterior (otro objeto)
      [ name ]: value                         // Metemos entre llaves el nombre del campo que queremos actualizar
      });     

  };

  useEffect(() => {                                 
    console.log ('useEffect called!')
  }, [ ]);                                    // Sirve para que se ejecuta solo una vez, al montar el componente (se usa como dependencia un array vacio: [])

  useEffect(() => {  
    console.log ('formState changed!')        // Se ejecuta cada vez que formState cambia (name o email). Se usa como dependencia el propio formState
  }, [ formState ]);

  useEffect(() => {                           // Se ejecuta cada vez que email cambia. Se usa como dependencia el propio email
    console.log ('email changed!')
  }, [ email ]);
  

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={ username }
          onChange={ onInputChange }          // Llama a onInputChange al escribir en el input   
        />   
        
        <input 
          type="email"
          className="form-control mt-2"
          placeholder="fernando@gmail.com"
          name="email"        
          value={ email }
          onChange={ onInputChange }          // Llama a onInputChange al escribir en el input 
        
        />  

        
          {
            (username === 'Fernando') && <Message /> // Si username es igual a 'Fernando', entonces muestra el componente Message
          }
         
    </>

  );
};
