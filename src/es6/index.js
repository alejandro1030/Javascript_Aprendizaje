function newFunction(name, age, country) {
    var name = name || 'Alejandro';
    var edad = age || 29;
    var country = country || 'CO';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Alejandro', age = 29, country = 'CO') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilinea en Strings

// Comose hacía antes de ECMAScript 6

let lorem = "Este Es mi texto de prueba para el curso de ECMASCRIPT 6 \n"
+ "Este Es mi texto de prueba para el curso de ECMASCRIPT 6 parte 2.";


//ECMAScript 6

let lorem2 = `Otra frase epica que necesitamos
ahora esta es otra frase epica.
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'alejandro',
    'age': 32,
    'country': 'CO'
}

// Forma Estructurada
console.log(person.name, person.age);

// Forma Desestructurada
let { name, age, country } = person;
console.log(name, age, country);

// Unir elementos en Arrays ECMAScript 6

let team1 = ['David', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// uso de let, let solo está disponible en el scope, es decir en el bloque de codigo donde es llamado
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet); // Esta variable solo está disponible y alcanzable desde acá, no fuera de los corchetes
}

console.log(globalVar);

// Uso de const, como su nombre lo indica se usa para definir constantes, esto no permite que a la constante se le asigne un valor diferente

const a = 'b';
a = 'a';


// Arrow functions, Promesas y Parametros en objetos
let name = 'Alejandro';
let age = 32;

//ES5
obj = { name: name, age: age }; //esto antes de ECMAScript 6
//ES6
obj2 = { name, age }; //Esto despues de ECMAScript 6

console.log(obj2);

const names = [
    { name: 'Alejandro', age: 29 },
    { name: 'Milena', age: 30 }
]

// Forma anterior a ES6
let listOfNames = names.map(function (item) {
    console.log(item.name)
});

// Arrow Functions ES6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    // ...
}

const listOfName4 = name => {
    // ...
}

const square = num => num * num;

// Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
    if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

// Ejecución de las promesas y promesas anidadas
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

// Clases, Modulos y Generadores

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));


// Trabajo con Modulos
import { hello } from './module';

hello();

// Generadores
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);