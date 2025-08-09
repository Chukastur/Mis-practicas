import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock ("react-router-dom", () => ({
    ...jest.requireActual ( "react-router-dom"),
    useNavigate : () => mockedUseNavigate
}));

describe('Pruebas en <NavBar />', () => { 


    const contextValue ={
        logged: true,
        user:{
            name: 'Fernando',
            id: '123'
        },
        logout: jest.fn ()
    };

    beforeEach ( () => jest.clearAllMocks() );
    
    test('debe de mostrar el nombre del usuario', () => { 

        render (
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect ( screen.getByText ( 'Fernando' )).toBeTruthy();


    });

    test('debe de llamar a logout y navigate cuando se hace click en el botón ', () => {          

        render (
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logOutBtn = screen.getByRole ('button');
        fireEvent.click ( logOutBtn );

        expect ( contextValue.logout ).toHaveBeenCalled ();
        expect ( mockedUseNavigate ).toHaveBeenCalledWith ("/login", {"replace": true});


    });

});
