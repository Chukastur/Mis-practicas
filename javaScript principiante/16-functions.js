// Funciones 

// Simple

function myFunc (){
    console.log ("Hola, funcion!!")
}

for ( let i=0; i < 5; i++) {
    myFunc()
}

// Con parámetros

function myFuncWithParameters (name){
    console.log( `Hola, ${name}`)
}

myFuncWithParameters ("Fernando")
myFuncWithParameters ("Lopez")

// Funciones anónimas

const myFunc2 = function (name) {
    console.log (`Hola, ${name}!`)
}

myFunc2 ("Fernando Lopez")

// Arrow Functions 

const myFunc3 = (name) => {
    console.log (`Hola, ${name}!`)
}

const myFunc4 = (name) => console.log (`Hola, ${name}!`) // Para simplifacarlo en una sola linea

myFunc3 ("FERNANDO")
myFunc4 ("Fernando Lopez")

// Parámetros

function suma (a, b){
    console.log(a + b)
}

suma (5, 10)

function suma (a = 0, b = 0){   // Para que funcione dando solo el valor de un parámetro
    console.log(a + b)
}

suma (5)
suma (b = 10)

// Retorno de valores

function multiplica (a, b) {
    return a * b
}

let result = multiplica (5, 10)     // Asi envia el resultado de la funcion a una variable
console.log (result)     

// Funciones anidadas

function externa () {
    console.log ("Funcion externa")
    function interna () {
        console.log ("Funcion interna")
    }
    interna ()
}

externa ()

// interna () <= Error: Fuera del scope

//Funciones de orden Superior

function applyfunc (func, param) {
    func (param)    
}

applyfunc (myFunc4, "funcion de orden superior")  //myFunc4 es la arrow function definada arriba

// for each

myArray = [1, 2, 3]

mySet = new Set (["Fernando", "Lopez", "Chukas", 41, true])

myMap = new Map ([
    ["name", "Fernando"],
    ["email", "chukas@hotmail.com"],
    ["age", "41"]
])

myArray.forEach((value) => console.log (value))
mySet.forEach((value) => console.log (value))
myMap.forEach((value) => console.log (value))
