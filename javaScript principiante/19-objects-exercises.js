/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let uno = {
    nombre: "Fernando",
    apellido: "Lopez",
    edad: 41
}

console.log(uno)

// 2. Accede y muestra su valor

console.log (uno.nombre)

// 3. Agrega una nueva propiedad

uno.email = "chukas@hotmail.com"

console.log (uno)

// 4. Elimina una de las 3 primeras propiedades

delete uno.apellido
console.log (uno)

// 5. Agrega una función e invócala

let dos = {
    nombre: "Fernando",
    apellido: "Lopez",
    edad: 41
}

dos.walk = function (){
    console.log (`${this.nombre} camina`)
}

dos.walk ()

// 6. Itera las propiedades del objeto

for (let key in uno) {
    console.log (key + ": " + uno[key])
}

// 7. Crea un objeto anidado

let tres = {
    nombre: "Fernando",
    apellido: "Lopez",
    nacimiento: {
        fecha: "08/07/1983",
        lugar: "Riosa",
    }
}

console.log (tres)

// 8. Accede y muestra el valor de las propiedades anidadas

console.log (tres.nacimiento)
console.log (tres.nacimiento.fecha)


// 9. Comprueba si los dos objetos creados son iguales

let cuatro = {
    nombre: "Fernando",
    apellido: "Lopez",
    edad: 41
}
let cinco = {
    nombre: "Fernando",
    apellido: "Lopez",
    edad: 41
}

console.log (cuatro == cinco)
console.log (cuatro === cinco)

function comparar (v1, v2){
    const claves1 = Object.keys (v1)
    const claves2 = Object.keys (v2)
    if (claves1.length != claves2.length){
        return false
    }
for (let valor of claves1){
    if (v1 [valor] != v2 [valor]) {
        return false
        }
    }
return true
} 

console.log (comparar (cuatro, cinco))


// 10. Comprueba si dos propiedades diferentes son iguales

console.log (cuatro.apellido == cinco.edad)
