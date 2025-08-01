import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';


describe('Pruebas en <HomePage />', () => {  

    const user ={
        id: 1,
        name: 'Fernando'
    };

    test('debe de mostrar el componente sin el usuario', () => { 

        render ( 
            <UserContext value={{ user: null }}>
                <HomePage />
            </UserContext>    
        );

        const preTag = screen.getByLabelText ( 'pre' );
        expect ( preTag.innerHTML ).toBe ('null'); 
    });

    test('debe de mostrar el componente CON usuario', () => {  

        render ( 
            <UserContext value={{ user }}>
                <HomePage />
            </UserContext>    
        );

        const newUser = screen.getByText ('Fernando');
        expect ( newUser.innerHTML ).toContain ( 'Fernando' );

    });

});