import { renderHook, waitFor } from "@testing-library/react";                           // Importa funciones para testear hooks
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";


describe('Pruebas en el hook useFetchGifs', () => { 

    test('debe regresar el estado inicial', () => { 

        const { result } = renderHook ( () => useFetchGifs ('Celtics'));                // Renderiza el hook con una categoría
        const { images, isLoading } = result.current;                                   // Obtiene el estado actual
        
        expect ( images.length ).toBe ( 0 );                                            // Verifica que images es un array vacío al inicio
        expect ( isLoading ).toBeTruthy ();                                             // Verifica que isLoading es true al inicio

    });    

    test('debe de retornar un arreglo de imágenes e isLoading en false', async () => {  //Añade async porque vamos a usar el await

        const { result } = renderHook ( () =>  useFetchGifs ( 'Celtics') );             // Renderiza el hook

        await waitFor (
            () => expect ( result.current.images.length).toBeGreaterThan ( 0 )          // Espera hasta que images tenga elementos
        );                                                                            

        const { images, isLoading } = result.current;                                   // Obtiene el estado tras la carga

        expect ( images.length ).toBeGreaterThan ( 0 );                                 // Verifica que images tiene al menos un elemento
        expect ( isLoading ).toBeFalsy ();                                              // Verifica que isLoading es false tras la carga    

        
    });    


});
