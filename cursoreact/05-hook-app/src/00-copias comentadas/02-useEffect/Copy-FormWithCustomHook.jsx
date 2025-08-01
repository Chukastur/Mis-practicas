import { Message } from "./Message";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm, username, email, password } = useForm({    
    email: '',                         // Utiliza el hook useForm, desestructurando lo que retorna                     
    username:'',
    password: ''
  });

  return (
    <>
        <h1>Formulario con custom Hooks</h1>
        <hr />

        <input 
          type="text" 
          className="form-control"
          placeholder="Username"
          name="username"
          value={ username }
          onChange={ onInputChange }        
        /> 

        <input 
          type="email"
          className="form-control mt-2"
          placeholder="fernando@gmail.com"
          name="email"        
          value={ email }
          onChange={ onInputChange }        
        
        />   
        
        <input 
          type="password"
          className="form-control mt-2"
          placeholder="Contraseña"
          name="password"        
          value={ password }
          onChange={ onInputChange }        
        />

        <button 
          onClick={ onResetForm }
          className="btn btn-primary mt-2"
          >Borrar</button> 
        
    </>

  );
};
