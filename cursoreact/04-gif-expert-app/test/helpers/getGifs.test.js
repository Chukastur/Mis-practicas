 import { getGifs } from '../../src/helpers/getGifs.js'

 describe('Prueubas en getGifs()', () => { 

    test('Debe retornar un arreglo de gifs', async () => { 

        const gifs = await getGifs ('Celtics');
        expect ( gifs.length ).toBeGreaterThan ( 0 );
        expect ( gifs [0] ).toEqual ({
            id: expect.any ( String ),
            title: expect.any ( String ),
            url: expect.any ( String ),
        });
     });

  });