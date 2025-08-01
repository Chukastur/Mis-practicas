import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [{                                     // Estado inicial: Array de "todos" generados con IDs únicos basados en la fecha actual 
    id: new Date().getTime(),                               // Genera un ID único usando milisegundos actuales
    description: 'Recolectar la piedra del poder',
    done: false,
},
{
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del alma',
    done: false,
}];

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState ) // useReducer conecta todoReducer con el estado inicial
                        // devuelve el estado actual (todos) y dispatch (una función que se usa para enviar acciones al reducer)
    return (
        <>
            <h1>TodoApp: 10 <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        {
                           todos.map (todo =>(                              // Mapea cada "todo" y genera un elemento de lista
                                <li className="list-group-item d-flex justify-content-between"> 
                                    <span className="align-self-center">Item 1</span>           // Muestra el texto del "todo"
                                    <button className="btn btn-danger">Borrar</button>          // Botón para eliminar el "todo"
                                </li>
                           )) 
                        }
                    </ul>
                </div>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <form action="">
                    <input
                     type="text"
                     placeholder="¿Qué hay que hacer?"
                    className="form-control" 
                    />
                    <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                    ></button>
                </form>
            </div>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    );
};
