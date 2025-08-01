import React from 'react';
import { useFetch, useCounter } from '../hooks';
import { PokemonCard, LoadingMesage  } from '../03-examples';


export const Layout = () => {

    const { counter, increment, decrement } = useCounter ( 1 ); // useCounter desestructura estado (counter) y funciones para incrementar/decrementar. Se inicializa en 1 (el ID del primer Pokémon a mostrar)
    const { data, hasError, isLoading } = useFetch (            // Retorna el estado de carga (isLoading), posibles errores (hasError) y los datos (data)
        `https://pokeapi.co/api/v2/pokemon/${ counter }`);      // useFetch realiza la llamada a la API de Pokémon con el counter como ID dinámico

    return (
        <>
            <h1>Información de Pokémon</h1>
            <hr />

            { 
                isLoading 
                ? <LoadingMesage />                             // Renderizado condicional: si isLoading es true, muestra el loader;
                                                                  
                : (                                             // Si no, renderiza el PokemonCard con los datos obtenidos  
                    <PokemonCard
                        id={ counter } 
                        name={ data.name }
                        sprites={ [ 
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shiny,
                        ]}
                    />
                )
            }

            <button
                className = "btn btn-primary mt-2"                          // mt = marginTop
                onClick = { () => counter > 1 ? decrement (1) : null }      // solo funciona si counter > 1 (seguridad para no ir a IDs negativos)

            >
                Anterior
            </button>

            <button
                className = "btn btn-primary mt-2"      
                onClick = { () => increment (1) }                           // incrementa el contador y dispara una nueva petición
            >
                Siguiente 
            </button>
        </>
    );
}; 