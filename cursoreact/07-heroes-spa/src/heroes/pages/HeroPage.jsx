import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroeById } from "../";
import { useMemo } from "react";

export const HeroPage = () => {

    const { id } = useParams ();

    const hero = useMemo(() => getHeroeById ( id ), [id] ); 

    const navigate = useNavigate ();
    const onNavigateBack = () => {
        navigate ( -1 )
    };

    if ( !hero ) {
        return  <Navigate to="/marvel" />
    };

    console.log(hero)

    return (
        <div className="row mt-5  animate__animated animate__fadeInLeft">
            <div className="col-4 ">
                <img 
                    src={`/heroes/${ id }.jpg`} 
                    alt={ hero.superhero }
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeInRightBig">

                <h2>
                    <b>{ hero.superhero }</b>
                </h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego }</li>
                    <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance }</li>
                    <li className="list-group-item"><b>Publisher:</b> { hero.publisher }</li>
                </ul>

                <h4 className="mt-3"><b>Characters:</b></h4>
                <p className="mt-3 ms-3">{ hero.characters }</p>

                <button 
                    className="btn btn-outline-dark mt-5 float-end"
                    onClick={ onNavigateBack }
                    >Volver
                </button>
            
            </div>

        </div>
 
  
    );
};
 