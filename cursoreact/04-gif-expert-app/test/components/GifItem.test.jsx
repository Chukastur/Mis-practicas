import { render, screen } from '@testing-library/react';
import { GifItem } from "../../src/components/GifItem"; 

describe ('Pruebas en <Gift Item />', () =>{

    const title = 'Fernando';
    const url   = 'https:///ejemplo.com';

    test ('debe de hacer match con el snapshot', () =>{
        
        const { container } = render ( <GifItem title= { title } url= { url }/>);
        expect ( container ).toMatchSnapshot ();
    })     
    
    test('Debe mostrar la iamgen con el URL y el ALT indicado', () => {

        render ( <GifItem title= { title } url= { url }/>);
        //screen.debug ();
        //console.log (screen.getByRole('img').src);
        expect ( screen.getByRole('img').getAttribute('src')).toBe ( url );
        expect ( screen.getByRole('img').getAttribute('alt')).toBe ( title );
    });

        test('Debe mostrar el titulo en el componente', () => {

        render ( <GifItem title= { title } url= { url }/>);
        expect ( screen.getByText (title) ).toBeTruthy();
    });
});