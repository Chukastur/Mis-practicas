/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

let abc = new Map([
    ['a', 4],
    ['b', 'I3'],
    ['c', '['],
    ['d', ')'],
    ['e', 3],
    ['f', '|='],
    ['g', '&'],
    ['h', '#'],
    ['i', 1],
    ['j', '._|'],
    ['k', '>|'],
    ['l', 1],
    ['m', '//'],
    ['n', '^/'],
    ['o', 0],
    ['p', '|*'],
    ['q', '(_,)' ],
    ['r', 'I2'],
    ['s', 'I2'],
    ['t', 5],
    ['u', 7],
    ['v', '(_)'],
    ['w', '/'],
    ['x', '//'],
    ['y', '><'],
    ['z', 'j']
])
  
let convertedText = ""
let text = "Hola amigos, me llamo Fernando"
text = text.toLowerCase ()

for (let i = 0; i < text.length; i++) {
    if (abc.has (text[i])) {
        convertedText += abc.get (text[i])
    } else {
        convertedText += text[i]
    }
}

console.log (convertedText)