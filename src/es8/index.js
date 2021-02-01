/* En esta clase vimos las algunas implementaciones de ES8, como Object entries, Object Values, Padding y Trailing-Comas.

En el siguiente código se lista los ejemplos comentariados. */


//---------------------//-------------------//

//Object entries devuelve los valores de una matriz.

const data = {
  front: "Rafael",
  back: "gerlis"
};

//Transformar este objeto en una matriz
const entries = Object.entries(data)
console.log(entries)

//si queremos saber cuantos elementos posee nuestroa rreglo ahora es posible con length
console.log(entries.length) 


//---------------------//-------------------//

//Objetc Values: Me devuelve los valores de un objeto a un arreglo.
const dataValue = {
  front: "Rafael",
  back: "gerlis"
};

const values = Object.values(dataValue)
console.log(values)


//---------------------//-------------------//

//Padding: nos permite añadir aadenas vacias a string, pudiendo moficiar la cadena de string como tal
//podria servir del lado del front, para mostrar una estructura de elemntos

const string = 'hello'
//se añade al inicio la poalabra "hi"
console.log(string.padStart(7, "hi")) 
//se añade al final la poalabra "hi"
console.log(string.padEnd(12, "hi"))


//---------------------//-------------------//

//Trailing comas, nos permite asignar elemtnos al objeto mediante comas

const data = {
  front: "Rafael", //puede existir
  back: "gerlis"
}

