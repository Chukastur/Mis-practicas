// Strings

// Concatenación de cadenas

let myName = "Fernando"
let greeting = "Hola, " + myName + "!"
console.log (greeting)
console.log (typeof greeting)

// Longitud
console.log (greeting.length)

// Acceso a caracteres 
console.log (greeting [0])
console.log (greeting [12])

// Métodos comunes
console.log (greeting.toUpperCase())
console.log (greeting.toLowerCase())
console.log (greeting.indexOf ("Hola"))
console.log (greeting.indexOf ("Fernando"))
console.log (greeting.indexOf ("MoureDev"))
console.log (greeting.includes ("Hola"))
console.log (greeting.includes ("Fernando"))
console.log (greeting.includes ("MoureDev"))
console.log (greeting.slice (0 , 10))
console.log (greeting.replace ("Hola", "Hey"))
 
// Template literals (plantillas literales)

let message = `Hola este es mi 
curso de JavaScript`

console.log (message)

console.log (`Hola, ${myName}!`)

let email = "chukas@hotmail.com"
console.log (`Hola, ${myName} mi email es ${email}!`)