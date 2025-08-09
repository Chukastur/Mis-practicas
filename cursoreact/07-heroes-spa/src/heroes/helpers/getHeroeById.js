import { heroes } from "../";

export const getHeroeById = (id ) => {

    return heroes.find ( hero => hero.id === id );

};

