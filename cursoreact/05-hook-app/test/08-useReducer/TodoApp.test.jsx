import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock ('../../src/hooks/useTodos')

describe('Pruebas en <TodoApp />', () => {  

    test('debe de mostrar el componente correctamente', () => { 

        useTodos.mockReturnValue ({ 
            todos:[
                { id: 1, description: 'Todo #1', done: false },
                { id: 2, description: 'Todo #2', done: false }
            ], 
            todosCount: 2, 
            pendingTodosCount: 1, 
            handleDeleteTodo: jest.fn(), 
            handleNewTodo: jest.fn(), 
            handleToggleTodo: jest.fn()
        });

        render ( <TodoApp />  );

        expect ( screen.getByText ( 'Todo #1' )).toBeTruthy ();
        expect ( screen.getByText ( 'Todo #2' )).toBeTruthy ();
        expect ( screen.getByRole ( 'textbox' )).toBeTruthy ();
    });
     
});