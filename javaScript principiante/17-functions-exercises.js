/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function func1 (a, b) {
    console.log (a + b)
}

func1 (2, 3)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

myArray1 = [2, 6, 12, 25]
let mayor

function func2 () {
    mayor = myArray1[0]
    for (let x = 0; x < myArray1.length; x++){
        if (myArray1[x] > mayor) {
            mayor = myArray1[x]
        }
    }
    return mayor     
}

func2 ()
console.log (mayor)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let palabra = "Fernando"
let vocales = "aeiou"
let numvoc = 0

function func3 (x) {
    for (let i = 0; i < palabra.length; i++){
        if (vocales.includes (palabra[i].toLowerCase())){numvoc ++}
    }
    return numvoc
}

func3 ()
console.log (numvoc)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let arrayPalabras = ["Fer", "casa", "melon"]
let arrayMayus = []

arrayPalabras.forEach ((i) => arrayMayus.push (i.toUpperCase()))

console.log (arrayMayus)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

let numero = 20

function primo (x) {
    let esono = 0
    for (i=2; i < numero; i++){
        if (numero % i == 0){
         esono ++  
        }
    }
if (esono == 0) {
    console.log (true)
}else {
    console.log (false)
}
}

primo(numero)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let num1 = [3, 5, 6, 9, 56, 33]
let num2 = [1, 2, 3, 4, 33, 25]
let comunes = []

num1.forEach ((i) => {
    if (num2.includes (i)) {
            comunes.push (i)
        }
    })
console.log (comunes)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let num3 = [1, 2, 5, 7, 8, 13, 20]

function pares (i) {
    let suma = 0
    for (let n = 0; n < num3.length; n++) {
        if (num3 [n] % 2 == 0){
            suma += num3 [n]
        }
    }
    console.log (suma)
}

pares (num3)


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let num4 = [2, 3, 4, 5]
let cuadrados = []

num4.forEach ((i) =>
    cuadrados.push (i ** 2)
    )


console.log (cuadrados)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let texto = "Fernando"
let textoreves = ""

function reves (i) {
    for (let m = i.length - 1; m >= 0; m--){
        textoreves += texto [m]
    }
    console.log (textoreves)
}

reves (texto)

// 10. Crea una función que calcule el factorial de un número dado

let num5 = 5

function factorial (i) {
    let resultado = 1
    if (num5 === 0 || num5 === 1) {
        console.log (1)
    }else {
        for (let c = 2; c <= i; c++) {
          resultado *= c   
        }
    }
    console.log (resultado)
}

factorial (num5)

