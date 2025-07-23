import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 

    test('Debe cambiar el valor de la caja de texto', () => { 

        render ( <AddCategory />);                                      // Renderiza el componente AddCategory en el entorno de pruebas
        const input = screen.getByRole ('textbox');                     // Obtiene el elemento input (caja de texto) del DOM renderizado

        fireEvent.input ( input, { target: { value: 'Saitama' } })      // Simula que el usuario escribe 'Saitama' en el input

        expect ( input.value ).toBe ('Saitama');                        // Verifica que el valor del input sea efectivamente 'Saitama'
        
    });

        test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';                                   // Valor de prueba para el input

        render ( <AddCategory onNewCategory = { () => {} } />);         // Renderiza el componente con una función vacía como prop ya que onNewCategory es una función

        const input = screen.getByRole ('textbox');                     // Obtiene el elemento input del DOM
        const form  = screen.getByRole ('form')                         // Obtiene el elemento form del DOM
        
        fireEvent.input ( input, { target: { value: inputValue } });    // Simula que el usuario escribe en el input 
        fireEvent.submit ( form );                                      // Simula el envío del formulario

        expect ( input.value ).toBe('');                                // Verifica que el valor del input se haya limpiado después del submit

    });

        test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue    = 'Saitama';                                // Valor de prueba para el input
        const onNewCategory = jest.fn();                                // Mock que simula la funcion

        render ( <AddCategory onNewCategory = { onNewCategory } /> );   // Renderiza el componente 

        const input = screen.getByRole ('textbox');                     // Obtiene el input     
        const form  = screen.getByRole ('form')                         // Obtiene el formulario
        
        fireEvent.input ( input, { target: { value: inputValue } });    // Simula escritura en el input 
        fireEvent.submit ( form );                                      // Simula envío del formulario

        expect ( input.value ).toBe('');                                // Verifica que el input se limpió tras el submit

        expect ( onNewCategory ).toHaveBeenCalled();                    // Verifica que se llamó la función
        expect ( onNewCategory ).toHaveBeenCalledTimes( 1 );            // Verifica que se llamó la función una vez
        expect ( onNewCategory ).toHaveBeenCalledWith( inputValue );    // Verifica que se llamó con el valor correcto

    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();                                // Mock de función

        render ( <AddCategory onNewCategory = { onNewCategory } /> );   // Renderiza el componente 

        const form  = screen.getByRole ('form');                        // Obtiene el formulario     
        fireEvent.submit ( form );                                      // Simula envío del formulario

        expect ( onNewCategory ).toHaveBeenCalledTimes( 0 );            // Verifica que no se llamó
        expect ( onNewCategory ).not.toHaveBeenCalled;                  // Alternativa para verificar que no se llamó

    });
}); 