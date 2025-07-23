import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import { GifExpertApp } from "../../src/GifExpertApp"


describe('Pruebas en <GifExpertApp />',  () => { 

  test('onAddCategory debe evitar duplicados',  () => { 

    render ( <GifExpertApp /> );

    fireEvent.input(screen.getByRole('textbox'), { target: { value: 'Boston Celtics' } });
    fireEvent.submit(screen.getByRole('form'));
    const items = screen.getAllByText('Boston Celtics');
    expect(items.length).toBe(1);    

  });  

  test('setCategories debe añadir un item nuevo de la lista',  () => { 

    render ( <GifExpertApp /> );

      const input = screen.getByRole ('textbox');                     
      fireEvent.input ( input, { target: { value: 'newCategory' } });  

      const form = screen.getByRole ('form');
      fireEvent.submit ( form );                                     
      expect (screen.getByText('newCategory')).toBeInTheDocument ()
  });

 });