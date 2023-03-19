
function totalAPagar(vehiculo, litroConsumido)
if(vehiculo == "coche"){
let litroC = 86
    if(litroConsumido > 0 && litroConsumido <= 25){
        let impuesto = 50 
        let total = litroC * litroConsumido + impuesto
        return total
}
    else if(litroConsumido > 25){
        let impuesto = 25 
        let total = litroC * litroConsumido + impuesto
        return total
}
}
else if(vehiculo == "moto"){
    let litroM = 70
    if(litroConsumido > 0 && litroConsumido <= 25){
            let impuesto = 50 
            let total = litroM * litroConsumido + impuesto
            return total
    }
    else if(litroConsumido > 25){
            let impuesto = 25 
            let total = litroM * litroConsumido + impuesto
            return total
    }
}
else if(vehiculo == "autobus"){
        let litroAB = 55
    if(litroConsumido > 0 && litroConsumido <= 25){
                let impuesto = 50 
                let total = litroAB * litroConsumido + impuesto
                return total
    }
    else if(litroConsumido > 25){
                let impuesto = 25 
                let total = litroAB * litroConsumido + impuesto
                return total
    }
}

console.log(totalAPagar ("coche", 16))






// else if(vehiculo === "moto"){
//     let litroM = 70
// }
// else if(vehiculo === "autobus"){
//     let litroAB = 55 
// }