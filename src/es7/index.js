// Clase 6: ¿Qué se implementó en ES7?

// Cada año en junio sale una nueva versión de
// ecmascript y en su version 7 implementó dos cambios
// particulares una es el valor de includes y otra es 
// operaciones en forma exponencial

// Includes

// este método trabaja sobre un arreglo o un string y nos
// permite saber si hay un elemento dentro de este valor

let numbers = [1,2,4,6,8];

if(numbers.includes(3)){
  console.log(`Si se encuentra el valor`)
} else {
  console.log("No se encuentra el valor")
}
// anteriormente teníamos que utilizar indexOf y un código
// un poco más complejo


// Operaciones exponenciales

// Otro de los puntos incorporados en es7 es como vamos
// a elevar a la potencia, si queremos elevar un número X
// a una potencia Y tenemos que utilizar el doble 
// asterisco **

let base = 4;
let exponent = 4;

let result = base ** exponent;
console.log(result)