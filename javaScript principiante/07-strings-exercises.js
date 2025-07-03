/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let nombre = "Fernando"
let completo = nombre + " Lopez"
console.log (completo)

// 2. Muestra la longitud de una cadena de texto

console.log (completo.length)

// 3. Muestra el primer y último carácter de un string

console.log (completo [0])
console.log (completo [13])

// 4. Convierte a mayúsculas y minúsculas un string

console.log (completo.toUpperCase())

console.log (completo.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let textLines =(`Fernando
Lopez`)
console.log (textLines)    

// 6. Interpola el valor de una variable en un string

console.log (`Hola, ${nombre}`) 

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log (completo.replace (/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log (completo.includes ("mesa"))

// 9. Comprueba si dos strings son iguales

console.log (nombre == "Fernando")

// 10. Comprueba si dos strings tienen la misma longitud

console.log (completo.length == textLines.length)