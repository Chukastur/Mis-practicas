describe('Pruebas en <DemoComponent />', () => {  


    test ('Esta prueba de debe de fallar', () => {

        // 1. Imiciaización
        const message1 = 'Hola Mundo';

        // 2. Estímulo
        const message2 = message1.trim ();

        //3. Observar el comportamiento
        expect ( message1 ).toBe ( message2 )

    }); 
});
