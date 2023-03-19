
/// ejercicio 2 (MODELO DE PARCIAL)
function ejercicio2 (precio, porcentajeDescuento, booleano) {
    if (booleano) {
         precio -= (precio * porcentajeDescuento / 100);
            return precio;
    } 
      
      else {
        return precio;
    }
}
console.log(ejercicio2(100,20,true));


/// 3 

// A. Realizar una función que reciba un array como parámetro, y lo recorra para filtrar los
// objetos que indiquen que tienen disponibilidad. La función deberá retornar un nuevo
// arreglo con los hoteles que cumplan con la condición antes mencionada.
// B. Ejecutar el correspondiente llamado a la función y mostrar los resultados obtenidos.



let hoteles =[
    
    {
        nombre: "Acantilados",
        ubicacion: "Mar del plata",
        disponible: true,
    },

    {
        nombre: "Costa soleada",
        ubicacion: "Pinamar",
        disponible: false,
    },

    {
        nombre: "Rivera",
        ubicacion: "Mar del Plata",
        disponible: false,
    },

    {
        nombre: "Playa dorada",
        ubicacion: "Miramar",
        disponible: true,
    },

    {
        nombre: "Sunrise",
        ubicacion: "Pinamar",
        disponible: false
    },
]
function ejercicio(array){
let nuevoArr=[]
for (let i = 0; i < array.length; i++){

    if (array[i].disponible === true){
        nuevoArr.push(array[i]); // ----> agrega el nuevo elemento en el nuevo array 
       
        
    }
}
return nuevoArr;
}
console.log(ejercicio(hoteles));


