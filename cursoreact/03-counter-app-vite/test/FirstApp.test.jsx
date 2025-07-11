import { FirstApp } from '../src/FirstApp';
import { render } from '@testing-library/react';

describe('Pruebas en <FirsApp />', () => { 
    
//     test('debe de hacer match con el snapshot', async () => {

//         const title = 'Hola, Soy Goku';
//         const { container } = render ( <FirstApp  title = { title }/> );
        
//         expect ( container ).toMatchSnapshot ();

//     });

    test('debe mostrar el titulo en un h1', async () => {

        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render ( <FirstApp  title = { title }/> );
        expect ( getByText (title) ).toBeTruthy ();

        expect ( getByTestId ('test-title').innerHTML ).toContain ( title )

        // const h1 = container.querySelector ('h1')
        // expect (h1.innerHTML).toContain ( title )

    }); 
    
    test('debe mostrar el subtitulo enviado por props', async () => {

        const title = 'Hola, Soy Goku';
        const subtitle = 'Soy Fernando';
        const { getByText } = render ( 
            <FirstApp  
                title = { title }
                subtitle= { subtitle }
            /> 
        );

        expect ( getByText (subtitle) ).toBeTruthy ();

    }); 



});