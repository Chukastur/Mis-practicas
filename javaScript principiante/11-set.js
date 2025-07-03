// Sets

// Declaracióm

let mySet = new Set ()
console.log (mySet)

// Inicialización

mySet = new Set (["Fernando", "Lopez", "Chukas", 41, true])
console.log (mySet)

// Métodos comunes

// add y delete

mySet.add ("chukas@hotmail.com")
console.log (mySet)

mySet.delete ("chukas@hotmail.com")
console.log (mySet)

console.log (mySet.delete ("Chukas"))
console.log (mySet.delete(4))

console.log (mySet)

// has

console.log (mySet.has ("Lopez"))
console.log (mySet.has ("Chukas"))

// size

console.log (mySet.size)

// convertir set en array 

let myArray = Array.from (mySet)
console.log (myArray)

// convertir array en set

mySet = new Set (myArray)
console.log (mySet)

// No admite duplicados!!

mySet.add ("chukas@hotmail.com")
mySet.add ("chukas@hotmail.com")
mySet.add ("chukas@hotmail.com")
mySet.add ("chukas@hotmail.com")
console.log (mySet)

