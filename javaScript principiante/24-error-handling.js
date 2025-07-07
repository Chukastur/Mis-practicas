// Manejo de errores

// Excepción

let myObject

// console.log (myObject.email) // Produce una excepción

// Tratamiento de errores

// try-catch

try {
    // Código que intenta ejecutar 
    console.log (myObject.email)
    console.log ("Finaliza la ejecución sin problemas")

} catch {
    // Bloque de error
    console.log ("Se ha producido un error")
}

// Captura del error

try {
    console.log (myObject.email)
} catch (error){
    console.log ("FATAL ERROR", error.message)
}

// finally

try {
    console.log (myObject.email)
} catch (error2){                           // finally sin catch da error
    console.log ("ERROR", error2.message)
} finally {
    console.log ("Esto se ejecuta siempre")
}

// Lanzamineto de errores

// Throw

//throw new Error ("El equipo esta en peligro"); 
// Mejor lanzarla en una formula para que no de error de forma inesperada

class SumZeroIntegerError {
    constructor(message, a, b, name) {
        this.message 
        this.a = a
        this.b = b
        this.name = "SumZeroIntegerError"
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}


// Capturar varios tipos de errores

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError){    
        console.log("Se ha producido un error de tipo: ", error.message)
    }else if (error instanceof Error){
        console.log("Se ha producido un error de tipo: ", error.message)
    }
}


// Crear excepciones personalizadas

class SumIntegerError extends Error {       // como si fuera una clase que herda de donde queremos coger el error
    constructor (message, a, b) {
        super (message)
        this.a = a
        this.b = b
    }
    printNumbers () {                       
        console.log (this.a, " + ", this.b)
    }
}     

try {
    console.log (sumIntegers (0, 10))
}catch (error) {
    console.log ("Se ha producido un error personalizado:", error.message)
    error.printNumbers ()
}