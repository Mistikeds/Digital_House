/*
for(inicio; condicion; modificador){}
if(){}*/

for(let i = 0; i <= 10; i++){
    console.log(i);
}

function imprimirPares(){

    for(let i = 0; i <= 10; i++){
        
        if(i % 2 === 0){ // si i es par
            console.log(i)
        }
    }
}

imprimirPares();

for(let i = 5; i <= 20 ; i = i + 3 ){
        
    console.log(i)
   }

   let a = 0
for(let i = 0; i <= 100 ; i++ ){
    a = a + i
    
        
    console.log(a)
   }


   function promedio(nota1,nota2,nota3){

    let promedio1= (nota1+nota2+nota3)/3
    console.log(promedio1)

   }
   promedio(7,7,6)



function verificarCorreos(array){
    for(let i = 0; i < array.length; i++){
        if(array[i].includes('@')){
            arrayCorreosAdmitidos.push(array[i]);
        } else {
            arrayCorreosDescartados.push(array[i]);
        }
   }}