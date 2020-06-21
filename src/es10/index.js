// ECMAScript 10 flat

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2)); // se genero o mostró una sola matriz apalanada de una sola aforma por el flat

//flat map permite mapear cada elemento despues pasarle una función y aplanarlo segun el resultado

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

// trimStart Elimina los espacios de un string
let hello = '        hello world';

console.log(hello);
console.log(hello.trimStart());

// hacer lo mismo que el punto anterior, pero al final del string
let hello = 'hello world           ';

console.log(hello);
console.log(hello.trimEnd());

// opcional cathc

try {

} catch (error) {
    error
} // antes se hacía así

// ahora se puede hacer así
try {

} catch {
    error
}


let entries = [["name", "Alejandro"], ["age", 32]];
console.log(Object.fromEntries(entries));

// Objeto de tipo simbolo que permite acceder a una descripción

let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);