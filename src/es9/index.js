// Primera caracteristica, el operador de reposo que puede extraer las propiedades de un objeto que aún no se ha construido

const obj = {
    name: 'Alejandro',
    age: 29,
    country: 'CO'
}

// Operador de Reposo

let { name, ...all } = obj;
console.log(name, all);

// unir  elementos a un nuevo objeto
const obj = {
    name: 'oscar',
    age: 32
}

const obj1 = {
    ...obj,
    country: 'CO'
}

console.log(obj1);

// Promise.finaly con esto podemos saber cuando a finalizado el llamado y poder ejecutar alguna función o logica de codigo segun el caso

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))

// mejoras sobre el punto anterior, agrupar bloques de regex y acceder a cada uno de ellos

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);