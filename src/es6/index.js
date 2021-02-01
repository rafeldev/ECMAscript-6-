//Primero vamos a trabajar como se hacia antes de ES6
function newFunction(name, age, country){
  var name = name || 'Rafel';
  var age = age || 22;
  var country = country || 'CO'
  console.log(name,age,country)
}

//Ahora, con ES6 se realiza así
function newFunctionES6(name='Rafael', age=22, country='CO'){
  console.log(name,age,country)
}

//Para llamar la funcion hay dos formas
//Para el primero caso, hay funciones que toman los atributos por si mismos, entonces s epueden dejar vacias

newFunctionES6();
newFunctionES6('jeff', '24', 'MX')

//---------------------//-------------------//

//Ahora veremos concatenacion antes de ES6
let hello = "Hello";
let world = "World";
let holaMundo = hello + ' ' + world;
console.log(holaMundo)

//ahora con los templates Literals se hace mas facil concatenar, es necesario ubicar nuestros teclados con las comillas invertidas ``

//ahora con ES6
let holaMundoES6 = `${hello} ${world}`
console.log(holaMundoES6)

//---------------------//-------------------//

//Multilina antes
let lorem = "lorem blablablbalbalblab  \n" + ' ' + "otra frase blablalbla"

//ahora en ES6
let loremES6 = `otra frase epica en ES6
aqui es un salto de linea
`;

console.log(lorem)
console.log(loremES6)

//---------------------//-------------------//

//Destructuracion antes
let person = {
  'name': 'Rafael',
  'age': 22,
  'country': 'CO'
}

console.log(person.name, person.age)

//Ahora con ES6
let { name, age, country } = person;

console.log(name, age, country);

//---------------------//-------------------//

//Spread Operator antes
let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['rafa', 'gerlis', 'isaac'];

let education = ['David', ...team1, ...team2];

console.log(education);

//---------------------//-------------------//

//LET & CONST

var hola = 'hola' //scope global

let holaLet = 'holaLet' //scope local

const holaConst = 'holaConst' //mismas funciones que let, pero no puede REASIGNARSE.

{
  var globalVar = "global var"
}

{
  let globalLet = "global let";
  console.log(globalLet) //aqui si podremos imprimirla
}

console.log(globalVar) //imprime el mensaje ya que var es global


const a = "b";
a = "a" // no podremos reasignar valor a una constante
console.log(a)

//---------------------//-------------------//

let name = "Rafael";
let age = 22;

//Antes para crear un objeto en ES5

obj = { name: name, age: age }

//Ahora en ES6

objES6 = { name, age } 
console.log(objES6)

//---------------------//-------------------//

//Arrow Functions antes en ES5

const names = [
  {name: 'Rafael', age: 22},
  {name: 'sandy', age: 23}
];

let lisNames = names.map(function(item){
  console.log(item.name)
})

//Ahora con ES6

let listNamesES6 = names.map(item => {console.log(item.age)})

//---------------------//-------------------//

//Antes Promesas en ES5

const helloPromise = () => {
  return new Promise((resolve,reject) => {
    if(true){
      resolve("hey")
    } else{
      reject("Upsss....")
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))

//---------------------//-------------------//

//Clases

class calculator {
  constructor(){
    this.valueA = 0;
    this.valueB = 0;
  }
  //metodo
  sum(valueA, valueB){
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator()
console.log(calc.sum(3,3))

//Modulos

const hello = require('../es6/module')
console.log(hello())

//Generadores

function* helloWorld(){
  if(true){
    yield 'hello'
  }
  if(true){
    yield 'world'
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)