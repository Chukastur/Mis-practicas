// Clases

class Person {
    constructor (name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis 

let person = new Person ("Fernando", 41, "Chukas")
let person2 = new Person ("Brais", 37, "Mouredev")

console.log (person)
console.log (person)

// Valores por defecto

class DefaultPerson {
    constructor (name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson ("Fernando", 41)

console.log (person3)

// Acceso a propiedades

console.log (person3.alias)
console.log (person3["alias"])

person3.alias = "Chukas"

console.log (person3.alias)

// Funciones en clases

class PersonWithMethod {
    constructor (name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk (){
        console.log ("La persona camina")
    }
}

let person4 = new PersonWithMethod ("Fernando", 41, "Chukas")
person4.walk ()

// Propiedades Privadas

class PrivatePerson {

    #bank //Hay que definir la key primero con #delamte

    constructor (name, age, alias, bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay (){
        console.log (this.#bank) // Solo dentro de la clase se puede acceder a esta propiedad
    }
}

let person5 = new PrivatePerson ("Fernando", 41, "Chukas", "IBAN12345678")

// console.log (person5.#bank) <= <= Daria error, solo se puede acceder desde dentro de la clase 

person5.pay () // Ejecuta la función dentro de la clase y accede a #bank

// Getters y Setters

// get

class GetPerson {
    #name
    #age
    #alias
    constructor (name, age, alias){
        this.#name = name
        this.#age = age
        this.#alias = alias
    }

    get name(){
        return this.#name  // Posibilta leer el valor desde fuera de la clase, pero no modificarla
    }
} 

person6 = new GetPerson ("Fernando", 41, "Chukas")

console.log (person6)
console.log (person6.name)

// set

class SetPerson {
    #name
    #age
    #alias
    #bank
    constructor (name, age, alias, bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    set bank (newBank) {  // Posibilita la modificacion pero no la lectura
        this.#bank = newBank 
    }
} 
let person7 = new SetPerson ("Fernando", 41, "Chukas", "IBAN12345678")

person7.bank = "New IBAN123456489"

// Herencia

class Animal {
    constructor (name){
        this.name = name
    }
    sound (){
        console.log ("El animal emite un sonido generico")
    }    
}

class Dog extends Animal {
    run (){
        console.log ("El perro corre")
    }
    sound (){
        console.log ("Guuauuuu")        // Sobreescribe la funcion del superior
    }
}

class Fish extends Animal {
    constructor (name, size) {
        super (name)                    // Llama a una key de su superior
        this.size = size
    }
    swin (){
        console.log ("El pez nada")
    }
}


let myDog = new Dog ("Miki")
myDog.sound ()
myDog.run ()

let myFish = new Fish ("ChukFish", 10)
myFish.swin ()
myFish.sound ()

// Métodos estáticos

class Operations {
    static sum (a, b) {
        return a + b
    }
}

console.log (Operations.sum (5, 10))