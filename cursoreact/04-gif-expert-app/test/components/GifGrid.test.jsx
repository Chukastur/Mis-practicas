import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock ("../../src/hooks/useFetchGifs");



describe('Pruebas en <GifGrid />', () => { 

    const category = 'Celtics';                                 

    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue ({
            images: [],
            isLoading: true        
        });

        render (<GifGrid category={ category }/>);              
        expect ( screen.getByText( 'Cargando...' ));            
        expect ( screen.getByText( category ));                 

    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => { 

        const gifs= [
            {
                id: 'ABC',
                title: 'Celtics',
                url: 'https://ejemplo.com'
            },
            {
                id: '123',
                title: 'Oviedo',
                url: 'https://ejemplo.com'
            }
        ];

        useFetchGifs.mockReturnValue ({
            images: gifs,
            isLoading: false        
        });
        
        render (<GifGrid category={ category }/>);    
        expect( screen.getAllByRole( 'img' ).length).toBe( 2 );
        
        
    });

 });