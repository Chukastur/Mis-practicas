/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
 */


const puntuacion = new Map ([
    [0 , "Love"],
    [1 , 15],
    [2 , 30],
    [3 , 40],
])

let secuencia = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"]
 
function marcador (secuencia) {
    let p1 = 0
    let p2 = 0
    for (let i = 0; i < secuencia.length; i ++) {       
        if (secuencia[i] === "P1") {
            p1 ++
        }else if (secuencia[i] === "P2") {
            p2++
        }else continue

        if (p1 >= 3 && p2 >= 3) {
            if (p1 === p2) {
                console.log ("Deuce")                                         
            } else if (p1 == p2 +1){
                console.log ("Ventaja P1")                                         
            } else if (p2 == p1 +1){
                console.log ("Ventaja P2")                                         
            } else if (p1 >= p2 +2){
                console.log ("Ha ganado el P1") 
                break                                        
            } else if (p2 >= p1 +2){
                console.log ("Ha ganado el P2")  
                break                                       
            } 

        }else {
            console.log (`${puntuacion.get(p1)} - ${puntuacion.get(p2)} `)
        }

    }
}

marcador (secuencia)