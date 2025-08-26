import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";


export const TodoApp = () => {

  const [todoId, setTodoId ] = useState (1);
                                                 //destructuramos y renombramos data
  //const { data: todos = [] , isLoading } = useGetTodosQuery ();
  const { data: todo, isLoading } = useGetTodoByIdQuery (todoId); 
  
  const nextTodo = () => { 
    setTodoId ( todoId + 1 );
  };

  const prevTodo = () => { 
    if ( todoId === 1) return;
    setTodoId ( todoId - 1 );
  };
  

  return (
   <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading...{ isLoading ? 'Tue' : 'False'}</h4>

      <pre>{ JSON.stringify ( todo )}</pre>

      <button onClick={ prevTodo }>
        Prev Todo
      </button>
      <button onClick={ nextTodo }>
        Next Todo
      </button>
   </>
  );
};
