// Map

// Declaración

let myMap = new Map()

// Inicialización

myMap = new Map ([
    ["name", "Fernando"],
    ["email", "chukas@hotmail.com"],
    ["age", "41"]
])

console.log (myMap)

// Métodos y propiedades

// set

myMap.set ("alias", "Chukas")
myMap.set ("name", "Fernando Lopez")

console.log (myMap)

//get

console.log (myMap.get ("name"))
console.log (myMap.get ("surname"))

// has

console.log (myMap.has ("surname"))
console.log (myMap.has ("age"))

//delete

myMap.delete ("email")
console.log (myMap)

// keys, values y entries

console.log (myMap.keys())
console.log (myMap.values())
console.log (myMap.entries())

// size

console.log (myMap.size)


// clear

myMap.clear ()
console.log (myMap)

