import { TodoItem } from "./Copy-TodoItem"

export const TodoList = ({todos = [], onDeleteTodo }) => {  // Recibe el arreglo de tareas, con valor por defecto [] si no se pasa nada, y
  return (                                                  // la función onDeleteTodo para manejar la eliminación de tareas
    <ul className="list-group">
        {
            todos.map( todo => (                            // Itera sobre cada tarea en el arreglo todos
                <TodoItem                                   // Cada TodoItem recibe la tarea, una key única y la funcion para elimnar un todo
                    key={ todo.id } 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodo } 
                />  
            ))
        }
    </ul>
    );
};
