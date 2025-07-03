/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i < 21; i++) {
    console.log (i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let num = 0
let suma = 1

while (suma <= 100) {
    num += suma
    suma++
}
console.log (num)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let pares = 0

do {pares++
    if (pares % 2 == 0) {
        console.log (pares)
        }
} while (pares < 51)


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

myArray = ["Luis", "Pedro", "Juan", "Lolo"]

for (let names of myArray) {
    console.log (names)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = "Hola mundo"
let vocals = "aeiou"
let cuenta = 0
texto = texto.toLowerCase ()

for (let i = 0; i < texto.length; i++){
    if (vocals.includes (texto[i])) {
        cuenta++;
    }

}

console.log (cuenta)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

myArray = [1, 2, 3, 4, 5, 6]
let producto = 1
let x = 0

while (x < myArray.length){
    producto *= myArray [x]
    x++
}

console.log (producto)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let z = 1; z<11; z++) {
    console.log (z * 5)
}

// 8. Usa un bucle para invertir una cadena de texto

let word = "Tenedor"
let drow = ""
let indice = word.length -1
word = word.toLowerCase ()

while (indice >= 0){
    drow += word [indice];
    indice --
}
console.log (drow)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibo = [1, 2]
let m = 2

do {fibo.push (fibo [m - 1] + fibo [m - 2])
    m++
} while (m <10)

console.log (fibo)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

myArray2 = [3, 4, 15, 36, 5, 64, 659, 3, 20]
myArray3 = []

for (let n of myArray2){
    if (n > 10) {
        myArray3.push (n)
    }    
}

console.log (myArray3)


const os = require("os")
