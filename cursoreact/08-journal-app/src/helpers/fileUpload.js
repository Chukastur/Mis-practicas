export const fileUpload = async ( file) => {
  // if ( !file ) throw new Error ( 'No hay ningún archivo que subir' );
  if ( !file ) return null;
  if ( file.size === 0 ) return null;
  
  const cloudUrl = 'https://api.cloudinary.com/v1_1/react-journal/upload';
  
  const formData = new FormData ();
  formData.append ( 'upload_preset', 'react-journal' );
  formData.append ( 'file', file );
  formData.append('api_key', '413315133859612' );

  try {
    const resp = await fetch ( cloudUrl, {
      method: 'POST',
      body: formData     
    });

    if ( !resp.ok ) throw new Error ( 'No se pudo subir la imagen' );

    const cloudResp = await resp.json ();

    return cloudResp.secure_url;

  } catch (error) {
    throw new Error ( error.message );
  }
 
};