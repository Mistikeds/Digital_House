// 1

let a = 10;
let b = 4;
let c = 4;
// 2 
function puntoDos(prim, seg, terc){
    // A
    if(prim > seg){
       console.log(seg *= terc);
    };
    // B
    if(seg % 2 == 0){
        console.log('El ' + seg + ' Es par');
    };
    // C
    prim += seg + terc;
    if(prim % 3 == 0){
        console.log('La suma de los tres es multiplo de 3');
    };

}
// 3
puntoDos(a,b,c);

// -EJERCICIO- 2

//1 

let usuario = {nombre:'Juan', 
               apellido:'Gonzales', 
               edad: 17, 
               estaEmpleado: true};

// 2 
// A
function mayoriaEdad(cliente){
    if(cliente.edad > 18 && cliente.estaEmpleado == true){
        console.log('El cliente '+ cliente.nombre +' '+ cliente.apellido + ' '+ 'Esta empleado y es mayor de edad');
    }
    else if(cliente.edad > 18){
        console.log('El cliente '+ cliente.nombre +' '+ cliente.apellido + ' '+'No esta empleado y es mayor de edad')
    }
    else{
        console.log('El cliente '+ cliente.nombre +' '+ cliente.apellido + ' '+'No esta empleado y no es mayor de edad')
    }
};
mayoriaEdad(usuario);

// -EJERCICIO- 3 

let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat', 
    anio: 2019,
    color: 'negro'
}]

// 1
autos.pop();
console.log(autos);

// 2

let autosNuevos=[];
for (let i = 0; i < autos.length; i++){
    if(autos[i].anio > 2019){
       autosNuevos.push(autos[i]);
    }
}

console.log(autosNuevos);


