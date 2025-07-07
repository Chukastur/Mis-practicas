// Exportación de módulos

// Funciones

export function add (a, b) {
    return a + b
}

console.log (add(5, 10))

// Propiedades

export const pi = 3.1416

// Clases

export class Circle{
    constructor (radius){
        this.radius = radius
    }
    area (){
        return Math.PI * Math.pow (this.radius, 2)
    }
    perimeter (){
        return Math.PI * this.radio * 2
    }
}

// Exportación por defecto

export default function substract (a, b) {
    return a - b
}

export const nuevo = 3