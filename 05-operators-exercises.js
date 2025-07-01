/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = (2 + 2)
let resta = (3 - 1)
let multi = (3 * 1)
let divi = (3 / 2)
let expo = (3 ** 2)
let resto = (3 % 2)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let numero = (10)
numero += suma
numero -= resta
numero *= multi
numero /= divi
numero **= expo
numero %= resto

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log (5 == 5)
console.log (5 < 10)
console.log (5 > 3)
console.log (5 === 5)
console.log (5 != 3)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log (5 != 5)
console.log (5 > 10)
console.log (5 < 3)
console.log (5 === 3)
console.log (5 == 3)

// 5. Utiliza el operador lógico and

console.log (5 > 3 && 3 > 1)

// 6. Utiliza el operador lógico or

console.log (5 > 10 || 3 > 20)

// 7. Combina ambos operadores lógicos

console.log (3 < 5 && 5 < 10 || 10 < 8)

// 8. Añade alguna negación

console.log (!(3 < 5))

// 9. Utiliza el operador ternario

let sol = true
let tiempo = (sol) ?("Hace sol") : ("Esta feo")
console.log (tiempo)

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log (5 + 3 > 13 && 56 > 3 * 12)