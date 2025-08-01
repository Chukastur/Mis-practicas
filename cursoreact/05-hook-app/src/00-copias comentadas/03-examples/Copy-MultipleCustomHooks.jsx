import React from 'react';
import { useFetch, useCounter } from '../hooks';
import { LoadingMesage } from './LoadingMesage';
import { PokemonCard } from './Copy-PokemonCard';

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter ( 1 );     // Utiliza el custom hook useCounter, que devuelve un contador y funciones para suma y resta. Valor inicial 1
    const { data, hasError, isLoading } = useFetch (`https://pokeapi.co/api/v2/pokemon/${ counter }`);  // Utiliza el custom hook useFetch para obtener datos de la API de Pokémon.
                                                                        // La URL se construye dinámicamente usando el valor actual del contador
    return (
        <>
            <h1>Información de Pokémon</h1>
            <hr />

            { 
                isLoading 
                ? <LoadingMesage />                                     // Si isLoading es true, muestra un componente de carga
                : (                                                     // Si isLoading es false, muestra el Pokémon con la información obtenida
                    <PokemonCard
                        id={ counter } 
                        name={ data.name }
                        sprites={ [
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shyny,
                        ]}
                    />
                )
            }

            <button                                                     // Botón "Anterior" que decrementa el contador, pero solo si counter > 1
                className = "btn btn-primary mt-2"                      // mt = marginTop
                onClick = { () => counter > 1 ? decrement (1) : null }      

            >
                Anterior
            </button>

            <button
                className = "btn btn-primary mt-2"     
                onClick = { () => increment (1) }                      // Botón "Siguiente" que incrementa el contador
            >
                Siguiente 
            </button>
        </>
    );
}; 