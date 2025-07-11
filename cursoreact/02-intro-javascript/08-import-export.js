import heroes from '../data/heroes.js';

 const getHeroesById  = (id) => heroes.find ( (heroe) => heroe.id === id);

export default getHeroesById
    