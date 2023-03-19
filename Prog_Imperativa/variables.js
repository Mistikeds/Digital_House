//VARIABLES

let edad = 32;
const DNI = 42315420; // const no se puede cambiar el valor

console.log(edad);
console.log(DNI);


console.log('mi edad es ' + edad + ' y mi dni es ' + DNI)


console.log(`mi edad es ${edad} y mi dni es ${DNI}`);

/* 
-----TIPOS DE DATOS-----
        STRING
        NUMBER
        NULL
        UNDEFINED
        BOOLEANO
        NaN NOT A NUMBER
        ARRAYS
        OBJETOS LITERALES
*/

/*
let bool = true; // booleano
let Bool = 'true'; // string
*/
// OPERADORES
// =
/*

let a = 5;
let b = 10;
let c = 5;
let d = '5';

console.log(a == c); "comparacion simple"

console.log(a != c); "distinto de"

console.log(a === d); " false, no es el mismo dato (string, int)"

*/

function ejemplO(){
        return "hola, soy una función expresada"
    }
    let ejemplo = ejemplO();

console.log(ejemplo)