import React from 'react';
import { useFetch, useCounter } from '../hooks';
import { PokemonCard, LoadingMesage  } from '../03-examples';


export const Layout = () => {

    const { counter, increment, decrement } = useCounter ( 1 );
    const { data, hasError, isLoading } = useFetch (
        `https://pokeapi.co/api/v2/pokemon/${ counter }`);    

    return (
        <>
            <h1>Información de Pokémon</h1>
            <hr />

            { 
                isLoading 
                ? <LoadingMesage /> 
                : (
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
                className = "btn btn-primary mt-2"          //mt = marginTop
                onClick = { () => counter > 1 ? decrement (1) : null }    

            >
                Anterior
            </button>

            <button
                className = "btn btn-primary mt-2"      
                onClick = { () => increment (1) }    
            >
                Siguiente 
            </button>
        </>
    );
}; 