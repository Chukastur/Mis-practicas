import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-Strings', () => { 

    test('getSaludo debe retornar "Hola Fernando"', () => { 

        const name = 'Fernando';
        const message = getSaludo( name );
        
        expect ( message ).toBe ( `Hola ${ name }` )

     })
 })