import { fileUpload } from '../../src/helpers/fileUpload';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config ({
  cloud_name:'dkpe5thi1',
  api_key:'157635693971556',
  api_secret:'f7B_AULaf9aOVsyXzxohvphhHrM',
  secure: true
});

describe('Pruebas en fileUpload', () => {  

  test('debe subir el archivo correctamente a cloudnary', async  () => { 

    const imageUrl = 'https://picsum.photos/id/237/200/300';
    const resp = await fetch ( imageUrl );
    const blob = await resp.blob ();
    const file = new File ([ blob ], 'foto.jpg')
    
    const url = await fileUpload ( file );
    expect ( typeof url ).toBe ('string');

    //console.log(url);

    const segments = url.split('/');
    const imageId = segments [ segments.length -1 ].replace ('.jpg','');

    await cloudinary.api.delete_resources( imageId );      
  });   

  test('debe de retornar null', async () => { 
     
    const file = new File([], 'foto.jpg' );
    
    const url = await fileUpload ( file );
    expect ( url ).toBe ( null )
    
  });

});
