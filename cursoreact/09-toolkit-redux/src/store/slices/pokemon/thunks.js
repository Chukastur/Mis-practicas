import { setPokemons, startLoadingPokemons } from "../"
import { pokemonApi } from '../../../api/pokemonApi';


export const getPokemons = ( page = 0 ) => {

  return async ( dispatch, getState ) => { 
  
    dispatch ( startLoadingPokemons () );

    // Con Fetch - await
    // const resp = await fetch ( `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
    // const data = await resp.json (); 

    // Con Axios
    const { data } = await pokemonApi.get( `/pokemon?limit=10&offset=${ page * 10 }`);
    

    dispatch ( setPokemons ({ pokemons: data.results, page: page + 1 }) );
  };
};