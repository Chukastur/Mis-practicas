/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1, 2, 3, 4]

let [var1, var2] = myArray

console.log (var1, var2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [var3, var4, var5, var6, var7 = 5] = myArray

console.log (var7)


// 3. Usa desestructuración para extraer dos propiedades de un objeto

let person = {
    nombre: "Fernando",
    apellidos: "Lopez",
    edad: 41
}
let {nombre, apellidos} = person

console.log (nombre, apellidos)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {nombre: name, edad: age} = person

console.log (name, age)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let person2 = {
    nombre: "Fernando",
    apellidos: "Lopez",
    edad: 41,
    residencia: {
        ciudad: "Riosa",
        provincia: "Asturias"
    }
}
let {residencia: {ciudad: lugar1}, residencia: {provincia: lugar2}} = person2

console.log (lugar1 + ",", lugar2)


// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray2 = [1, 2, 3, 4]
let myArray3 = [10, 20, 30, 40]
let myArray4 = [...myArray2, ...myArray3]

console.log (myArray4)


// 7. Usa propagación para crear una copia de un array

let myArray5 = [...myArray3]

console.log (myArray5)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person3 = {
    nombre: "Fernando",
    apellidos: "Lopez",
    edad: 41
}
let person4 = {
    nombre2: "Luis",
    apellidos2: "Gonzalez",
    edad2: 47
}

let personas = {...person3, ...person4}

console.log (personas)

// 9. Usa propagación para crear una copia de un objeto

let yo = {...person3}

console.log (yo)

// 10. Combina desestructuración y propagación

let {nombre: name1, apellidos: surname1} = yo

let yo2 = {name1, ...person2, email: "chukas@hotmail.com", surname1}

console.log (yo2)
