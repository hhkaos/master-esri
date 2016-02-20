'use strict';





/*
  Capturar un error con:

  try{
    ....
  }catch(e){
  
  }

  Evita que se detenga la ejecución
*/
try{
  console.log('invented = ', invented);
}catch(e){
  console.log('e = ', e); 
}
console.log('Termino la ejecución');

/*
  La palabra debugger establece un punto de parada
*/
debugger;
