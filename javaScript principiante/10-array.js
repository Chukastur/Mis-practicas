// Array

// Declaración

let myArray = []
let myArray2 = new Array ()

myArray = [1]

console.log (myArray)
console.log (myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2) 

myArray = [1, 2, 3, 4]
myArray2 = new Array (1, 2, 3, 4)

console.log(myArray)
console.log(myArray2) 

myArray = ["Fernando", "Lopez", "Chukas", 41, true]
myArray2 = new Array ("Fernando", "Lopez", "Chukas", 41, true)

console.log(myArray)
console.log(myArray2) 

let myArray3 = new Array (3)
myArray3[1] = "Fernando"
myArray3[2] = "Lopez"
myArray3[3] = "Chukas"

let myArray4 = []
myArray4 [0] = "Fernando"
myArray4 [1] = "Lopez"
myArray4 [2] = "Chukas"

console.log(myArray3)
console.log(myArray4) 

// Métodos comunes

let myArray5 = []

// push y pop

myArray5.push ("Fernando")  //Añade elementos en la última posicion
myArray5.push ("Lopez")
myArray5.push ("Chukas")
myArray5.push (41)

console.log (myArray5)
console.log (myArray5.pop()) //Elimina el último y lo devuelve
myArray5.pop()
console.log (myArray5)

// shift

console.log (myArray5.shift()) //Elimina el primero y lo devuelve
console.log (myArray5) 

// unsifht

myArray5.unshift ("Fernando", "Chukas") //Añade elementos en la primera posicion
console.log (myArray5)

// length

console.log (myArray5.length) 

// clear

myArray5 = []
myArray5.length = 0 // alternativa
console.log (myArray5)

// slice

myArray5 = ["Fernando", "Chukas", "Lopez", 41, true]

let myNewArray = myArray5.slice (1,3)

console.log (myNewArray)
console.log (myArray5)

// splice

myArray5.splice (1,3)
console.log (myArray5)

myArray5 = ["Fernando", "Chukas", "Lopez", 41, true]

myArray5.splice (1,2, "Nueva entrada")
console.log (myArray5)

