import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('debe de regresar el estado inicial', () => { 

        const newState = todoReducer ( initialState, {} );
        expect ( newState ).toBe ( initialState );

    });

    test('debe de agregar un todo', () => { 

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer ( initialState, action );
        expect ( newState.length ).toBe ( 2 );
        expect ( newState ).toContain ( action.payload );

    });

    test('debe de eliminar un TODO', () => { 

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer ( initialState, action );

        const action2 = {
            type: '[TODO] Remove Todo',
            payload: {
                id: 3,
                description: 'Nuevo todo #3',
                done: false
            } 
        };

        const newState2 = todoReducer ( newState, action2 );
      
        expect ( newState2.length ).toBe ( 2 );


    });

    test('debe realizar el toggle del TODO', () => { 

        const newTodo = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer ( initialState, newTodo )

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 2
        };


        const stateFinal = todoReducer ( newState, action );

        expect ( stateFinal[1].done ).toBe ( true );
        expect ( newState.length ).toBe ( 2 );

    });




});