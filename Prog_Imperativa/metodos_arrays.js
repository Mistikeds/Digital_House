let colores = ['Rojo', 'Naranja', 'Azul'];
colores.push('Violeta'); // --> agrega violeta en el array

let coloresAsacar = ['Rojo', 'Naranja', 'Azul'];
coloresAsacar.pop('Violeta'); // --> elimina el elemento violeta

let coloresElim = ['Rojo', 'Naranja', 'Azul'];
coloresElim.shift(); // --> elimina el primer 
//                          del elemento del array
/*
let primerNombre = coloresElim.shift(); --> guarda el elemento 
                                            eliminado en la variable
                                            primerNombre
*/

let coloresAgrega = ['Rojo', 'Naranja', 'Azul'];
coloresAgrega.unshift('Violeta', 'Verde'); // --> agrega los elementos
                                        //      que quieras al array declarado


let coloresSeparador = ['Rojo', 'Naranja', 'Azul'];
coloresSeparador.join(' - '); // cambia las comas por el simbolo deseado
                              // ['Rojo' - 'Naranja' - 'Azul']

let coloresEsta = ['Rojo', 'Naranja', 'Azul'];
coloresEsta.indexOf('Azul'); // --> retorna la posicion del valor
                             // --> buscado / el .lastIndexOf


