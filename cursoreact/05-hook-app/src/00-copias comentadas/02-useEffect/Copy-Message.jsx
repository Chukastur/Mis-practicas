import { useEffect, useState } from "react";

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 })        // Estado inicial para coordenadas del mouse

  useEffect(() => {                                           // Efecto que se ejecuta solo al montar el componente (montaje)                       

    const onMouseMove = ( { x, y} ) => {                      // Función manejadora del evento mousemove
      setCoords( { x, y } );                                  // Actualiza el estado con las nuevas coordenadas
      } 
      
    window.addEventListener( 'mousemove', onMouseMove );      // Crea un "listener" 
        
    
    return () => {                                            // Función de limpieza que se ejecuta al desmontar el componente
        
      window.removeEventListener( 'mousemove', onMouseMove ); // Elimina el "listener" para evitar memory leaks     

    }
  }, [])                                                      // Array de dependencias vacío: solo se ejecuta al montar/desmontar
  

 
  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords )}                          // Al ser un objeto, usamos JSON.stringfy, función que transforma objetos en strings
    </>                                                      // Muestra el objeto coords como string, útil para visualizar objetos
  );
};
 