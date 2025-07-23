import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../../src/components/GifGrid";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";

jest.mock ("../../../src/hooks/useFetchGifs");                  // Crea un mock de useFetchGifs para simular su comportamiento

describe('Pruebas en <GifGrid />', () => {                      

    const category = 'Celtics';                                 // Define la categoría a usar en los tests

    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue ({                         // Mock del hook: simula que está cargando y sin imágenes
            images: [],
            isLoading: true        
        });

        render (<GifGrid category={ category }/>);              
        expect ( screen.getByText( 'Cargando...' ));            // Espera que se muestre 'Cargando...'     
        expect ( screen.getByText( category ));                 // Espera que se muestre el nombre de la categoría        

    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => { 

        const gifs= [                                            // Simula un array de gifs
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

        useFetchGifs.mockReturnValue ({                         // Mock del hook: simula que la carga ha terminado y hay imágenes
            images: gifs,
            isLoading: false        
        });
        
        render (<GifGrid category={ category }/>);    
        expect( screen.getAllByRole( 'img' ).length).toBe( 2 ); // Espera que haya dos imágenes renderizadas
        
        
    });

 });