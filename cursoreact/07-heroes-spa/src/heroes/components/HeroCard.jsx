import { Link } from "react-router-dom";
import { HeroList } from './HeroList'


const CharactersByHero = ({ alter_ego, characters  }) =>{
    if ( alter_ego === characters) return (<></>);
    return ( <p>{ characters }</p> )
};

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/heroes/${id}.jpg`;

    return (
        <div className="col">
            <div className="card h-100 animate__animated animate__fadeIn">

                <div className="row no-gutters h-100">
                    
                    <div className="col-4">
                        <img 
                            src={ heroImageUrl } 
                            className="card-img h-100" 
                            alt={superhero} 
                            style={{objectFit: 'cover', minHeight: '250px'}}
                        />
                    </div>
                    
                    <div className="col-8">

                        <div className="card-body d-flex flex-column">

                            <div>
                                <h5 className="card-title">{ superhero }</h5>
                                <p className="card-text" style={{minHeight: '2em'}}>{ alter_ego }</p> 
                                <div style={{minHeight: '2em'}}>
                                    <CharactersByHero  alter_ego = {alter_ego} characters = { characters }/>     
                                </div>                                                        
                            </div>

                            <div>
                                <p 
                                    className="card-text flex-grow-1">
                                    <small className="text-muted">{ first_appearance }</small>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card-footer d-flex flex-column">
                    <Link 
                        to={`/hero/${ id }`}
                        className="btn btn-outline-dark btn-sm"
                    >
                        Mas Informacion
                    </Link>      
                </div>                

            </div>    
        </div>
    
    );
};
