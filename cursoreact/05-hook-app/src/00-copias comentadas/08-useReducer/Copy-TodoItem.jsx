

export const TodoItem = ({ todo, onDeleteTodo }) => {                       // Ahora recibe AMBAS props: todo y onDeleteTodo
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ todo.description }</span> // Muestra la descripción de la tarea
            <button 
                className="btn btn-danger"
                onClick={ () => onDeleteTodo (todo.id) }                    // Ejecuta la función de eliminar pasando el ID
            >Borrar</button>
        </li>
    );
};
