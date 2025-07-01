/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Comentario de una línea

// 2. Escribe un comentario en varias líneas

/*
Comentario de varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let string = "Fernando";

let number = 41

let isStudent = true

let undefinedValue

let nullValue = null;

let mySymbol = Symbol('mysymbol');

let myBigInt = BigInt(123456789012345678901234567890123);

// 4. Imprime por consola el valor de todas las variables

console.log(string);
console.log(number);
console.log(isStudent);
console.log(undefinedValue);
console.log(nullValue);
console.log(mySymbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof string);
console.log(typeof number);
console.log(typeof isStudent);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

string = "Juan";
number = 30;
isStudent = false;
undefinedValue = undefined;
nullValue = null;
mySymbol = Symbol('newsymbol');
myBigInt = BigInt(987654321098765432109876543210987);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

string = 123; // Cambiando a número
number = "Treinta"; // Cambiando a cadena de texto
isStudent = 1; // Cambiando a número
undefinedValue = true; // Cambiando a booleano
nullValue = 1; // Cambiando a número
mySymbol = 3.14; // Cambiando a número decimal
myBigInt = false; // Cambiando a booleano

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myString = "Fernando";
const myNumber = 41;
const myIsStudent = true;
const myUndefinedValue = undefined;
const myNullValue = null;
const mySymbol2 = Symbol('mysymbol');
const myBigInt2 = BigInt(123456789012345678901234567890123);

// 9. A continuación, modifica los valores de las constantes

// Las constantes no pueden ser modificadas, por lo tanto, no se puede realizar esta acción.    

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// Intentar modificar una constante
