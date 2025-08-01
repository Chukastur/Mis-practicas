
jest.mock ( '../../src/hooks', () =>({        // 1. Mockeamos los custom hooks
    useCounter: jest.fn(),
    useFetch: jest.fn()
    }) 
);



import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import {  useFetch, useCounter } from "../../src/hooks"

describe('Pruebas en <MultipleCustomHooks />', () => {

       
    test('debe de mostrar el componente por defecto', () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment: jest.fn(),
            decrement: jest.fn()
        });
        
        useFetch.mockReturnValue({
            data: null,
            hasError: false,
            isLoading: true  // ← Simula estado de carga
        });
 

        render(<MultipleCustomHooks />);


        const nextButton = screen.getByRole ('button', { name: 'Siguiente' });   
        const prevButton = screen.getByRole ('button', { name: 'Anterior' });   
        
        expect(prevButton.disabled).toBeTruthy();
        expect(nextButton.disabled).toBeFalsy();       
        
        expect ( screen.getByText ( 'Cargando' )).toBeTruthy ();
        expect ( screen.getByText ('Información de Pokémon')).toBeTruthy ();

    });

    test ('debe de mostrar un Pokémon', async () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment: jest.fn(),
            decrement: jest.fn()
        });


        useFetch.mockReturnValue({
            data:{            
                name: 'bulbasaur',
                sprites: {
                    front_default: 'url_a_imagen.png',
                    front_shiny:  'url_b_imagen.png',
                    back_default: 'url_c_imagen.png',
                    back_shiny:   'url_d_imagen.png',
                    }
                },        
            hasError: false,
            isLoading: false,
        });

        render(<MultipleCustomHooks />);

        // screen.debug ()

        const tituloPokemon = screen.getByRole('heading', { level: 2 }); 
        expect(tituloPokemon.textContent).toContain('bulbasaur'); 

    });

});