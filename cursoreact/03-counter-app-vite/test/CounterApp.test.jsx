import { CounterApp } from "../src/CounterApp";
import { render, screen, fireEvent } from '@testing-library/react';



describe('Pruebas en CounterApp', () => { 

    const initialValue = 10;

    test('debe hacer match con el SnapShot', () => {

        const { container } = render ( <CounterApp value = { initialValue } /> );
        expect ( container ).toMatchSnapshot ();
        
    });

    test('debe mostrar el valor inicial de 100', () => {

        render ( <CounterApp value = { 100 } /> ); 
        expect ( screen.getByText( 100 ).innerHTML ).toBe ('100');
        
    });

    test('debe incrementar con el botón +1', () => {
        
        render ( <CounterApp value = { initialValue } /> );
        fireEvent.click ( screen.getByText ( '+1' ) );
        expect ( screen.getByText ( '11' ) ).toBeTruthy ();

    });

    test('debe decrementar con el botón -1', () => {
        
        render ( <CounterApp value = { initialValue } /> );
        fireEvent.click ( screen.getByText ( '-1' ) );
        expect ( screen.getByText ( '9' ) ).toBeTruthy ();

    });

    test('debe funcionar el botón reset', () => {

        render ( <CounterApp value = { initialValue } /> );
        fireEvent.click ( screen.getByText ( '+1' ) );
        fireEvent.click ( screen.getByText ( '+1' ) );
        fireEvent.click ( screen.getByText ( '+1' ) );
        //fireEvent.click ( screen.getByText ( 'Reset' ) );
        fireEvent.click (screen.getByRole ('button', { name: 'btn-reset' }));


        expect ( screen.getByText ( '10' ) ).toBeTruthy () ;

    });


 });     