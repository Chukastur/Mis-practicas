import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from "./";


export const PokemonApp = () => {

  const dispatch = useDispatch ();

  useEffect ( () => {       
    dispatch ( getPokemons () );  
  }, []);

  const { pokemons, isLoading, page } = useSelector( state => state.pokemons);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading:{ isLoading ? 'True' : 'False'}</span>
      <ul>
        {
          pokemons.map  (pokemon => (
            <li key={ pokemon.name } >{ pokemon.name }</li>
          ))
        }
      </ul>
      <button 
        disabled ={ isLoading ? 'disabled' : '' }
        onClick={ () => dispatch ( getPokemons ( page ))}
      >
        Next
      </button>
    </>
  );
};
