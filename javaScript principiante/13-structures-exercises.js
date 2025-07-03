/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let myArray = []
myArray = ["Perro", "gato", "caballo", "vaca", "burro"]

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift ("paloma")
myArray.push ("camello")
console.log (myArray)

// 3. Elimina el que se encuentra en tercera posición

myArray.splice (2, 1)
console.log (myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set (["quijote", "celestina", "biblia", "diccionario", "Babel"])

// 5. Añade dos más. Uno de ellos repetido

mySet.add ("Koran")
mySet.add ("biblia")
console.log (mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete ("diccionario")
console.log (mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap
myMap = new Map ([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"],
])
console.log (myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (myMap.has (5)){
    console.log (myMap.get (5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set ("verano", ["junio", "julio", "agosto"])
console.log (myMap.get ("verano"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 = []
myArray2 =["a", "b", "c", "d"]
let mySet2 = ([myArray2])
let myMap2
myMap2 = new Map ([
    ["letras", mySet2],
])
console.log (myMap2)