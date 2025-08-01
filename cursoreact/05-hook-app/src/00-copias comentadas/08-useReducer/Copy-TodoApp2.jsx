import { useReducer } from "react";
import { TodoList } from "./Copy-TodoList";
import { TodoAdd } from "./TodoAdd";
import { todoReducer } from "./todoReducer";

const initialState = []                   // Estado inicial de las tareas (un arreglo vacio)

const init = () => {                      // Función para inicializar el estado desde localStorage
    return JSON.parse( localStorage.getItem('todos') ) || []; //JSON.parse convierte el string de vuelta a un objeto (contrario de JSON.stringify)
};                                        // "||" ->(condicional) Si no hay datos en localStorage, retorna un arreglo vacío

export const TodoApp = () => {            // Componente funcional principal
                                          // useReducer: Hook para manejar estado complejo, con reducer y estado inicial
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );   
                                          // todos (estado actual), dispatch (función para enviar acciones al reducer)
                                          // Funcion init se ejecuta una vez al inicio para cargar el estado desde localStorage
    useEffect(() => {                     // Efecto que se ejecuta cada vez que cambia 'todos' (como dependencia [todos])
        localStorage.setItem('todos', JSON.stringify( todos )); // Guarda las tareas en localStorage
    }, [ todos ])                         // JSON.stringify: Convierte el array JavaScript a string para guardarlo

    const handleNewTodo = ( todo ) => {   // Función para manejar la adición de un nuevo todo
        const action = {                  // Crea una acción con tipo y payload
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch( action );               // Envía la acción al reducer para actualizar el estado
    };

    const handleDeleteTodo = ( id ) => {  // Función para eliminar tarea
        dispatch({                        // Dispatch directo (sin variable intermedia)
            type: '[TODO] Remove Todo',   // Tipo: eliminar
            payload: id                   // ID de la tarea a eliminar
        });                               // useEffect detectará el cambio y actualizará localStorage
    };




    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7"> 
                    <TodoList               // Componente que renderiza la lista de tareas
                        todos={ todos }     // Pasa el estado actual de tareas como prop
                        onDeleteTodo={ handleDeleteTodo } // Pasa la función para eliminar tareas
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/> // Componente formulario para agregar nuevas tareas 
                </div>                      // Pasa la función para añadir todo
            </div>
    </>
);};
