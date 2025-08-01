import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {     // Recibe la función del padre para notificar nueva tarea como prop
                        // useForm: Hook personalizado para manejar el formulario(descripción y funciones onChange y onResetFrom)
    const { description, onInputChange, onResetForm } = useForm({ // onInputChange: Función para actualizar description al escribir
        description: ''                          // Estado inicial del campo de descripción
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();                 // Previene el comportamiento por defecto del formulario (recargar la página)
        if ( description.length <= 1 ) return;  // Valida que la descripción tenga al menos 2 caracteres

        const newTodo = {        // Crea un nuevo objeto de tarea con un ID único y la descripción ingresada 
            id: new Date().getTime(),       // Genera un ID simple (como en el estado inicial)
            description: description,       // Usa la descripción del input (formulario)
            done: false,
        };

        onNewTodo ( newTodo );              // Llama a la función prop para notificar la nueva tarea
        onResetForm();                      // Limpia el input después de agregar
    };

    return (
        <form onSubmit={ onFormSubmit }>    // El formulario ejecuta onFormSubmit al enviar
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }       // Valor controlado por el estado
                onChange={ onInputChange }  // Actualiza el estado al escribir
            /> 
            <button
                className="btn btn-outline-primary mt-1"
                type="submit"
            >
            Agregar
            </button> 
        </form>
    );
};
