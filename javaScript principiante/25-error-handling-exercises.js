/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

let myObject

try{
    console.log (myObject.name)
}catch (error) {
    console.log (error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try{
    console.log (myObject.name)
}catch(error){
    console.log (error.message)
}finally {
    console.log ("Yo me ejecuto si o si")
}

// 3. Lanza una excepción genérica

function funcerror () {
    throw new Error ("ERROR")
}

//funcerror ()

// 4. Crea una excepción personalizada

class SumNumbersError extends Error {
    constructor (message, a, b) {
        super (message) 
        this.a = a
        this.b = b
        this.name = "SumNumbersError"
    }
    printNumbers (){
        console.log (this.a, " + ", this.b)
    }
}

// 5. Lanza una excepción personalizada

function suma (a, b) {
    if (typeof a !== "number" || typeof b !== "number"){
        throw new SumNumbersError ("Solo puedo sumar numeros", a, b)
    }
    console.log (a + b) 
    return a + b
}

try {
    suma (2, "a")
}catch (error){
    console.log ("Se ha producido un error personalizado:", error.message)
    error.printNumbers ()
}

// 6. Lanza varias excepciones según una lógica definida

function suma2 (a, b) {
    if (typeof a !== "number" || typeof b !== "number"){
        throw new SumNumbersError ("Solo puedo sumar numeros",a , b)
    }
    if (a == 0 || b == 0) {
        throw new SumNumbersError ("Esta intentando sumar 0", a, b)
    }
    return a + b
}
try {
    suma2 (2, 0)
}catch (error){
    console.log ("Se ha producido un error personalizado:", error.message)
    error.printNumbers ()
}

// 7. Captura varias excepciones en un mismo try-catch

class MaxDigitsError extends Error {
    constructor(message, a, b) {
        super(message);
        this.a = a;
        this.b = b;
        this.name = "MaxDigitsError";
    }
}

function suma3 (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new SumNumbersError("Solo puedo sumar numeros", a, b);
    }
    if (a == 0 || b == 0) {
        throw new SumNumbersError("Esta intentando sumar 0", a, b);
    }
    if (a > 9999 || b > 9999) {
        throw new MaxDigitsError("Solo sumo numeros de hasta 4 digitos", a, b);
    }
    return a + b;
}


try {
    suma3 (4, 555555)
}catch (error){
    if (error instanceof SumNumbersError) {
        console.log ("Se ha producido un error personalizado:", error.message)
    }else if (error instanceof MaxDigitsError) {
        console.log ("Solo sumo numeros de hasta 4 dígitos")
    }
}

// 8. Crea un bucle que inten∫te transformar a float cada valor y capture y muestre los errores


let myArray = ["2", "3.14", "hola", "5", "true"];

for (let i = 0; i < myArray.length; i++) {
    let b = myArray[i];
    let result = parseFloat(b);
    try {
        if (isNaN(result)) {
            throw new Error(`"${b}" no se puede convertir`);
        }
        console.log(`"${b}" convertido a float es: ${result}`);
    } catch (error) {
        console.log(error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function propiedad (objeto){
    if (typeof objeto !== "number") {
        throw new Error ("Esto no es un número")
    }
}

propiedad (2)

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function intentos (){
    for (let i = 0; i < 10; i++)
    try {
        if (i == 8){
            console.log ("Ahora si")
            break
        }
        throw new Error (`ERROR ${i}`)
    }catch (error){
        console.log (error.message)
    }
 }

intentos ()

 