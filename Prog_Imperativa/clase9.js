const prompt = require("prompt-sync")({ sigint: true });
function sumar(x,y){
    return(x+y);
}
function restar(x,y){
    return(x-y);
}
function multiplicar(x,y){
    return(x*y);
}
function dividir(x,y){
    if (y == 0){
        return("No se puede dividir por 0")
    } else {
    return(x/y);
    }
}

console.log("-------------------- pruebas ------------------");

let x = parseFloat(prompt("Escribir el primer número: "));
let y = parseFloat(prompt("Escribir el segundo número: "));
//let z = parseFloat(prompt("Escribir el tercer número: "));
console.log(GeneradorDePorcentaje(x,y));

function cuadradoDeUnNumero(x){
    return multiplicar(x,x);
}

function promedioDeTres(x,y,z){
    return dividir(sumar(sumar(x,y),z),3);
}

function calcularPorcentaje(x,y){
    return dividir(multiplicar(x,y),100);
}

function GeneradorDePorcentaje(x,y){
    return dividir(multiplicar(x,100),y);
}