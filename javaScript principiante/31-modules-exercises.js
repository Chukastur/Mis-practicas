/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

export function suma (a, b){
    console.log (a +b)
}

// 2. Exporta una constante

export const pi = 3.1416

// 3. Exporta una clase

export class Usuario {
    constructor (usuario, edad){
        this.usuario = usuario,
        this.edad = edad
    }
}

// 4. Importa una función

import {add} from "./28-export-modules.js"

// 5. Importa una constante

import {nuevo} from "./28-export-modules.js"
 

// 6. Importa una clase

import {Circle} from "./28-export-modules.js"

let mycircle = new Circle (23)
console.log (mycircle.radius)

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

//solo se puede exportar una cosa por defecto

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

//solo puede haber una cosa como default

