'use strict';

var integer = 3,
    float = 3.14,
    array = [1,2,3],
    boolean = true,
    string = 'hello',
    obj = {};

/*
    Función typeof para consultar el tipo de una variable
*/
console.log('typeof integer === ', typeof integer);
console.log('typeof float === ', typeof float);
console.log('typeof boolean === ', typeof boolean);
console.log('typeof string === ', typeof string);
console.log('typeof array === ', typeof array);
console.log('typeof obj === ', typeof obj);


/*
  Valores null y undefined:
  - undefined: significa que a una variable ha sido declarada pero no se le ha asignado ningun valor
  - null: es un valor
*/

console.log('null === undefined -->', null === undefined); // false
console.log('null == undefined -->', null == undefined); // true
console.log('null === null -->', null === null); // true

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

/*
  ¿Como interpreta los valores no booleanos un if?
*/
var values = [-1, 0, 1, null, '', undefined, 'texto', {}, []];
for(var i in values){
  if(values[i]){
    console.log('El valor: "' + values[i] + '" === true');
  }else{
    console.log('El valor: "' + values[i] + '" === false');
  }  
}
