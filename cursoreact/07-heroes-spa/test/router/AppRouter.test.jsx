import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el <AppRouter/>', () => {  

    test('debe de mostrar el login si no estoy autenticado ', () => { 

        const contextValue = {
            logged: false,
        }
        
        render (
            <MemoryRouter initialEntries={[ '/marvel' ]}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect ( screen.getAllByText ( 'Login' ).length ).toBe (2);
        
    });

    test('debe de mostrar el componente de moarvel si esta autenticado ', () => { 

        const contextValue ={
            logged: true,
            user:{
                name: 'Fernando',
                id: '123'
            }
        };

        render (
            <MemoryRouter initialEntries={[ '/login' ]}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect ( screen.getByText ( 'MarvelPage' )).toBeTruthy();
        expect ( screen.getAllByText ( 'Marvel' ).length ).toBeGreaterThanOrEqual (1);


     })

});