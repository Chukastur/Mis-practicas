import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { getHeroesByName, HeroCard } from "../";
import { useForm } from "../";


export const SearchPage = () => {

  const navigate = useNavigate ();
  const location = useLocation ();

  const { q = '' } = queryString.parse ( location.search ); // {} desesctructura el objeto y obtiene el valor de la q. 
                                                            // Si no refresa nada, entonces es un string vacío
  const heroes = getHeroesByName ( q );  
  
  const showSearch = ( q.length === 0 );    // Devuelve un valor booleano. Es true si "q" es igual a 0

  const showError = ( q.length > 0 ) && (heroes.length === 0)

  const { searchText, onInputChange } = useForm ({
    searchText: q
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault ();                                // Evita que se refresque la pagina cada vez que cambia el valor
    if ( searchText.trim().length <= 1) return;             // .trim elimina espacios delante y atrás del texto
    navigate ( `?q=${ searchText.toLowerCase().trim() }`);  // Añade "?q=texto introuducido" en la barra de direcciones
                                                            // sin maúscilas y sin espacios alante y atrás
  };

  return (
    <>
    <h1>Search</h1>
    <hr />
      <div className="row">

        <div className="col-5">

            <h4>Búsqueda</h4>
            <hr />
          
            <form 
              aria-label="form"
              onSubmit={ onSearchSubmit }>
              <input 
                                
                type="text" 
                placeholder="Busca un héroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-dark mt-2">
                Buscar
              </button>
            </form>
        
        </div>
        
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          <div
            aria-label="testItem" 
            className="alert alert-dark animate__animated animate__fadeIn" 
            style={{ display: showSearch ? '':'none' }}>
            Buscar un héroe         
          </div>

          <div
            aria-label="testItem2" 
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '':'none'  }}>
            No hay resultados con <b>{ q }</b>...  
          </div>

          {
            heroes.map ( hero => (                        // .map itera cada elemento del array.'heroes' array que contiene los héroes filtrados
              <HeroCard key={ hero.id } { ...hero } />    // 'hero' - cada objeto héroe individual en la iteración
            ))                                            // Prop 'key' requerida por React para identificar únicamente cada elemento 
                                                          // Spread operator - pasa todas las propiedades del objeto hero como props
          }

        </div>

      </div>
    </>

    );
};
