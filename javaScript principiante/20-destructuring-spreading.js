myArray = [1, 2, 3, 4]

let person = {
    name: "Fernando",
    age: 41,
    alias: "Chukas"
}

let myValue = myArray[1]
console.log (myValue)  

// Desestructuración

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray // desestructura un array en variables
console.log (myValue0)
console.log (myValue1)
console.log (myValue2)
console.log (myValue3)
console.log (myValue4)

// Sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log (myValue5) 
console.log (myValue6)
console.log (myValue7)
console.log (myValue8)
console.log (myValue9)

//ignorar elementos array

let [myValue10, , , myValue13] = myArray
console.log (myValue10)
console.log (myValue13)

// Sintaxis objects

let {name, age, alias} = person
console.log (name)
console.log (age)
console.log (alias)

// Sintaxis objects con valores predeterminados

let {name2, age2, alias2, email = "chukas@hotmail.com"} = person
console.log (name2)
console.log (age2)
console.log (alias2)
console.log (email)

// Sintaxis objects con nuevos nombres de variables

let {name: name3, age: age3, alias: alias3} = person
console.log (name3)
console.log (age3)
console.log (alias3)

// Objetos anidados

let person3 = {
    name: "Fernando",
    age: 41,
    alias: "Chukas",
    walk: function () {
        console.log ("La persona camina")
    },
    job: {
        oficio: "Programador",
        exp: 0,
        work: function () {
            console.log ("La persona no trabaja")
        }
    }
}

let {name: name4, job: {oficio: curro}} = person3 

console.log (name4)
console.log (curro) 

// Propagación (...)

// Sintaxis arrays

// Copia de arrays

let myArray2 = [...myArray]       // Copia

let myArray3 = [...myArray, 5, 6] // Copia y añade nuevos valores

console.log (myArray2)
console.log (myArray3)

// Combinación de arrays

let myArray4 = [...myArray2, ...myArray3]

console.log (myArray4)

// Sintaxis objects

// Copia de objects

let person4 ={...person, email: "chukas@hotmail.com"} // Copia y añade key/value

let person5 = {...person}                             // Copia 

console.log (person4)
console.log (person5)

