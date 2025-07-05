// Objetos

// Sintaxis

let person = {
    name: "Fernando",
    age: 41,
    alias: "Chukas"
}

// Acceso a propiedades

// Notación punto

console.log (person.name)

// Notacion de corchetes

console.log (person ["name"])

// Modificación de propiedades

person.name  = "Fernando Lopez"
console.log (person.name)

console.log (typeof person.age)
person.age = "41"
console.log (person.age)
console.log (typeof person.age)

// Eliminacion de propiedades

delete person.age

console.log (person)

// Nueva propiedad

person.email = "chukas@hotmail.com"
person ["age"] = 41

console.log (person)

// Métodos (funciones)

let person2 = {
    name: "Fernando",
    age: 41,
    alias: "Chukas",
    walk: function () {
        console.log ("La persona camina")
    }
}
person2.walk ()

// Anidación de objetos

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

console.log (person3)

console.log (person3.name)
console.log (person3.job)
console.log (person3.job.oficio)
person3.job.work ()

// Igualdad de objects

let person4 = {
    name: 'Fernando Lopez',
    alias: 'Chukas',
    email: 'chukas@hotmail.com',
    age: 41
}

console.log (person)
console.log (person4)

console.log (person == person4)
console.log (person === person4)

console.log (person.name == person4.name)

// Iteración

for (let key in person4) {
    console.log (key + ": " + person4 [key] )
}

// Añadir valores dentro de string

let person5 = {
    name: "Fernando",
    age: 41,
    alias: "Chukas",
    walk: function () {
        console.log (`${this.name} camina`)
    }
}
person5.walk ()

// Funciones como objetos

function nuevo (name, age) {    // Deberia ser una clase
    this.name = name
    this.age = age    
}

let person6 = new nuevo ("Fernando", 41)
console.log (person6)

