import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";

const mockedUseNavigate = jest.fn();

jest.mock ("react-router-dom", () => ({
    ...jest.requireActual ( "react-router-dom"),
    useNavigate : () => mockedUseNavigate
}));

describe('Pruebas en <SearchPage />', () => { 

    beforeEach ( () => jest.clearAllMocks() );


    test('debe de mostrarse con los valores por defecto', () => { 

        const { container } = render (
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect ( container ).toMatchSnapshot ();

    });

    test('debwe de mostrar a Batman y el input con el valor del query String', () => { 

        render (
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole ( 'textbox' );
        expect ( input.value ).toBe ( 'batman' )

        const img = screen.getByRole ( 'img' );
        expect ( img.src ).toContain ( 'batman.jpg' );

        const divSearch = screen.getByLabelText ( 'testItem' );
        expect ( divSearch.style.display ).toBe ( 'none' );
    });

    test('debe de mostrer un error si no se encuentra el hero (batman123) ', () => { 

        render (
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const divError = screen.getByLabelText ( 'testItem2' );
        expect ( divError.style.display ).toBe ( '' );

    });

    test('debe de llamar el navigate a la pantalla nueva', () => {  

        const inputValue = 'superman';

        render (
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );
        
        const input = screen.getByRole ( 'textbox' );
        fireEvent.change ( input, { target: { name: 'searchText', value: inputValue }} );
        const form = screen.getByLabelText ( 'form' );
        fireEvent.submit ( form );

        expect ( mockedUseNavigate ).toHaveBeenCalledWith ( `?q=${ inputValue }` );
        

    });

}); 