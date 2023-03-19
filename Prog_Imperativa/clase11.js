let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];


let banco = {
  clientes: arrayCuentas,
  consultarCliente: function(titular){
      for(let i = 0; i < this.clientes.length; i++){
          if(titular === this.clientes[i].titularCuenta){
              return this.clientes[i]
          }
      }
  },
  deposito: function(titular, cantDineroADepositar){
      for(let i = 0; i < this.clientes.length; i++){
          if(titular === this.clientes[i].titularCuenta){
          
              console.log('El nuevo saldo es: ' + (this.clientes[i].saldoEnPesos += cantDineroADepositar));
          }
      }
  }, 
  extraccion: function(titular, montoAExtraer){
      for(let i = 0; i < this.clientes.length; i++){
          if(titular === this.clientes[i].titularCuenta){
              if(this.clientes[i].saldoEnPesos >= montoAExtraer){
                  console.log('Extraccion realizada correctamente, su nuevo saldo es: ' + (this.clientes[i].saldoEnPesos -= montoAExtraer));
              } else {
                  console.log('Fondos insuficientes');
              }
          } 
      }


  }
}

//   console.log(banco.consultarCliente(7401971607)); 

// banco.deposito('Jacki Shurmer', 5000);
// console.log(arrayCuentas);


banco.extraccion('Jacki Shurmer', 25000);