import { FirstApp } from '../src/FirstApp';
import { render, screen } from '@testing-library/react';

describe('Pruebas en <FirtsApp />', () => { 

    const title    = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';

    test ('debe hacer match con el snapshot',  () => {

        const { container } = render ( <FirstApp title = { title } /> );
        expect ( container ).toMatchSnapshot ();
        
    });

    test ('debe mostrar el mensaje "Hola, Soy Goku',  () => {

        render ( <FirstApp title = { title } /> );
        expect ( screen.getByText ( title )).toBeTruthy ();
        
    });

    test('debe de mostrar el texto en un h1', () => {

        render ( <FirstApp title = { title } /> );
        expect ( screen.getByRole ('heading', { level: 1 }).innerHTML).toContain ( title );

    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        render ( 
            <FirstApp 
                title = { title }
                subTitle = { subTitle }    
            /> 
        );
        
        expect ( screen.getAllByText ( subTitle ).length).toBe ( 1 );        

    });

}); 