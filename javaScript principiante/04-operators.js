// Operadores en JavaScript

// Operadores aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo (resto de la división)
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2 // Suma y asignación
console.log(myVariable)
myVariable -= 1 // Resta y asignación
myVariable *= 3 // Multiplicación y asignación
myVariable /= 2 // División y asignación
myVariable %= 2 // Módulo y asignación
myVariable **= 2 // Exponente y asignación

// Operadores de comparación

console.log(a < b) // Menor que
console.log(a > b) // Mayor que
console.log(a <= b) // Menor o igual que
console.log(a >= b) // Mayor o igual que
console.log(a == 6) // Igualdad (valor)
console.log(a == "6") // Igualdad (valor)
console.log(a === 6) // Igualdad estricta (tipo y valor)
console.log(a === "6") // Igualdad estricta (tipo y valor)
console.log(a != 6) // Desigualdad (valor)
console.log(a !== 6) // Desigualdad estricta (tipo y valor)
console.log(a !== "6") // Desigualdad estricta (tipo y valor)
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == ``)
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Truthy values (valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
//Todas kas cadenas de texto menos las vacias (valen 0)
//El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacias

//Operadores logicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20 || 20 > 10)

// not (!)
console.log(! true)
console.log(! false)
console.log(!(5 < 10 && 15 < 20))
console.log(!(5 < 10 && 15 > 20 || 20 > 10))

// Operadores ternarios

const isRaining = false

isRaining ? console.log("Esta lloviendo") : console.log("No llueve")
