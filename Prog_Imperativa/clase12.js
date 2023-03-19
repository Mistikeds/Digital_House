
// En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .




function noParesDeContarImparesHasta(numero){

    let nrosImpares = [];

    for(let i = 0; i <= numero; i++){ 
        if( i % 2 === 1){
            nrosImpares.push(i);
        }
    }
    return nrosImpares;

}

noParesDeContarImparesHasta(5);
nrosImpares = 'buenos dias';

// 0,1,2,3,4,5,6,7,8 --> 4 numeros impares 


// Crear un array llamado misMascotas 
// Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
// nombre
// raza
// edad 
// sonido
// un método que nos retorne ese sonido 2 veces
// Cuando esté listo, verificar en consola
// Deberemos crear una función que reciba por parametro un array de objetos que se llame aumentarEdad que aumente la edad de cada animal en 1.


let misMascotas = [
    {
        nombre: 'pupi',
        raza: 'gato',
        edad: 7, // +1
        sonido: 'miau',
        hacerSonido: function(){
            return `${this.sonido} ${this.sonido}`;
        }
    },
    {
        nombre: 'manuelita',
        raza: 'tortuga',
        edad: 4, // +1
        sonido: 'jdfasj',
        hacerSonido: function(){
            return `${this.sonido} ${this.sonido}`;
        }
    },
    {
        nombre: 'tito',
        raza: 'perro',
        edad: 12, // +1
        sonido: 'guau',
        hacerSonido: function(){
            return `${this.sonido} ${this.sonido}`;
        }
    }
];


// function aumentarEdad(array){
//     for(let i = 0; i < array.length; i++){ 
//         array[i].edad+= 1;
//     }
// }

// aumentarEdad(misMascotas);

// console.log(misMascotas)

// Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
// Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
// Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
// Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad


function aumentarEdad2(arr){

    for(let i = 0; i < arr.length; i++){
        if(arr[i].edad < 6){
            arr[i].edad++;
        } else if(arr[i].edad >= 6 && arr[i].edad <= 10){
            arr[i].edad += 2; 
        } else {
            arr[i].edad = arr[i].edad + (arr[i].edad / 2);
        }
    }
}

aumentarEdad2(misMascotas);

console.log(misMascotas);