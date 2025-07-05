/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Person1 {
    constructor (name, age){
        this.name = name
        this.age = age
    }
}

let person1 = new Person1 ("Fernando", 41)
console.log (person1)


// 2. Añade un método a la clase que utilice las propiedades

class Person2 {
    constructor (name, age){
        this.name = name
        this.age = age
    }
    saludo (){
        console.log (`Hola ${this.name}, tu edad es ${this.age}`)
    }
}

let person2 = new Person2 ("Fernando", 41)
person2.saludo ()

// 3. Muestra los valores de las propiedades e invoca a la función

console.log (person2.name, person2.age)
person2.saludo ()

// 4. Añade un método estático a la primera clase

class Person3 {
    constructor (name, age = 42){
        this.name = name
        this.age = age
    }
    static birth (a, b) {
        return (a - b)
    }
}

// 5. Haz uso del método estático

console.log (Person3.birth (2025, 42))

// 6. Crea una clase que haga uso de herencia

class Person4 {
    constructor (name = "Sin nombre", age = 0){
        this.name = name
        this.age = age
    }
}

class Person4Sub extends Person4 {
    constructor (name, age, mail = "No mail"){
        super (name, age)
        this.mail = mail
    }
}

let person4 = new Person4Sub ()
console.log (person4)

// 7. Crea una clase que haga uso de getters y setters

class Person5 {
    constructor (name, age){
        this.name = name
        this.age = age
    }
    get name (){
        return this.name
    }
    set age (newAge) {
        this.age = newAge
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Person6 {
    #banco
    #password
    constructor (name, age, banco, password){
        this.name = name
        this.age = age
        this.#banco = banco
        this.#password = password
    }
    get name (){
        return this.#banco
    }
    set password (newPass) {
        this.#password = newPass
    }
}

// 9. Utiliza los get y set y muestra sus valores


class Person7 {
    #banco
    #password
    constructor (name, age, banco, password){
        this.name = name
        this.age = age
        this.#banco = banco
        this.#password = password
    }
    get banco (){
        return this.#banco
    }
    set password (newPass) {
        this.#password = newPass
    }
    get password (){
        return this.#password
    }
}

let person7 = new Person7 ("Fernando", 41, "IBAN123456798", "1234")

console.log (person7.banco)

person7.password = "1470"
console.log (person7.password)


// 10. Sobrescribe un método de una clase que utilice herencia 

class Person8 {
    constructor (name, age, email){
        this.name = name
        this.age = age
        this.email = email
    }
    idioma (){
        console.log ("Habla español")
    }
}

class Person8Sub extends Person8 {
    idioma (){
        console.log ("Habla español e inglés")
    }
}


let person8 = new Person8 ("Fernando", 40, "Chukas@hotmail.com")
person8.idioma ()

let person8Sub = new Person8Sub ("Fernando", 40, "Chukas@hotmail.com")
person8Sub.idioma ()