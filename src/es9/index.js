//---------------------//-------------------//

// Spread Operator
const obj = {
  name: 'oscar',
  age: 22,
  country: 'CO'
};

let { country, ...all } = obj;
console.log(all)

//Porpagation Properties
const person = {
  name: 'oscar',
  age: 22
};

const personInformation = {
  ...person,
  country: 'CO'
};

console.log(`personInformation: `, personInformation)

//Promise Finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => {
      resolve('hello World')
    }, 3000)
    : reject(new Error('test Error'))
  });
}

helloWorld()
  .then(result => console.log('result ->', result))
  .catch(err => console.log('err ->', err))
  .finally(() => console.log('finalizó'))


//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date ->', year, month, day)
