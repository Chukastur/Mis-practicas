

const initialState = [{                                         // Estado inicial del reducer: un array con un solo "todo"
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}];
                                                                // Reducer: devuelve un nuevo estado según la acción recibida
const todoReducer = ( state = initialState, action = {} ) => {  // state = initialState (si no se pasa, toma este valor por defecto)
                                                                // action = {} (si no se pasa, action es un objeto vacío, evitando errores de acceso a .type)
    if ( action.type === '[TODO] Add Todo' ) {                  // Si la acción es de tipo '[TODO] Add Todo'   
        return [ ...state, action.payload ];                    // Retorna un nuevo estado que es el estado actual del array, más el nuevo "todo" (action.payload)
    }
    return state;                                               // Si no es esa acción, retorna el estado actual sin cambios    
}

let todos = todoReducer();                                      // Primera ejecución del reducer: obtiene el estado inicial (por defecto)

const newTodo = {                                               // Nuevo "todo" que se quiere agregar    
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
};  

const addTodoAction = {                                         // Acción para agregar un nuevo "todo" al estado del reducer
    type: '[TODO] Add Todo',                                    // Tipo de la acción: '[TODO] Add Todo'
    payload: newTodo                                            // Payload de la acción: el nuevo "todo" que se quiere agregar
};

todos = todoReducer( todos, addTodoAction );                    // Segunda ejecución del reducer: aplica la acción de agregar un nuevo "todo" 
                                                                // Se pasa el estado actual (todos) y la acción (addTodoAction)
console.log({state: todos});
