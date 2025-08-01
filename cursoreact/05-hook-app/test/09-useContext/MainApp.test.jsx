import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Pruebas en <MainApp />', () => { 
    
    test('debe de mostrar el Homepage', () => { 
        
        render (
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect ( screen.getByText ( 'HomePage' ) ).toBeTruthy ();

     });

    test('debe de mostrar el Login', () => { 
        
        render (
            <MemoryRouter initialEntries={[ '/login' ]}>
                <MainApp />
            </MemoryRouter>
        );

        expect ( screen.getByText ( 'Login' ) ).toBeTruthy ();

     });

});