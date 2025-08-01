import  { useRef, useLayoutEffect, useState } from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {             // Definición del componente PokemonCard que recibe id, name y sprites como props

  const h2Ref = useRef ();                                              // useRef: crea una referencia mutable para el elemento h2 del DOM     
  const [ boxSize, setBoxSize ] = useState({ width: 0, height: 0 });    // useState: crea un estado para guardar el tamaño (height/width) del elemento h2  

  useLayoutEffect(() => {                                               // useLayoutEffect: se ejecuta sincrónicamente después de cualquier mutación del DOM y antes de que el navegador pinte
    const { height, width } = h2Ref.current.getBoundingClientRect();    // Obtiene las dimensiones del elemento h2 usando getBoundingClientRect()
    setBoxSize({ height, width });                                      // Actualiza el estado boxSize con las dimensiones obtenidas  
  }, [name]);                                                           // Dependencia: se ejecuta cuando el nombre del Pokémon cambia  

  return (
    <section style={{ height: 200, display: 'flex', flexDirection: 'row' }}>  // Sección que contiene el título y las imágenes del Pokémon
      <h2                                                               // h2 que muestra el ID y el nombre del Pokémon
          ref= {h2Ref} 
          className='text-capitalize'>
          #{id} - { name }
        </h2> 

        <div>                                                           // Div que renderiza las imágenes sprites del Pokémon
            {sprites.map ( sprite => (
            <img key={ sprite } src={ sprite } alt={ name }/>
          ))}
        </div>

        <pre>                                                          // Preformateado que muestra el tamaño del elemento h2 en formato JSON          
          { JSON.stringify(boxSize) } 
        </pre>

    </section>
  );
};
 