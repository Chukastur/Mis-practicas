// Operadores en JavaScript

// if, else if, else

// if (si)

let age = 28

if (age == 41) {
    console.log ("La edad es 41")
}

// else (si no)

if (age == 41) {
    console.log ("La edad es 41")
} else {
    console.log ("La edad no es 41")
}

// else if

if (age == 41) {
    console.log ("La edad es 41")
}else if (age < 18) {
    console.log ("Es menor de edad") 
}else {
    console.log ("La edad no es 41 ni es menor de edad")
}

// Operador ternario

const message = age == 41 ? "La edad es 41" : "La edad no es 41"
console.log (message)

// switch

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName =  "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Numero de dia incorrecto"
        break
    }
console.log (dayName)