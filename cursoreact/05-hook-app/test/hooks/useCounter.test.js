import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en useCounter',  () => { 
    
    test('debe retornar los valores por defecto', () => { 

        const { result } = renderHook (() => useCounter () );
        const { counter, decrement, increment, reset } = result.current;

        expect ( counter ).toBe (1);
        expect ( decrement ).toEqual ( expect.any ( Function ) );
        expect ( increment ).toEqual ( expect.any ( Function ) );
        expect ( reset ).toEqual ( expect.any ( Function ) );
    });

    test ('debe de generar el counter con el vaor de 100', () => {

        const { result } = renderHook (() => useCounter (100) );
        const { counter } = result.current;
        
        expect ( counter ).toBe (100);
    });

        test('debe incrementar el contador', () => { 

            const { result } = renderHook (() => useCounter () );
            const { counter, increment } = result.current;

            act ( () => {
                increment ();
                increment ( 2 );
            })

            expect ( result.current.counter ).toBe ( 4 );

        });

        test('debe decrementar el contador', () => { 

            const { result } = renderHook (() => useCounter () );
            const { counter, decrement } = result.current;

            act ( () => {
                decrement ();
                decrement ( 2 );
            })

            expect ( result.current.counter ).toBe ( -2 );

        });

        test('debe de resetear el contador', () => { 

            const { result } = renderHook (() => useCounter () );
            const { counter, decrement, reset } = result.current;

            act ( () => {
                decrement ();
                reset ();
            })

            expect ( result.current.counter ).toBe ( 1 );

        });

});