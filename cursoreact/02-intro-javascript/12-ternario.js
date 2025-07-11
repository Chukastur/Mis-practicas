// operador terciario

const activo = true;                    

let mensaje = '';               // de la forma anterior

if ( activo ) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}

console.log (mensaje)

const estado = ( activo ) ? 'Activo' : 'Inactivo' ;   // usando operador terciario

console.log (estado)

const estado2 = !activo && 'Activo'  // devuelve false aunque no hallamos usado la otra condición

console.log (estado2)
