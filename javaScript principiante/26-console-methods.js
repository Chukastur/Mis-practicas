// Console

// log

console.log ("Hola JavaScript")

// error

console.error ("ERROR")
console.error ("ERROR 1", new Error ("Conexión fallida"))

// warn

console.warn ("Este es un mensaje de advertencia")

// info

console.info ( "Esto es un mensaje de información")

// table

let data = [
    ["Fernando", 41],
    ["Brais"], 
]

console.table (data)

data = [
    { name: "Fer", age: 41},
    { name: "Brais", age: 37}
]

console.table (data)

//group

console.group ("Usuario:")
console.log ("Nombre: Fernando")
console.log ("Edad: 41")
console.groupEnd ()

//time

console.time ("Tiempo de ejecución")

for (let i=0; i<10000; i++){
}

console.timeEnd ("Tiempo de ejecución")

// assert

let age = 17
console.assert (age >= 18, "El usuario debe ser mayor de edad")

//count

console.count ("Click")
console.count ("Click")
console.count ("Click")
console.countReset ("Click")
console.count ("Click")

// trace 

function funcA (){
    funcB()
}

function funcB () {
    console.trace ("Seguimiento de la ejecucion")
}

funcA ()

// clear

//console.clear ()
