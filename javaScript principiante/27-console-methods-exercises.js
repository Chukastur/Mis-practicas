/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

function error1 (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.error (new Error, "Los valores introducidos no son numéricos")
    }
}

error1 (4, "a")

// 2. Crea una función que utilice warn correctamente

function warn1 (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.error (new Error, "Los valores introducidos no son numéricos")
    }
    console.warn (a + b)
}

warn1 (10, 65)

// 3. Crea una función que utilice info correctamente

function info1 (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.error (new Error, "Los valores introducidos no son numéricos")
    }
    console.info ("Esta funcion suma dos numeros")
    console.log (a + b)
}

info1 (10, 65)

// 4. Utiliza table

let myTable = [
    [nombre = "Fernando", edad = 41],
    [nombre = "Brais", edad = 37]
]

console.table (myTable)

// 5. Utiliza group

console.group ("Usuarios")
    console.log ("Fernando")
    console.log ("Brais")
console.groupEnd ()

// 6. Utiliza time

console.time ("Tiempo")

for (let i =0; i>100000; i++){
}

console.timeEnd ("Tiempo")

// 7. Valida con assert si un número es positivo

let numero = -5

console.assert (numero > 0, "El valor es negativo")

// 8. Utiliza count

console.count ("ping")
console.count ("ping")
console.count ("ping")
//console.countReset ("ping")


// 9. Utiliza trace

function funcA (){
    funcB ()
}
function funcB (){
    console.trace ("Este es el seguimineto de la app")
}

funcA ()

// 10. Utiliza clear

console.clear()
