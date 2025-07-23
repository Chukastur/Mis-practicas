import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';                                                       // Hay que importar la libreria testing del dom para poder usar toBeInTheDocument
import { GifExpertApp } from "../../../src/GifExpertApp"


describe('Pruebas en <GifExpertApp />',  () => { 

  test('onAddCategory debe evitar duplicados', () => { 

    render ( <GifExpertApp /> );

    fireEvent.input(screen.getByRole('textbox'), { target: { value: 'Boston Celtics' } });  // Simula escribir en el input
    fireEvent.submit(screen.getByRole('form'));                                             // Simula enviar el formulario
    const items = screen.getAllByText('Boston Celtics');                                    // Busca todos los elementos con ese texto                                   
    expect(items.length).toBe(1);                                                           // Verifica que solo haya uno (no duplicado)

  });  

  test('setCategories debe añadir un item nuevo de la lista', () => { 

    render ( <GifExpertApp /> );

      const input = screen.getByRole ('textbox');                                             // Busca el input          
      fireEvent.input ( input, { target: { value: 'newCategory' } });                         // Simula escribir una nueva categoría

      const form = screen.getByRole ('form');                                                 // Busca el formulario
      fireEvent.submit ( form );                                                              // Simula enviar el formulario
      expect (screen.getByText('newCategory')).toBeInTheDocument ()                         // Verifica que el nuevo texto aparezca en pantalla

  });

 });