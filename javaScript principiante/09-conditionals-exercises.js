/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Fernando"
let valor = 8
if (valor == nombre.length) {
    console.log (nombre)    
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Fer"
let contrasena = "yo"

if (usuario == "Fer" && contrasena == "yo"){
    console.log ("Creedenciales correctas!!")
}

// 3. Verifica si un ntúmero es positivo, negativo o cero e imprime un mensaje

let numero = -3

if (numero < 0){
    console.log ("Negativo")
}
else if (numero == 0){
    console.log ("Es 0")
}
else {
    console.log ("Positivo")
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 12

if (edad > 18){
    console.log ("Es mayor")
} else {
    console.log ("Es menor, le faltan " + (18 - edad) + " años" )
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad2 = 18
let adult = edad2 > 17 ? "Mayor de edad" : "Menor de edad"
console.log (adult)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 2

if (month >=1 && month <=3){
    console.log ("Invierno")
}
else if (month >=4 && month <=6){
    console.log ("Primavera")
}
else if (month >=7 && month <=8){
    console.log ("Verano")
}
else if (month >=9 && month <=12){
    console.log ("Otoño")
}
else {
    console.log ("Mes incorrecto")

}



// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (month == 2){
    console.log (28)
}
else if (month == [4,6,9,11]){
    console.log (30)
}
else if (month > 12){
    console.log ("Numero de mes erroneo")
}
else{console.log (31)
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Ingles"
let saludo

switch (idioma){
    case "Ingles":
        saludo = "Hello"
        break
    case "Frances":
        saludo = "Bonjour"
        break
    case "Español":
        saludo = "Hola"
        break
}

console.log (saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let swmes = 8
let swesta

switch (swmes){
    case 1:
    case 2:
    case 3:
        swesta = "Invierno"
        break
    case 4:
    case 5:
    case 6:    
        swesta = "Primavera" 
        break
    case 7:
    case 8:
    case 9:
        swesta = "Verano"  
        break      
    case 10:
    case 11:
    case 12:
        swesta = "Otoño" 
        break 
    }

console.log (swesta)


// 10. Usa un switch para hacer de nuevo el ejercicio 7

let mess = 2
let diass

switch (mess){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        diass = 31
        break
    case 2:
        diass = 28
        break
    case 4:
    case 6:
    case 9:
    case 11:
        diass = 30
        break
}

console.log (diass)