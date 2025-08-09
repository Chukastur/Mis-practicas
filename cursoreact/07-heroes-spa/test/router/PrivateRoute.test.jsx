import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router";
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en el <PrivateRoute />', () => {  

    test('debe de mostrar el children si esta autenticado ', () => { 
        
        const contextValue ={
            logged: true,
            user:{
                id: '1234',
                name: 'Fernando',
            }           
        };
        
        render (
            <AuthContext.Provider value ={ contextValue }>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect (screen.getByText ('Ruta privada')).toBeTruthy();
        
    });

    test('debe de llamar a localStorage para guardar la ruta', () => { 

        Storage.prototype.setItem = jest.fn ();         // Creamos un mock de localStorage

        const contextValue ={
            logged: true,
            user:{
                id: '1234',
                name: 'Fernando',
            }           
        };
        render (
            <AuthContext.Provider value ={ contextValue }>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect ( localStorage.setItem ).toHaveBeenCalled ();
        expect ( localStorage.setItem ).toHaveBeenCalledWith ( "lastpath", "/" );

    });
    

});