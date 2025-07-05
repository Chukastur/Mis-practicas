/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */



let numero = 10000
let fibo1 = 5 * numero * numero + 4
let fibo2 = 5 * numero * numero - 4
let fibo3 = (n) => Math.sqrt(n) % 1 === 0
let fibo = fibo3 (fibo1) || fibo3 (fibo2)
let primo = true
let par = numero % 2 == 0

for (let i = 2; i < numero -1; i++) {
    if (numero % i == 0) {
        primo = false
        break
    }
}

if ((par == true) && (fibo == true) && (primo == true)) {
    console.log (`${numero} es primo, es Fibonacci y es par`)
}
else if ((par == true) && (fibo == true) && (primo == false)) {
    console.log (`${numero} no es primo, es Fibonacci y es par`)
}
else if ((par == true) && (fibo == false) && (primo == true)) {
    console.log (`${numero} es primo, no es Fibonacci y es par`)
}
else if ((par == true) && (fibo == false) && (primo == false)) {
    console.log (`${numero} no es primo, no es Fibonacci y es par`)
}
else if ((par == false) && (fibo == true) && (primo == true)) {
    console.log (`${numero} es primo, es Fibonacci y es impar`)
}
else if ((par == false) && (fibo == true) && (primo == false)) {
    console.log (`${numero} no es primo, es Fibonacci y es impar`)
}
else if ((par == false) && (fibo == false) && (primo == true)) {
    console.log (`${numero} es primo, no es Fibonacci y es impar`)
}
else if ((par == false) && (fibo == false) && (primo == false)) {
    console.log (`${numero} no es primo, no es Fibonacci y es impar`)
}


