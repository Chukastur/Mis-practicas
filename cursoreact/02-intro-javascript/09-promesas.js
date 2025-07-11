import heroes from '../data/heroes';
import getHeroesById from './bases/08-import-export'

// Promesas

const promesa = new Promise ((resolve, reject) => {

    setTimeout ( () => {
        console.log ('2 segundos después')
    }, 1500 )                                           // el 2000 indica el tiempo que tarda en ejecutarse en milisegundos (2 segs)

});

// resolve

const promesa2 = new Promise ((resolve, reject) => {

    setTimeout ( () => {
        const p1 = getHeroesById (2)
        resolve (p1)
    }, 2000 )   

});

promesa2.then ( (p1) => {
    console.log (p1)
})

//reject

const promesa3 = new Promise ((resolve, reject) => {

    setTimeout ( () => {
        reject ('No se pudo encontrar el héroe')
    }, 2500 )   

});

promesa3.catch ( error => console.warn (error))


// resolve - reject

const getHeroesByIdAsync = (id) => {

    return new Promise ((resolve, reject) => {

        setTimeout ( () => {
            const p2 = getHeroesById (id);
            
            if (p2){
                resolve (p2)
            }else{
                reject (console.warn ('No se pudo encontrar el heroe'))
            }
        }, 3000 )     
    })
}

getHeroesByIdAsync (4)
    .then ( console.log  )
    .catch ( console.warn )
