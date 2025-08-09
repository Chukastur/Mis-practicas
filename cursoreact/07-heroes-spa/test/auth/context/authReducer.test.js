import { authReducer, types } from "../../../src/auth"


describe('Pruebas en authReducer', () => { 

    const initialState = {
        logged: false,
        user: null
    };

    test('debe retornar el estado por defecto ', () => { 

        const newState = authReducer ( initialState, {} );

        expect ( newState ).toBe ( initialState );
    });

    test('debe de llamar a login y establecer el usuario ', () => { 

        const action = { 
            type: types.login,
            payload: { type: 'login', name: 'Fernando' } 
        };
        
        const newState = authReducer ( initialState, action );
        expect (newState).toEqual({
            logged: true, 
            user: action.payload 
        });
       

    });
    
    test('debe de llamar a logout y borrar el nombre del usuario ', () => { 

        const action = { 
            type: types.logout,
        };
        
        const newState = authReducer ( initialState, action );
        expect ( newState.logged ).toBe ( false );
        expect ( newState.user ).toBeFalsy ();


    });

 });