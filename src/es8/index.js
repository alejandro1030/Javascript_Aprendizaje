// ECMASript 8
// Este cambio permite devolver la clave y los valores de una matriz

const data ={
    frontend: 'Oscar',
    backend: 'Alejandro',
    design: 'Vivian'
}

// como convertir este objeto a una matriz
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// object values, devuelve los valores de un objeto a un arreglo
const data = {
    frontend: 'Oscar',
    backend: 'Alejandro',
    design: 'Vivian'
}

// como hacer la transformación
const values = Object.values(data);
console.log(values);
console.log(values.length);

// padding como anteponer a agregar una cadena de vacía o elementos a un string
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));
console.log(string.padEnd(12, '  -----'));
// esto es util para frontend

// Async Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();

// ECMAScript 9

