import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById ( id );

        expect ( hero ).toEqual ({ id: 1, name: 'Batman', owner: 'DC' })
        
    });

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById ( id );

        expect ( hero ).toBeFalsy ();
    });

    test('getHeroeByOwner debe retornar un arreglo con con los héroes de DC ', () => {

        const owner = getHeroesByOwner ( 'DC' ) ;
        const names = owner.map ( obj => obj.name);

        expect ( owner.length ).toBe ( 3 );
        expect ( names ).toEqual ( ['Batman', 'Superman', 'Flash'] )
        
    });

    test('getHeroeByOwner debe retornar un arreglo con con los héroes de Marvel ', () => {

        const owner =  getHeroesByOwner ( 'Marvel' ) ;

        expect ( owner.length ).toBe ( 2 );      
        
    });


 }) 