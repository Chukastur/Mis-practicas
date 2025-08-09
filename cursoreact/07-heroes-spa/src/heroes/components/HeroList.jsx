import { useMemo } from "react";
import { getHeroesByPublisher, HeroCard } from "../"

export const HeroList = ({ publisher }) => {

    const heroes = useMemo ( () => getHeroesByPublisher ( publisher ), [ publisher ] );
   
    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 no-gutters h-100">
            {
                heroes.map( heroe => ( 
                    <div className="col" key={heroe.id}>
                        <HeroCard 
                            key= { heroe.id } {...heroe}  
                        />
                    </div>
                ))
            }        
        </div>
    );
};
 